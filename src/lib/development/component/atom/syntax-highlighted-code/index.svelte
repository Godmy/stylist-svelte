<script lang="ts">
	import type { ThemeSyntaxHighlightedCodeRecipe } from '$stylist/development/interface/recipe/syntax-highlighted-code';
	import { createSyntaxHighlightedCodeState } from '$stylist/development/function/state/syntax-highlighted-code';
	import Code from '$stylist/development/component/molecule/code-block/index.svelte';

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



