import type { SpacerProps } from '$stylist/layout/type/struct/spacer';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';

function resolveSize(size?: string | number): string {
	if (typeof size === 'number') return `${size}px`;
	switch (size) {
		case 'xs':
			return '0.25rem';
		case 'sm':
			return '0.5rem';
		case 'md':
			return '1rem';
		case 'lg':
			return '1.5rem';
		case 'xl':
			return '2rem';
		case '2xl':
			return '3rem';
		default:
			return size ?? '1rem';
	}
}

export function createSpacerState(props: SpacerProps) {
	const axis = $derived<TokenOrientation | 'both'>(props.axis ?? 'vertical');
	const sizeValue = $derived(resolveSize(props.size));

	const restProps = $derived.by(() => {
		const { class: _class, axis: _axis, size: _size, ...rest } = props;
		return rest;
	});

	return {
		get axis() {
			return axis;
		},
		get sizeValue() {
			return sizeValue;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSpacerState;
