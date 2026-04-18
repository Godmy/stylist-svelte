export function handleKeydownFn(e: KeyboardEvent, onSend: () => void) {
	if (e.key === 'Enter' && !e.shiftKey) {
		e.preventDefault();
		onSend();
	}
}
