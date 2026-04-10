export function handleEscape(e: KeyboardEvent, closable: boolean, closeFn: () => void) {
	if (e.key === 'Escape' && closable) {
		closeFn();
	}
}
