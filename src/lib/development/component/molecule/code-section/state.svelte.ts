import type { CodeSectionProps } from '$stylist/development/type/struct/code-section-props';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createCodeSectionState(props: CodeSectionProps) {
	const containerClass = $derived(
		mergeClassNames(
			'c-code-section',
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const headerContainerClass = $derived('c-code-section__header');
	const headerContentClass = $derived('c-code-section__header-content');
	const titleClass = $derived('c-code-section__title');
	const tagsContainerClass = $derived('c-code-section__tags');
	const tagClass = $derived('c-code-section__tag');

	return {
		get containerClass() {
			return containerClass;
		},
		get headerContainerClass() {
			return headerContainerClass;
		},
		get headerContentClass() {
			return headerContentClass;
		},
		get titleClass() {
			return titleClass;
		},
		get tagsContainerClass() {
			return tagsContainerClass;
		},
		get tagClass() {
			return tagClass;
		}
	};
}

export default createCodeSectionState;
