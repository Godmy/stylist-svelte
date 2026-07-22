import type { PushNotificationProps } from '$stylist/management/interface/recipe/push-notification';

export function createPushNotificationState(props: PushNotificationProps) {
	const title = $derived(props.title ?? '');
	const message = $derived(props.message ?? '');
	const type = $derived(props.type ?? 'info');
	const showIcon = $derived(props.showIcon ?? true);
	const autoDismiss = $derived(props.autoDismiss ?? true);
	const duration = $derived(props.duration ?? 5000);
	const className = $derived(props.class ?? '');

	let visible = $state(true);

	$effect(() => {
		if (autoDismiss && visible) {
			const timer = setTimeout(() => {
				visible = false;
				props.onClose?.();
			}, duration);
			return () => clearTimeout(timer);
		}
	});

	const typeIcons: Record<'info' | 'success' | 'warning' | 'error', string> = {
		info: '\u2139',
		success: '\u2713',
		warning: '\u26a0',
		error: '\u2715'
	};

	const containerClasses = $derived(
		`c-push-notification c-push-notification--${type} ${className}`.trim()
	);

	function handleClose(): void {
		visible = false;
		props.onClose?.();
	}

	return {
		get title() {
			return title;
		},
		get message() {
			return message;
		},
		get type() {
			return type;
		},
		get showIcon() {
			return showIcon;
		},
		get autoDismiss() {
			return autoDismiss;
		},
		get duration() {
			return duration;
		},
		get visible() {
			return visible;
		},
		get className() {
			return className;
		},
		get typeIcons() {
			return typeIcons;
		},
		get containerClasses() {
			return containerClasses;
		},
		handleClose
	};
}

export default createPushNotificationState;
