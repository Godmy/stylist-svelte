import type { ComponentStateProps } from '$stylist/design-system/attributes';

export const createInteractionState = (props: ComponentStateProps = {}) => ({
	...props
});
