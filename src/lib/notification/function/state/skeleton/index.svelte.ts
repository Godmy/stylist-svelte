import type { ISkeletonProps } from '$stylist/notification/interface/component/notification/other';

export function createSkeletonState(
	props: {
		variant?: 'text' | 'card' | 'image' | 'icon';
		width?: string;
		height?: string;
		class?: string;
	} & ISkeletonProps
) {
	const variant = $derived(props.variant ?? 'text');
	const width = $derived(props.width ?? '100%');
	const defaultHeight = $derived(
		variant === 'text' ? '1rem' : variant === 'icon' ? '2.5rem' : '3rem'
	);
	const computedHeight = $derived(props.height || defaultHeight);
	const computedWidth = $derived(variant === 'icon' ? computedHeight : width);

	let restProps = $derived.by(() => {
		const {
			class: _class,
			variant: _variant,
			width: _width,
			height: _height,
			...rest
		} = props;
		return rest;
	});
	let rootClass = $derived(`skeleton-container variant-${variant} ${props.class ?? ''}`.trim());
	let style = $derived(`width: ${computedWidth}; height: ${computedHeight};`);

	return {
		get restProps() { return restProps; },
		get rootClass() { return rootClass; },
		get style() { return style; }
	};
}

export default createSkeletonState;
