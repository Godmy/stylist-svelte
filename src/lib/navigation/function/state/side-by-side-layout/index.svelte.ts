import type { SideBySideLayoutProps } from '$stylist/navigation/type/struct/side-by-side-layout-props';
import { getSideBySideLayoutClasses, getSideBySideSectionWidthClass } from '$stylist/navigation/const/record/side-by-side-layout-classes';

export function createSideBySideLayoutState(props: SideBySideLayoutProps) {
	const layoutClass = $derived(getSideBySideLayoutClasses(props));
	const restProps = $derived.by(() => {
		const { sections, class: _class, gap: _gap, alignItems: _alignItems, justifyContent: _justifyContent, responsive: _responsive, ...rest } = props;
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
			return getSideBySideSectionWidthClass(size, props.responsive