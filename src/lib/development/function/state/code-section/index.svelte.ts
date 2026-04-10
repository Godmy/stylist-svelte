import type { Props } from '$stylist/development/type/struct/code-section';
import { CodeSectionStyleManager } from '$stylist/development/class/style-manager/code-section';

export function createCodeSectionState(props: Props) {
	const containerClass = $derived(CodeSectionStyleManager.getContainerClass(typeof props.class === 'string' ? props.class : undefined));
	const headerContainerClass = $derived(CodeSectionStyleManager.getHeaderContainerClass());
	const headerContentClass = $derived(CodeSectionStyleManager.getHeaderContentClass());
	const titleClass = $derived(CodeSectionStyleManager.getTitleClass());
	const tagsContainerClass = $derived(CodeSectionStyleManager.getTagsContainerClass());
	const tagClass = $derived(CodeSectionStyleManager.getTagClass());

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
