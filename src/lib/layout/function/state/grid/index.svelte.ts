import type { GridProps } from '$stylist/layout/interface/recipe/grid';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export function stateFn(props: GridProps) {
	const restProps = $derived.by(() => {
		const {
			class: _class,
			cols: _cols,
			gap: _gap,
			responsive: _responsive,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			children: _children,
			...rest
		} = props;
		return rest as Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'>;
	});

	return {
		get restProps() {
			return restProps;
		}
	};
}

export default stateFn;
