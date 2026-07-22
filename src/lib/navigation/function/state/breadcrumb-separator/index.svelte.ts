import type { BreadcrumbSeparatorProps } from '$stylist/navigation/type/struct/breadcrumb-separator-props';

export function createBreadcrumbSeparatorState(props: BreadcrumbSeparatorProps) {
	const separatorClasses = $derived(`c-breadcrumb-separator ${props.class ?? ''}`.trim());

	return {
		get separatorClasses() {
			return separatorClasses;
		}
	};
}

export default createBreadcrumbSeparatorState;
