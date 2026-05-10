import { getContentFileResponse } from '$stylist/server/function/async/get-content-file-response';
import { postContentBacklogResponse } from '$stylist/server/function/async/post-content-backlog-response';
import { appendErrorLog } from '$stylist/server/function/script/append-error-log';
import { serializeUnknownError } from '$stylist/development/function/script/serialize-unknown-error';
import { json, type RequestEvent } from '@sveltejs/kit';

export function GET(event: RequestEvent) {
	try {
		const response = getContentFileResponse(event);

		if (response.status >= 500) {
			appendErrorLog({
				timestamp: new Date().toISOString(),
				source: 'server',
				routeId: event.route.id ?? null,
				url: event.url.toString(),
				method: event.request.method,
				message: 'Content GET returned 500 response',
				stack: null,
				name: null,
				status: response.status,
				details: {
					params: event.params,
					isDataRequest: event.isDataRequest,
					contentPath: event.url.searchParams.get('path')
				}
			});
		}

		return response;
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Content GET failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest,
				contentPath: event.url.searchParams.get('path')
			}
		});

		return json({ error: serializedError.message || 'Content GET failed' }, { status: 500 });
	}
}

export async function POST(event: RequestEvent) {
	try {
		const response = await postContentBacklogResponse(event);

		if (response.status >= 500) {
			appendErrorLog({
				timestamp: new Date().toISOString(),
				source: 'server',
				routeId: event.route.id ?? null,
				url: event.url.toString(),
				method: event.request.method,
				message: 'Content POST returned 500 response',
				stack: null,
				name: null,
				status: response.status,
				details: {
					params: event.params,
					isDataRequest: event.isDataRequest
				}
			});
		}

		return response;
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Content POST failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest
			}
		});

		return json({ error: serializedError.message || 'Content POST failed' }, { status: 500 });
	}
}
