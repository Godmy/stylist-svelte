<script lang="ts">
	import type { ThemeSyntaxHighlightedCodeRecipe } from '$stylist/typography/interface/recipe/syntax-highlighted-code';
	import { createSyntaxHighlightedCodeState } from '$stylist/typography/function/state/syntax-highlighted-code';
	import Code from '$stylist/development/svelte/molecule/code-block/index.svelte';

	let props: ThemeSyntaxHighlightedCodeRecipe = $props();

	const state = createSyntaxHighlightedCodeState(props);

</script>

<div {...props}>
	<Code
		code={state.code}
		language={state.language}
		showLineNumbers={state.showLineNumbers}
		class={state.containerClasses}
	/>
</div>



