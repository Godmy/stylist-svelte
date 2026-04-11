export function createAlertCardStoryState(props: AlertCardStoryProps) {
	return {
		get id() { return props.id ?? ''; },
		get title() { return props.title ?? ''; },
		get description() { return props.description ?? ''; },
		get controls() { return props.controls ?? []; }
	};
}

export default createAlertCardStoryState;
