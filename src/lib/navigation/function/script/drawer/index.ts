export function createDrawerCloseHandler(closable: boolean, closeFn: () => void): () => void {
	return () => {
		if (closable) {
			closeFn();
		}
	};
}
