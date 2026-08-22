import type { RecipeGrid } from '$stylist/layout/interface/recipe/grid';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export class GridManager {
	static filterRestProps(props: RecipeGrid): Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'> {
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
	}
}
