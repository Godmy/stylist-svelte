<script lang="ts">
	import type { SyntaxHighlightedCodeProps } from '$stylist/design-system';
	import { createSyntaxHighlightedCodeState } from '$stylist/design-system/models/information/syntax-highlighted-code.svelte';
	import Code from '$stylist/components/molecules/information/development/code-block/index.svelte';

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



