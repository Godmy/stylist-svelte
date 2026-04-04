import { PopoverStyleManager, type PopoverPosition } from '$stylist/layout/class/style-manager/popover';
import type { Snippet } from 'svelte';

export interface PopoverProps {
	title?: string;
	content: Snippet;
	trigger: Snippet;
	open?: boolean;
	position?: PopoverPosition;
	class?: string;
}

export function createPopoverState(props: PopoverProps) {
	let isVisible = $state(props.open ?? false);
	let triggerElement: HTMLElement | null = $state(null);
	let popoverElement: HTMLElement | null = $state(null);

	const position = $derived<PopoverPosition>(props.position ?? 'bottom');
	const rootClass = $derived(PopoverStyleManager.getRootClass(props.class));
	const popoverClass = $derived(PopoverStyleManager.getPopoverClass(position, props.class));
	const titleClass = $derived(PopoverStyleManager.getTitleClass());

	$effect(() => {
		if (props.open !== undefined) {
			isVisible = props.open;
		}
	});

	function setOpen(value: boolean): void {
		isVisible = value;
	}

	function toggleOpen(): void {
		isVisible = !isVisible;
	}

	return {
		get isVisible() {
			return isVisible;
		},
		set isVisible(value: boolean) {
			isVisible = value;
		},
		get triggerElement() {
			return triggerElement;
		},
		set triggerElement(value: HTMLElement | null) {
			triggerElement = value;
		},
		get popoverElement() {
			return popoverElement;
		},
		set popoverElement(value: HTMLElement | null) {
			popoverElement = value;
		},
		get rootClass() {
			return rootClass;
		},
		get popoverClass() {
			return popoverClass;
		},
		get titleClass() {
			return titleClass;
		},
		setOpen,
		toggleOpen
	};
}

export default createPopoverState;


