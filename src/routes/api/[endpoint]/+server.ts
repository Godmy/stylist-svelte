import { serializeUnknownError } from '$stylist/domain/function/serialize/unknown-error';
import { BacklogManager } from '$stylist/server/class/manager/backlog';
import { DiagnosticManager } from '$stylist/server/class/manager/diagnostic';
import { DomainManager } from '$stylist/server/class/manager/domain';
import { json, type RequestEvent } from '@sveltejs/kit';

type ApiEndpoint =
	| 'backlog'
	| 'backlog-issue'
	| 'builder'
	| 'content'
	| 'descriptor'
	| 'di'
	| 'issues'
	| 'template-export';

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

	DiagnosticManager.appendErrorLog({
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
				return BacklogManager.getBacklogResponse(event);
			case 'builder':
				return DomainManager.getBuilderLayoutResponse();
			case 'content':
				return DomainManager.getContentFileResponse(event);
			case 'descriptor':
				return DomainManager.getDomainComponentProjectionResponse(event);
			case 'di':
				return DiagnosticManager.getDependencyResponse(event);
			case 'issues':
				return BacklogManager.getIssuesResponse(event);
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
				return await BacklogManager.postBacklogResponse(event);
			case 'backlog-issue':
				return await BacklogManager.postBacklogIssueResponse(event);
			case 'builder':
				return await DomainManager.postBuilderLayoutResponse(event);
			case 'content':
				return await DomainManager.postContentBacklogResponse(event);
			case 'issues':
				return await BacklogManager.postIssuesResponse(event);
			case 'template-export':
				return await DomainManager.postTemplateExportFileResponse(event);
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
