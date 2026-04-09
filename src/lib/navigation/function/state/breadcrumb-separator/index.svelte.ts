import type { BreadcrumbSeparatorProps } from '$stylist/navigation/type/struct/breadcrumb-separator-props';

export function createBreadcrumbSeparatorState(props: BreadcrumbSeparatorProps) {
	const separatorClasses = $derived(`mx-2 text-[var(--color-text-tertiary)] ${props.class ?? ''}`);

	return {
		get separatorClasses() {
			return separatorClasses;
		}
	};
}

export default createBreadcrumbSeparatorState;
