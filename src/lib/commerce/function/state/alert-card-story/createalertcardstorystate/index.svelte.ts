import type { AlertCardStoryProps } from '../alertcardstoryprops';

export function createAlertCardStoryState(props: AlertCardStoryProps) {
	return {
		get id() { return props.id ?? ''; },
		get component() { return (props as AlertCardStoryProps & { component?: unknown }).component; },
		get title() { return props.title ?? ''; },
		get description() { return props.description ?? ''; },
		get controls() { return props.controls ?? []; }
	};
}

export default createAlertCardStoryState;
