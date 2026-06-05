import { normalizeText } from '$stylist/typography/function/script/text-normalize';

export function serializeUnknownError(error: unknown): {
	message: string;
	stack: string | null;
	name: string | null;
} {
	if (error instanceof Error) {
		return {
			message: normalizeText(error.message, error.name || 'Error'),
			stack: typeof error.stack === 'string' ? error.stack : null,
			name: error.name || 'Error'
		};
	}
	if (typeof error === 'string') {
		return {
			message: normalizeText(error, 'Unknown runtime error'),
			stack: null,
			name: 'Error'
		};
	}
	try {
		return {
			message: normalizeText(JSON.stringify(error), 'Unknown runtime error'),
			stack: null,
			name: 'NonErrorThrowable'
		};
	} catch {
		return {
			message: 'Unknown runtime error',
			stack: null,
			name: 'NonSerializableThrowable'
		};
	}
}
