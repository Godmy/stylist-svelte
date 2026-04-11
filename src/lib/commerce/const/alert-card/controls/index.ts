import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

export const alertCardControls: InterfaceControllerSettings[] = [
	{ name: 'title', type: 'text', defaultValue: 'Usage Limit Reached' },
	{ name: 'subtitle', type: 'text', defaultValue: 'Upgrade to continue processing requests.' },
	{ name: 'variant', type: 'select', defaultValue: 'warning', options: ['info', 'success', 'warning', 'error'] }
];
