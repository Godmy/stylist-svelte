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

	const typeStyles: Record<'info' | 'success' | 'warning' | 'error', string> = {
		info: 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]',
		success: 'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-800)]',
		warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
		error: 'bg-[var(--color-danger-50)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]'
	};

	const typeIcons: Record<'info' | 'success' | 'warning' | 'error', string> = {
		info: '\u2139',
		success: '\u2713',
		warning: '\u26a0',
		error: '\u2715'
	};

	const containerClasses = $derived(
		`border-l-4 p-4 rounded-r-lg flex items-start justify-between ${typeStyles[type as keyof typeof typeStyles]} ${className}`
	);

	function handleClose(): void {
		visible = false;
		props.onClose?.();
	}

	return {
		get title() { return title; },
		get message() { return message; },
		get type() { return type; },
		get showIcon() { return showIcon; },
		get autoDismiss() { return autoDismiss; },
		get duration() { return duration; },
		get visible() { return visible; },
		get className() { return className; },
		get typeStyles() { return typeStyles; },
		get typeIcons() { return typeIcons; },
		get containerClasses() { return containerClasses; },
		handleClose
	};
}

export default createPushNotificationState;
