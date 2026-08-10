import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { NotificationStateProps } from '$stylist/management/interface/recipe/notification';

export function createNotificationState(props: NotificationStateProps) {
	// Props with defaults
	const show = $derived(props.show ?? false);
	const title = $derived(props.title);
	const message = $derived(props.message);
	const type = $derived(props.type ?? 'info');
	const duration = $derived(props.duration ?? 5000);
	const closable = $derived(props.closable ?? true);
	const position = $derived(props.position ?? 'top-end');
	const showIcon = $derived(props.showIcon ?? true);
	const containerClasses = $derived(props.class == null ? undefined : String(props.class));

	// SlotState
	let isVisible = $state(props.show ?? false);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	// Sync with show prop
	$effect(() => {
		isVisible = props.show ?? false;
		if ((props.show ?? false) && duration > 0) {
			timeoutId = setTimeout(() => {
				handleClose();
			}, duration);
		}
	});

	// Cleanup on unmount
	$effect(() => {
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	});

	// Computed
	const iconMap: Record<string, string> = {
		success: 'check-circle',
		warning: 'alert-circle',
		error: 'x-circle',
		info: 'info',
		silent: 'info'
	};

	const iconComponent = $derived(iconMap[type] ?? 'info');
	const visualType = $derived<TokenColorTone>(type === 'silent' ? 'info' : type);

	// Methods
	function handleClose(): void {
		isVisible = false;
		props.onClose?.();
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			show: _show,
			title: _title,
			message: _message,
			children: _children,
			type: _type,
			duration: _duration,
			closable: _closable,
			onClose: _onClose,
			position: _position,
			showIcon: _showIcon,
			contentClass: _contentClass,
			headerClass: _headerClass,
			bodyClass: _bodyClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get show() {
			return show;
		},
		get isVisible() {
			return isVisible;
		},
		get title() {
			return title;
		},
		get message() {
			return message;
		},
		get type() {
			return type;
		},
		get visualType() {
			return visualType;
		},
		get duration() {
			return duration;
		},
		get closable() {
			return closable;
		},
		get position() {
			return position;
		},
		get showIcon() {
			return showIcon;
		},
		get iconComponent() {
			return iconComponent;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		},
		handleClose
	};
}

export default createNotificationState;
