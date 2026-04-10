import Info from '$stylist/svg/information/outline/info.svg';
import CheckCircle from '$stylist/svg/information/outline/check-circle.svg';
import AlertTriangle from '$stylist/svg/information/outline/alert-triangle.svg';
import XCircle from '$stylist/svg/information/outline/x-circle.svg';
import X from '$stylist/svg/information/outline/x.svg';
import type { AlertProps } from '$stylist/notification/type/struct/alert-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createAlertState(props: AlertProps) {
	const iconMap = {
		info: Info,
		success: CheckCircle,
		warning: AlertTriangle,
		error: XCircle,
		danger: XCircle,
		primary: Info,
		secondary: Info
	} as const;

	const IconComponent = $derived(iconMap[props.variant as keyof typeof iconMap]);
	const XIcon = X;

	const alertClasses = $derived(
		joinClassNames('alert-container', `variant-${props.variant}`, props.class ?? '')
	);
	const iconContainerClasses = $derived('alert-icon');
	const iconClasses = $derived(joinClassNames('alert-icon', `variant-${props.variant}`));
	const textContainerClasses = $derived('alert-content');
	const titleClasses = $derived('alert-title');
	const contentContainerClasses = $derived('alert-description');
	const mainContainerClasses = $derived('alert-content');
	const closeButtonContainerClasses = $derived('alert-content');
	const closeButtonClasses = $derived(joinClassNames('alert-icon', `variant-${props.variant}`));

	let open = $state(true);

	function handleClose() {
		open = false;
	}

	return {
		get IconComponent() {
			return IconComponent;
		},
		get XIcon() {
			return XIcon;
		},
		get alertClasses() {
			return alertClasses;
		},
		get iconContainerClasses() {
			return iconContainerClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get textContainerClasses() {
			return textContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get contentContainerClasses() {
			return contentContainerClasses;
		},
		get mainContainerClasses() {
			return mainContainerClasses;
		},
		get closeButtonContainerClasses() {
			return closeButtonContainerClasses;
		},
		get closeButtonClasses() {
			return closeButtonClasses;
		},
		get open() {
			return open;
		},
		handleClose
	};
}

export default createAlertState;
