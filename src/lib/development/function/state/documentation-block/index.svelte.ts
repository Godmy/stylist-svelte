import type { Props } from '$stylist/development/type/struct/documentation-block';
import { DocumentationBlockStyleManager } from '$stylist/development/class/style-manager/documentation-block';

export function createDocumentationBlockState(props: Props) {
	let variantClasses = $derived({
		default: 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900',
		info: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
		warning: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
		success: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
		danger: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
	}[props.variant as keyof {
		default: string;
		info: string;
		warning: string;
		success: string;
		danger: string;
	}]);

	let variantHeaderClasses = $derived({
		default: 'bg-gray-50 dark:bg-gray-800',
		info: 'bg-blue-100 dark:bg-blue-800/30',
		warning: 'bg-yellow-100 dark:bg-yellow-800/30',
		success: 'bg-green-100 dark:bg-green-800/30',
		danger: 'bg-red-100 dark:bg-red-800/30'
	}[props.variant as keyof {
		default: string;
		info: string;
		warning: string;
		success: string;
		danger: string;
	}]);

	const containerClass = $derived(DocumentationBlockStyleManager.getContainerClass(variantClasses, typeof props.class === 'string' ? props.class : undefined));
	const headerContainerClass = $derived(DocumentationBlockStyleManager.getHeaderContainerClass(variantHeaderClasses));
	const headerContentClass = $derived(DocumentationBlockStyleManager.getHeaderContentClass());
	const titleClass = $derived(DocumentationBlockStyleManager.getTitleClass());
	const tagsContainerClass = $derived(DocumentationBlockStyleManager.getTagsContainerClass());
	const tagClass = $derived(DocumentationBlockStyleManager.getTagClass());
	const contentClass = $derived(DocumentationBlockStyleManager.getContentClass());
	const codeExamplesContainerClass = $derived(DocumentationBlockStyleManager.getCodeExamplesContainerClass());
	const codeExampleDividerClass = $derived(DocumentationBlockStyleManager.getCodeExampleDividerClass());

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
		},
		get contentClass() {
			return contentClass;
		},
		get codeExamplesContainerClass() {
			return codeExamplesContainerClass;
		},
		get codeExampleDividerClass() {
			return codeExampleDividerClass;
		}
	};
}

export default createDocumentationBlockState;
