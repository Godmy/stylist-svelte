import type { FormSelectionProps } from '$stylist/form/type/struct/form-selection';
import type { SlotFormSelectionState } from '$stylist/form/interface/slot/form-selection-state';

export function createFormSelectionState(props: FormSelectionProps): SlotFormSelectionState {
	let isCollapsed = $state(props.initiallyCollapsed ?? false);

	const sectionClasses = $derived(`
    form-section
    ${props.border ? 'border border-[var(--color-border-primary)] rounded-lg' : ''}
    ${props.padding ? 'p-6' : 'p-0'}
    ${props.class ?? ''}
  `);

	const showHeader = $derived(!!props.title || (props.collapsible ?? false));

	const rootClass = $derived('form-section');
	const sectionHeaderClass = $derived('section-header');
	const headerContentClass = $derived('header-content');
	const titleClass = $derived('text-lg font-medium text-[var(--color-text-primary)] flex items-center');
	const requiredMarkClass = $derived('text-[var(--color-danger-500)] ml-1');
	const collapseButtonClass = $derived('mt-1 flex items-center justify-center w-6 h-6 rounded-full hover:bg-[var(--color-background-secondary)] focus:outline-none');
	const iconClass = $derived(`w-4 h-4 transform transition-transform text-[var(--color-text-secondary)] ${isCollapsed ? 'rotate-180' : ''}`);
	const sectionDescriptionClass = $derived('section-description');
	const sectionContentClass = $derived('section-content');

	return {
		get isCollapsed() { return isCollapsed; },
		set isCollapsed(v: boolean) { isCollapsed = v; },
		get sectionClasses() { return sectionClasses; },
		get showHeader() { return showHeader; },
		get rootClass() { return rootClass; },
		get sectionHeaderClass() { return sectionHeaderClass; },
		get headerContentClass() { return headerContentClass; },
		get titleClass() { return titleClass; },
		get requiredMarkClass() { return requiredMarkClass; },
		get collapseButtonClass() { return collapseButtonClass; },
		get iconClass() { return iconClass; },
		get sectionDescriptionClass() { return sectionDescriptionClass; },
		get sectionContentClass() { return sectionContentClass; }
	};
}

export default createFormSelectionState;
