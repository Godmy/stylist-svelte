import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props/drawer-props';
import { close } from '$stylist/navigation/function/script/close';
import { handleBackdropClick } from '$stylist/navigation/function/script/handle-backdrop-click';
import { handleBackdropKeyDown } from '$stylist/navigation/function/script/handle-backdrop-key-down';
import { handleEscape } from '$stylist/navigation/function/script/handle-escape';

export function createDrawerState(props: DrawerProps) {
	let drawerEl = $state<HTMLElement | null>(null);
	let backdropEl = $state<HTMLElement | null>(null);
	const isOpen = $derived(props.open ?? false);
	const position = $derived((props.position ?? 'right') as 'left' | 'right' | 'top' | 'bottom');
	const size = $derived(props.size ?? '300px');
	const closable = $derived(props.closable ?? true);
	const showBackdrop = $derived(props.showBackdrop ?? true);

	function closeFn() {
		close(props, closable);
	}

	function handleBackdropClickFn(e: MouseEvent) {
		handleBackdropClick(e, backdropEl, closable, closeFn);
	}

	function handleBackdropKeyDownFn(e: KeyboardEvent) {
		handleBackdropKeyDown(e, backdropEl, closable, closeFn);
	}

	function handleEscapeFn(e: KeyboardEvent) {
		handleEscape(e, closable, closeFn);
	}

	return {
		get isOpen() {
			return isOpen;
		},
		get drawerEl() {
			return drawerEl;
		},
		set drawerEl(value: HTMLElement | null) {
			drawerEl = value;
		},
		get backdropEl() {
			return backdropEl;
		},
		set backdropEl(value: HTMLElement | null) {
			backdropEl = value;
		},
		get position() {
			return position;
		},
		get size() {
			return size;
		},
		get closable() {
			return closable;
		},
		get showBackdrop() {
			return showBackdrop;
		},
		closeFn,
		handleBackdropClickFn,
		handleBackdropKeyDownFn,
		handleEscapeFn
	};
}

export default createDrawerState;
