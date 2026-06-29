import type { RecipeMarkdownRenderer } from '$stylist/information/interface/recipe/markdown-renderer';
export function createMarkdownRendererState(props: RecipeMarkdownRenderer) {
	const content = $derived(props.content);
	const hostClass = $derived(props.class ?? '');

	let html = $state('');

	return {
		get content() {
			return content;
		},
		get hostClass() {
			return hostClass;
		},
		get html() {
			return html;
		},
		set html(value: string) {
			html = value;
		}
	};
}
