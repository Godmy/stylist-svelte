import type { BaseCardProps } from '$stylist/commerce/type/struct/base-card-props';

export function createBaseCardState(props: BaseCardProps) {
	const containerClasses = $derived(
		`base-card rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] ${props.class ?? ''}`.trim()
	);
	const headerClasses = $derived(
		`base-card__header p-4 border-b border-[var(--color-border-primary)] ${props.headerClass ?? ''}`.trim()
	);
	const bodyClasses = $derived(`base-card__body p-4 ${props.bodyClass ?? ''}`.trim());
	const hasHeader = $derived(Boolean(props.title || props.description));

	return {
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get hasHeader() {
			return hasHeader;
		}
	};
}

export default createBaseCardState;
