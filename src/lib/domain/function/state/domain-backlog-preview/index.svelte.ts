export function createDomainBacklogPreviewState(input: {
	getPath: () => string;
	onOpen: () => void;
}) {
	let content = $state('');
	let loading = $state(false);
	let error = $state('');
	let requestId = 0;

	async function handleBacklogToggle() {
		requestId += 1;
		const activeRequestId = requestId;
		input.onOpen();
		content = '';
		error = '';

		const path = input.getPath();
		if (!path) {
			loading = false;
			return;
		}

		loading = true;
		try {
			const response = await fetch(`/content?path=${encodeURIComponent(path)}`);
			const payload = await response.json();
			if (!response.ok) {
				throw new Error(payload.error ?? 'Backlog preview failed');
			}
			if (activeRequestId !== requestId) {
				return;
			}
			content = payload.content ?? '';
		} catch (value) {
			if (activeRequestId !== requestId) {
				return;
			}
			error = value instanceof Error ? value.message : String(value);
		} finally {
			if (activeRequestId === requestId) {
				loading = false;
			}
		}
	}

	return {
		get content() {
			return content;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		handleBacklogToggle
	};
}
