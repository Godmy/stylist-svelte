import type { Props } from '$stylist/commerce/type/struct/product-card-extended';
import { badgeStyles } from '$stylist/commerce/type/struct/product-card-extended';

export function createProductCardExtendedState(props: Props) {
	const containerClass = $derived(
		`bg-[var(--color-background-primary)] rounded-lg shadow-md overflow-hidden ${props.class ?? ''}`
	);
	const badgeClass = $derived(
		badgeStyles[(props.badge as keyof typeof badgeStyles)] ?? badgeStyles.default
	);

	return {
		get containerClass() { return containerClass; },
		get badgeClass() { return badgeClass; }
	};
}

export default createProductCardExtendedState;
