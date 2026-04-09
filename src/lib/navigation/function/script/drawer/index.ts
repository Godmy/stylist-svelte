export function createDrawerCloseHandler(closable: boolean, closeFn: () => void): () => void {
	return () => {
		if (closable) {
			closeFn();
		}
	};
}

export function createDrawerBackdropHandler(closable: boolean, closeFn: () => void): (e: MouseEvent) => void {
	return (e: MouseEvent) => {
		if (e.target === e.currentTarget && closable) {
			closeFn();
		}
	};
}

export function createDrawerEscapeHandler(closable: boolean, closeFn: () => void): (e: KeyboardEvent) => void {
	return (e: KeyboardEvent) => {
		if (e.key === 'Escape' && closable) {
			closeFn();
		}
	};
}
