import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ComplexAccordionProps } from '$stylist/control/interface/component/accordion/other';

/**
 * ComplexAccordion state
 */

export function createComplexAccordionState(props: ComplexAccordionProps) {
	const classes = $derived(joinClassNames('complex-accordion-root', props.class));
	const accordionId = Math.random().toString(36).substring(2, 9);
	let openPanels = $state(props.defaultValue ?? []);

	$effect(() => {
		if (props.value !== undefined) {
			openPanels = [...props.value];
		}
	});

	function handleValueChange(panelId: string) {
		let nextOpenPanels: string[];

		if ((props.multiple ?? false)) {
			nextOpenPanels = openPanels.includes(panelId)
				? openPanels.filter((id) => id !== panelId)
				: [...openPanels, panelId];
		} else {
			nextOpenPanels = openPanels.includes(panelId) ? [] : [panelId];
		}

		openPanels = nextOpenPanels;
		props.onValueChange?.(nextOpenPanels);
	}

	function isPanelOpen(panelId: string): boolean {
		return openPanels.includes(panelId);
	}

	return {
		multiple: props.multiple ?? false,
		defaultValue: props.defaultValue ?? [],
		value: props.value ?? [],
		onValueChange: props.onValueChange,
		accordionId,
		get openPanels() {
			return openPanels;
		},
		handleValueChange,
		isPanelOpen,
		get classes() {
			return classes;
		}
	};
}

export default createComplexAccordionState;





