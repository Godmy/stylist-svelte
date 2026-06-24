<script lang="ts">
	import { PresetCodeBlock } from '$stylist/development/const/preset/code-block';
	import type { RecipeCodeBlock } from '$stylist/development/interface/recipe/code-block';
	import { createCodeBlockState } from '$stylist/development/function/state/code-block/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';

	let {
		code = '',
		language = 'text',
		showLineNumbers = false,
		highlightLines = [],
		title,
		copyable = false,
		class: hostClass = '',
		contentClass = '',
		lineNumberClass = '',
		codeClass = '',
		headerClass = '',
		...restProps
	}: RecipeCodeBlock = $props();

	const state = createCodeBlockState({
		code,
		language,
		showLineNumbers,
		highlightLines,
		title,
		copyable,
		class: hostClass,
		contentClass,
		lineNumberClass,
		codeClass,
		headerClass
	});
</script>

<div class={state.containerClass} {...restProps}>
	{#if title}
		<div class={state.headerClassComputed}>
			{title}
		</div>
	{/if}

	<div class={state.getMainContentClass}>
		{#if showLineNumbers}
			<div class={state.lineNumbersContainerClass}>
				{#each state.codeLines as _, index}
					<div class={state.lineNumberItemClass(highlightLines.includes(index + 1))}>
						{index + 1}
					</div>
				{/each}
			</div>
		{/if}

		<div class={state.contentContainerClass}>
			<pre class={state.preClass}><code class={state.languageClass}>{code}</code></pre>
		</div>
	</div>

	{#if copyable}
		<div class={state.copyButtonContainerClass}>
			<Button variant="ghost" size="sm" onclick={state.handleCopy} aria-label="Copy code">
				{#if state.copied}
					<BaseIcon name={PresetCodeBlock.Check} class={state.iconClass} />
				{:else}
					<BaseIcon name={PresetCodeBlock.Copy} class={state.iconClass} />
				{/if}
			</Button>
		</div>
	{/if}
</div>

<style>
	.c-code-block {
		position: relative;
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.75rem;
		background: var(--color-background-primary);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.c-code-block__header {
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-code-block__main {
		display: flex;
	}

	.c-code-block__line-numbers {
		user-select: none;
		border-right: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		padding: 1rem 1rem 1rem 0.5rem;
		text-align: right;
		font-family: var(--font-family-mono, monospace);
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
	}

	.c-code-block__line-number--highlighted {
		background: var(--color-warning-100);
		color: var(--color-text-primary);
	}

	.c-code-block__content {
		flex: 1;
		overflow: auto;
	}

	.c-code-block__pre {
		overflow: auto;
		margin: 0;
		padding: 1rem;
		font-size: 0.875rem;
	}

	.c-code-block__copy {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
	}

	.c-code-block__icon {
		width: 1rem;
		height: 1rem;
	}
</style>
