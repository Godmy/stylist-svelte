import type { RecipeSideBySideLayout } from '$stylist/navigation/interface/recipe/side-by-side-layout';
import { SideBySideLayoutManager } from '$stylist/navigation/class/manager/side-by-side-layout';

export function createSideBySideLayoutState(props: RecipeSideBySideLayout) {
	const layoutClass = $derived(SideBySideLayoutManager.getLayoutClasses(props));
	const restProps = $derived.by(() => {
		const {
			sections,
			class: _class,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			responsive: _responsive,
			...rest
		} = props;
		return rest;
	});

	return {
		get layoutClass() {
			return layoutClass;
		},
		get restProps() {
			return restProps;
		},
		getSectionWidthClass(size: string) {
			return SideBySideLayoutManager.getSectionWidthClass(size, props.responsive ?? true);
		}
	};
}

export default createSideBySideLayoutState;
