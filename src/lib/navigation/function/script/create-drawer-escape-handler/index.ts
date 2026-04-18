export function createDrawerEscapeHandler(closable: boolean, closeFn: () => void): (e: KeyboardEvent) => void {
	return (e: KeyboardEvent) => {
		if (e.key === 'Escape' && closable) {
			closeFn();
		}
	};
}
