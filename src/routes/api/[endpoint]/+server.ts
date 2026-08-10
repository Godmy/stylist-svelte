import { serializeUnknownError } from '$stylist/domain/function/serialize/unknown-error';
import { getBacklogResponse } from '$stylist/server/function/async-get/backlog-response';
import { getBuilderResponse } from '$stylist/server/function/async-get/builder-response';
import { getContentResponse } from '$stylist/server/function/async-get/content-response';
import { getDescriptorResponse } from '$stylist/server/function/async-get/descriptor-response';
import { getIssuesResponse } from '$stylist/server/function/async-get/issues-response';
import { postBacklogIssueResponse } from '$stylist/server/function/async-post/backlog-issue-response';
import { postBacklogResponse } from '$stylist/server/function/async-post/backlog-response';
import { postBuilderResponse } from '$stylist/server/function/async-post/builder-response';
import { postContentResponse } from '$stylist/server/function/async-post/content-response';
import { postIssuesResponse } from '$stylist/server/function/async-post/issues-response';
import { postTemplateExportResponse } from '$stylist/server/function/async-post/template-export-response';
import { appendErrorLog } from '$stylist/server/function/script/append-error-log';
import { json, type RequestEvent } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

type ApiEndpoint =
	| 'backlog'
	| 'backlog-issue'
	| 'builder'
	| 'content'
	| 'descriptor'
	| 'di'
	| 'issues'
	| 'template-export';

type DependencyTreeNode = {
	key: string;
	children?: DependencyTreeNode[];
};

type TreeNode = {
	id: string;
	label: string;
	children?: TreeNode[];
	expanded?: boolean;
};

type DependencyFileEntry = {
	file?: string;
	raw_content?: string;
};

type DependencySourceEntry = {
	files?: DependencyFileEntry[];
};

function getDiOutputFilePath(fileName: string): string | null {
	const outputDirectoryPath = [
		path.resolve(process.cwd(), '..', 'stylist', 'di', 'output'),
		path.resolve(process.cwd(), 'stylist', 'di', 'output')
	].find((candidate) => fs.existsSync(candidate));

	if (!outputDirectoryPath) {
		return null;
	}

	return path.join(outputDirectoryPath, fileName);
}

function readJsonFile<T>(fileName: string): T | null {
	const filePath = getDiOutputFilePath(fileName);

	if (!filePath || !fs.existsSync(filePath)) {
		return null;
	}

	return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function flattenDependencyTree(node: DependencyTreeNode | null): Array<{ key: string; depth: number }> {
	if (!node?.children) {
		return [];
	}

	const seen = new Set<string>();
	const dependencies: Array<{ key: string; depth: number }> = [];

	function visit(children: DependencyTreeNode[], depth: number): void {
		for (const child of children) {
			if (!seen.has(child.key)) {
				seen.add(child.key);
				dependencies.push({ key: child.key, depth });
			}

			if (child.children) {
				visit(child.children, depth + 1);
			}
		}
	}

	visit(node.children, 1);
	return dependencies;
}

function mapDependencyTreeNodes(nodes: DependencyTreeNode[] | undefined): TreeNode[] {
	return (
		nodes?.map((node) => ({
			id: node.key,
			label: node.key,
			expanded: true,
			children: mapDependencyTreeNodes(node.children)
		})) ?? []
	);
}

function getDependencyResponse(event: RequestEvent): Response {
	const componentKey = event.url.searchParams.get('component')?.replace(/\//g, '\\') ?? '';
	const requestedDependencyKey =
		event.url.searchParams.get('dependency')?.replace(/\//g, '\\') ?? '';

	if (!componentKey) {
		return json({ error: 'Missing "component" query parameter.' }, { status: 400 });
	}

	const dependencyTrees = readJsonFile<Record<string, DependencyTreeNode>>(
		'step-3-component-dependency-trees.json'
	);

	if (!dependencyTrees) {
		return json({ error: 'DI dependency tree output is not available.' }, { status: 404 });
	}

	const componentTree = dependencyTrees[componentKey] ?? null;
	const dependencies = flattenDependencyTree(componentTree);
	const selectedDependencyKey =
		dependencies.find((dependency) => dependency.key === requestedDependencyKey)?.key ??
		dependencies[0]?.key ??
		'';

	const sourceByKey = selectedDependencyKey
		? readJsonFile<Record<string, DependencySourceEntry>>('step-1-files-by-key.json')
		: null;
	const selectedDependencyFiles =
		sourceByKey?.[selectedDependencyKey]?.files?.map((file) => ({
			name: file.file ?? 'source',
			content: file.raw_content ?? ''
		})) ?? [];

	return json({
		componentKey,
		dependencies,
		dependencyTreeNodes: mapDependencyTreeNodes(componentTree?.children),
		selectedDependencyKey,
		selectedDependencyFiles
	});
}

function isApiEndpoint(value: string): value is ApiEndpoint {
	return (
		value === 'backlog' ||
		value === 'backlog-issue' ||
		value === 'builder' ||
		value === 'content' ||
		value === 'descriptor' ||
		value === 'di' ||
		value === 'issues' ||
		value === 'template-export'
	);
}

function buildErrorResponse(
	event: RequestEvent,
	fallbackMessage: string,
	error: unknown
): Response {
	const serializedError = serializeUnknownError(error);

	appendErrorLog({
		timestamp: new Date().toISOString(),
		source: 'server',
		routeId: event.route.id ?? null,
		url: event.url.toString(),
		method: event.request.method,
		message: serializedError.message || fallbackMessage,
		stack: serializedError.stack,
		name: serializedError.name,
		status: 500,
		details: {
			params: event.params,
			isDataRequest: event.isDataRequest,
			endpoint: event.params.endpoint
		}
	});

	return json({ error: serializedError.message || fallbackMessage }, { status: 500 });
}

export function GET(event: RequestEvent): Response {
	const endpoint = event.params.endpoint ?? '';

	if (!isApiEndpoint(endpoint)) {
		return json({ error: 'Unknown endpoint.' }, { status: 404 });
	}

	try {
		switch (endpoint) {
			case 'backlog':
				return getBacklogResponse(event);
			case 'builder':
				return getBuilderResponse();
			case 'content':
				return getContentResponse(event);
			case 'descriptor':
				return getDescriptorResponse(event);
			case 'di':
				return getDependencyResponse(event);
			case 'issues':
				return getIssuesResponse(event);
			case 'backlog-issue':
				return json({ error: 'GET is not supported for backlog-issue.' }, { status: 405 });
			case 'template-export':
				return json({ error: 'GET is not supported for template-export.' }, { status: 405 });
		}
	} catch (error) {
		return buildErrorResponse(event, `${endpoint} GET failed`, error);
	}

	return json({ error: 'Unhandled endpoint.' }, { status: 500 });
}

export async function POST(event: RequestEvent): Promise<Response> {
	const endpoint = event.params.endpoint ?? '';

	if (!isApiEndpoint(endpoint)) {
		return json({ error: 'Unknown endpoint.' }, { status: 404 });
	}

	try {
		switch (endpoint) {
			case 'backlog':
				return await postBacklogResponse(event);
			case 'backlog-issue':
				return await postBacklogIssueResponse(event);
			case 'builder':
				return await postBuilderResponse(event);
			case 'content':
				return await postContentResponse(event);
			case 'issues':
				return await postIssuesResponse(event);
			case 'template-export':
				return await postTemplateExportResponse(event);
			case 'di':
				return json({ error: 'POST is not supported for di.' }, { status: 405 });
			case 'descriptor':
				return json({ error: 'POST is not supported for descriptor.' }, { status: 405 });
		}
	} catch (error) {
		return buildErrorResponse(event, `${endpoint} POST failed`, error);
	}

	return json({ error: 'Unhandled endpoint.' }, { status: 500 });
}
