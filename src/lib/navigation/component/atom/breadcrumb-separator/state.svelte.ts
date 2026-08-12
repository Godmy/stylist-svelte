import type { RecipeBreadcrumbSeparator } from '$stylist/navigation/interface/recipe/breadcrumb-separator';

export function createBreadcrumbSeparatorState(props: RecipeBreadcrumbSeparator) {
	const separatorClasses = $derived(`c-breadcrumb-separator ${props.class ?? ''}`.trim());

	return {
		get separatorClasses() {
			return separatorClasses;
		}
	};
}

export default createBreadcrumbSeparatorState;
