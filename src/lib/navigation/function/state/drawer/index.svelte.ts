import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props';
import { DrawerStyleManager } from '$stylist/navigation/class/style-manager/drawer';
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
	const backdropClasses = $derived(DrawerStyleManager.getBackdropClasses(showBackdrop));
	const drawerClasses = $derived(DrawerStyleManager.getDrawerClasses(position, typeof props.class === 'string' ? props.class : ''));
	const drawerOpenClasses = $derived(DrawerStyleManager.getDrawerOpenClasses(isOpen, position));
	const headerClasses = $derived(DrawerStyleManager.getHeaderClasses());
	const contentClasses = $derived(DrawerStyleManager.getContentClasses());
	const actionsClasses = $derived(DrawerStyleManager.getActionsClasses());
	const closeButtonClasses = $derived(DrawerStyleManager.getCloseButtonClasses());

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
		get backdropClasses() {
			return backdropClasses;
		},
		get drawerClasses() {
			return drawerClasses;
		},
		get drawerOpenClasses() {
			return drawerOpenClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get actionsClasses() {
			return actionsClasses;
		},
		get closeButtonClasses() {
			return closeButtonClasses;
		},
		closeFn,
		handleBackdropClickFn,
		handleBackdropKeyDownFn,
		handleEscapeFn
	};
}


export default createDrawerState;
