<script lang="ts">
	import type { SyntaxHighlightedCodeProps } from '$stylist/design-system';
	import { createSyntaxHighlightedCodeState } from '$stylist/design-system/models/information/syntax-highlighted-code.svelte';
	import Code from '$stylist/components/molecules/information/development/code-block/index.svelte';

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
	code={state.code}
	language={state.language}
	showLineNumbers={state.showLineNumbers}
	class={state.containerClasses}
/>



