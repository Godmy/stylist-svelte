import type { BreadcrumbSeparatorProps } from '$stylist/navigation/type/struct/breadcrumb-separator-props';

export function createBreadcrumbSeparatorState(props: BreadcrumbSeparatorProps) {
	const separatorClasses = $derived(
		`inline-flex items-center text-[var(--color-text-tertiary)] ${props.class ?? ''}`
	);

	return {
		get separatorClasses() {
			return separatorClasses;
		}
	};
}

export default createBreadcrumbSeparatorState;
