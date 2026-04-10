export function handleBackdropKeyDown(
	e: KeyboardEvent,
	backdropEl: HTMLElement | null,
	closable: boolean,
	closeFn: () => void
) {
	if ((e.key === 'Enter' || e.key === ' ') && e.target === backdropEl && closable) {
		e.preventDefault();
		closeFn();
	}
}
