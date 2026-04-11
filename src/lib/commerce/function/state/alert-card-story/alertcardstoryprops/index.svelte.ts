import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

export type AlertCardStoryProps = {
	id?: string;
	title?: string;
	description?: string;
	controls?: InterfaceControllerSettings[];
	component?: unknown;
};
