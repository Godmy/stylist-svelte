<script lang="ts">
	import type { SyntaxHighlightedCodeProps } from '$stylist/design-system';
	import { createSyntaxHighlightedCodeState } from '$stylist/design-system/models/information/syntax-highlighted-code.svelte';
	import Code from '../../elements/code-block/index.svelte';

	let props: SyntaxHighlightedCodeProps = $props();

	const state = createSyntaxHighlightedCodeState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				language: _language,
				code: _code,
				variant: _variant,
				size: _size,
				showLineNumbers: _showLineNumbers,
				startLineNumber: _startLineNumber,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<Code
	{...restProps}
	variant={state.variant}
	size={state.size}
	showLineNumbers={state.showLineNumbers}
	startLineNumber={state.startLineNumber}
	class={state.containerClasses}
>
	<code class={state.codeClasses}>
		{@html state.escapedCode}
	</code>
</Code>

