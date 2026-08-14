import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeMarkdownRenderer } from '$stylist/domain/interface/recipe/markdown-renderer';
export function createMarkdownRendererState(props: RecipeMarkdownRenderer & HTMLAttributes<HTMLDivElement>) {
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
