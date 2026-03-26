<script lang="ts">
	import type { SyntaxHighlightedCodeProps } from '$stylist';
	import { createSyntaxHighlightedCodeState } from '$stylist/information/state/syntax-highlighted-code';
	import Code from '$stylist/information/molecule/development/code-block/index.svelte';

	let props: SyntaxHighlightedCodeProps = $props();

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



