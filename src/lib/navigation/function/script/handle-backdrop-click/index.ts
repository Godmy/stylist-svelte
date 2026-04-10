export function handleBackdropClick(
	e: MouseEvent,
	backdropEl: HTMLElement | null,
	closable: boolean,
	closeFn: () => void
) {
	if (e.target === backdropEl && closable) {
		closeFn();
	}
}
