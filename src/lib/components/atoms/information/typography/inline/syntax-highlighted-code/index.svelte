<script lang="ts">
	import type { SyntaxHighlightedCodeProps } from '$stylist/design-system';
	import { createSyntaxHighlightedCodeState } from '../../state.svelte';
	import CodeBlock from '../../elements/code-block/index.svelte';

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

<CodeBlock
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
</CodeBlock>
