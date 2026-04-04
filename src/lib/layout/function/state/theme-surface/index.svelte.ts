import { StyleManagerThemeSurface } from '$stylist/layout/class/style-manager/theme-surface';
import type { ThemeSurfaceRecipe } from '$stylist/layout/interface/recipe/theme-surface';

export function createThemeSurfaceState(props: ThemeSurfaceRecipe) {
	const rootClass = $derived(StyleManagerThemeSurface.root(props.class));
	const headerClass = $derived(StyleManagerThemeSurface.header(props.headerClass));
	const contentClass = $derived(StyleManagerThemeSurface.content(props.contentClass));
	const footerClass = $derived(StyleManagerThemeSurface.footer(props.footerClass));
	const restProps = $derived.by(() => {
		const {
			content: _content,
			header: _header,
			footer: _footer,
			class: _class,
			headerClass: _headerClass,
			contentClass: _contentClass,
			footerClass: _footerClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get rootClass() {
			return rootClass;
		},
		get headerClass() {
			return headerClass;
		},
		get contentClass() {
			return contentClass;
		},
		get footerClass() {
			return footerClass;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createThemeSurfaceState;
