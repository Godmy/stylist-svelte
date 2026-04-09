import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props';
import { DRAWER_POSITION_CLASSES, DRAWER_OPEN_POSITION_CLASSES, DRAWER_BASE_CLASS, DRAWER_BACKDROP_BASE_CLASS, DRAWER_BACKDROP_VISIBLE_CLASS } from '$stylist/navigation/const/record/drawer-position-classes';

export function createDrawerState(props: DrawerProps) {
	const isOpen = $derived(props.open ?? false);
	const position = $derived((props.position ?? 'right') as 'left' | 'right' | 'top' | 'bottom');
	const size = $derived(props.size ?? '300px');
	const closable = $derived(props.closable ?? true);
	const showBackdrop = $derived(props.showBackdrop ?? true);
	const backdropClasses = $derived(`${DRAWER_BACKDROP_BASE_CLASS} ${showBackdrop ? DRAWER_BACKDROP_VISIBLE_CLASS : 'opacity-[var(--opacity-0)]'}`);
	const drawerClasses = $derived(`${DRAWER_BASE_CLASS} ${DRAWER_POSITION_CLASSES[position] ?? ''} ${props.class ?? ''}`);
	const drawerOpenClasses = $derived(isOpen ? DRAWER_OPEN_POSITION_CLASSES[position] ?? '' : '');

	return {
		get isOpen() {
			return isOpen;
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