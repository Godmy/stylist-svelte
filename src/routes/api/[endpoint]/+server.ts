import { serializeUnknownError } from '$stylist/domain/function/serialize/unknown-error';
import { DiagnosticManager } from '$stylist/server/class/manager/diagnostic';
import { DomainManager } from '$stylist/server/class/manager/domain';
import { json, type RequestEvent } from '@sveltejs/kit';

type ApiEndpoint = 'content' | 'descriptor' | 'di';

function isApiEndpoint(value: string): value is ApiEndpoint {
	return value === 'content' || value === 'descriptor' || value === 'di';
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
			case 'content':
				return DomainManager.getContentFileResponse(event);
			case 'descriptor':
				return DomainManager.getDomainComponentProjectionResponse(event);
			case 'di':
				return DiagnosticManager.getDependencyResponse(event);
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
			case 'di':
				return json({ error: 'POST is not supported for di.' }, { status: 405 });
			case 'descriptor':
				return json({ error: 'POST is not supported for descriptor.' }, { status: 405 });
			case 'content':
				return json({ error: 'POST is not supported for content.' }, { status: 405 });
		}
	} catch (error) {
		return buildErrorResponse(event, `${endpoint} POST failed`, error);
	}

	return json({ error: 'Unhandled endpoint.' }, { status: 500 });
}
