export function createControlsState(props: Record<string, unknown>) {
	return {
		get props() { return props; }
	};
}

export default createControlsState;
