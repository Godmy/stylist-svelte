import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { FormSelectionProps } from '$stylist/form/type/struct/form-selection';
import type { SlotFormSelectionState } from '$stylist/form/interface/slot/form-selection-state';

export function createFormSelectionState(props: FormSelectionProps): SlotFormSelectionState {
	let isCollapsed = $state(props.initiallyCollapsed ?? false);

	const sectionClasses = $derived(
		mergeClassNames(
			'c-form-selection',
			props.border && 'c-form-selection--bordered',
			props.padding && 'c-form-selection--padded',
			props.class
		)
	);

	const showHeader = $derived(!!props.title || (props.collapsible ?? false));
	const rootClass = $derived('c-form-selection');
	const sectionHeaderClass = $derived('c-form-selection__header');
	const headerContentClass = $derived('c-form-selection__header-content');
	const titleClass = $derived('c-form-selection__title');
	const requiredMarkClass = $derived('c-form-selection__required');
	const collapseButtonClass = $derived('c-form-selection__collapse-btn');
	const iconClass = $derived(
		mergeClassNames('c-form-selection__icon', isCollapsed && 'c-form-selection__icon--rotated')
	);
	const sectionDescriptionClass = $derived('c-form-selection__description');
	const sectionContentClass = $derived('c-form-selection__content');

	return {
		get isCollapsed() {
			return isCollapsed;
		},
		set isCollapsed(v: boolean) {
			isCollapsed = v;
		},
		get sectionClasses() {
			return sectionClasses;
		},
		get showHeader() {
			return showHeader;
		},
		get rootClass() {
			return rootClass;
		},
		get sectionHeaderClass() {
			return sectionHeaderClass;
		},
		get headerContentClass() {
			return headerContentClass;
		},
		get titleClass() {
			return titleClass;
		},
		get requiredMarkClass() {
			return requiredMarkClass;
		},
		get collapseButtonClass() {
			return collapseButtonClass;
		},
		get iconClass() {
			return iconClass;
		},
		get sectionDescriptionClass() {
			return sectionDescriptionClass;
		},
		get sectionContentClass() {
			return sectionContentClass;
		}
	};
}

export default createFormSelectionState;
