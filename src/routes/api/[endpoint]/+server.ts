import { serializeUnknownError } from '$stylist/development/function/script/serialize-unknown-error';
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
import { appendErrorLog } from '$stylist/server/function/script/append-error-log';
import type { TypeApiEndpoint } from '$stylist/server/type/struct/api-endpoint';
import { json, type RequestEvent } from '@sveltejs/kit';

function isApiEndpoint(value: string): value is TypeApiEndpoint {
	return (
		value === 'backlog' ||
		value === 'backlog-issue' ||
		value === 'builder' ||
		value === 'content' ||
		value === 'descriptor' ||
		value === 'issues'
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
			case 'issues':
				return getIssuesResponse(event);
			case 'backlog-issue':
				return json({ error: 'GET is not supported for backlog-issue.' }, { status: 405 });
		}
	} catch (error) {
		return buildErrorResponse(event, `${endpoint} GET failed`, error);
	}
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
			case 'descriptor':
				return json({ error: 'POST is not supported for descriptor.' }, { status: 405 });
		}
	} catch (error) {
		return buildErrorResponse(event, `${endpoint} POST failed`, error);
	}
}
