export function createDrawerBackdropHandler(closable: boolean, closeFn: () => void): (e: MouseEvent) => void {
	return (e: MouseEvent) => {
		if (e.target === e.currentTarget && closable) {
			closeFn();
		}
	};
}
