import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

export type AlertCardStoryProps = {
	id?: string;
	title?: string;
	description?: string;
	controls?: InterfaceControllerSettings[];
	component?: any;
};

export function createAlertCardStoryState(props: AlertCardStoryProps) {
	return {
		get id() { return props.id ?? ''; },
		get title() { return props.title ?? ''; },
		get description() { return props.description ?? ''; },
		get controls() { return props.controls ?? []; },
		get component() { return props.component; }
	};
}

export default createAlertCardStoryState;
