<script lang="ts">
	import type { CodeSectionProps } from '$stylist/development/type/struct/code-section-props';
	import type { CodeEditorProps } from '$stylist/development/type/struct/code-editor-props';
	import createCodeSectionState from '$stylist/development/function/state/code-section/index.svelte';
	import CodeEditor from '$stylist/development/component/molecule/code-editor-legacy/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';

	let props: CodeSectionProps = $props();
	const state = createCodeSectionState(props);
	const editorProps = $derived({
		code: props.code,
		language: props.language,
		showLineNumbers: props.showLineNumbers,
		showCopyButton: props.showCopyButton,
		class: typeof props.class === 'string' ? props.class : undefined
	} as CodeEditorProps);
</script>

<div {...props} class={state.containerClass}>
	{#if props.title || (props.tags && props.tags.length > 0)}
		<div class={state.headerContainerClass}>
			<div class={state.headerContentClass}>
				{#if props.title}
					<h3 class={state.titleClass}>{props.title}</h3>
				{/if}
				{#if props.tags && props.tags.length > 0}
					<div class={state.tagsContainerClass}>
						{#each props.tags as tag}
							<Badge variant="default" class={state.tagClass}>{tag}</Badge>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<CodeEditor {...editorProps} />
</div>

<style>
	.c-code-section {
		border-radius: 0.75rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		overflow: hidden;
	}
	.c-code-section__header {
		border-bottom: 1px solid var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 0.75rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.c-code-section__header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.c-code-section__title {
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.c-code-section__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	:global(.c-code-section__tag) {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>
