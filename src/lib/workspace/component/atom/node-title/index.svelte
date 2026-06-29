<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeNodeTitle } from '$stylist/workspace/interface/recipe/node-title';
	import createNodeTitleState from '$stylist/workspace/function/state/node-title/index.svelte';

	let props: RecipeNodeTitle = $props();

	const state = createNodeTitleState(props);
</script>

{#if state.isEditing}
	<input
		type="text"
		class={state.inputClass}
		value={state.editValue}
		oninput={(event) => (state.editValue = (event.currentTarget as HTMLInputElement).value)}
		onblur={state.commitEdit}
		onkeydown={state.handleKeydown}
		style="width: 100%;"
	/>
{:else}
	<h3
		class={state.classes}
		style={state.styles}
		data-title-variant={props.variant ?? 'default'}
		data-title-selected={state.selected}
		aria-label={state.title}
		ondblclick={state.handleDoubleClick}
		{...state.restProps}
	>
		{#if props.icon}
			<span class="node-title__icon node-title__icon--leading">
				{#if typeof props.icon === 'string'}
					<BaseIcon name={props.icon} size={14} />
				{:else}
					{@render props.icon()}
				{/if}
			</span>
		{/if}
		<span class="node-title__text">{state.title}</span>
		{#if props.trailingIcon}
			<span class="node-title__icon node-title__icon--trailing">
				{#if typeof props.trailingIcon === 'string'}
					<BaseIcon name={props.trailingIcon} size={14} />
				{:else}
					{@render props.trailingIcon()}
				{/if}
			</span>
		{/if}
		{#if props.children}{@render props.children()}{/if}
	</h3>
{/if}

<style>
	.node-title {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		padding: 0.5rem 0.75rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--node-title-color, var(--color-text-primary));
		cursor: default;
		user-select: none;
		transition:
			color 120ms ease,
			background-color 120ms ease;
	}
	.node-title__input {
		width: 100%;
		padding: 0.25rem 0.5rem;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border: 2px solid var(--color-primary-500);
		border-radius: 0.25rem;
		outline: none;
	}
	.node-title__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		opacity: 0.8;
	}
	.node-title__icon--leading { margin-right: 0.25rem; }
	.node-title__icon--trailing { margin-left: 0.25rem; }
	.node-title__text {
		flex: 1 1 auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.node-title--xs,
	.node-title--sm { font-size: 0.75rem; padding: 0.25rem 0.5rem; }
	.node-title--md { font-size: 0.75rem; padding: 0.5rem 0.75rem; }
	.node-title--lg { font-size: 0.75rem; padding: 0.5rem 1rem; }
	.node-title--xl { font-size: 1rem; padding: 0.75rem 1.25rem; }
	.node-title--2xl { font-size: 1rem; padding: 1rem 1.5rem; }
	.node-title--default { color: var(--node-title-color, var(--color-text-primary)); }
	.node-title--selected { color: var(--node-title-color, var(--color-primary-400)); font-weight: 700; }
	.node-title--error { color: var(--node-title-color, var(--color-error-500)); }
	.node-title--warning { color: var(--node-title-color, var(--color-warning-500)); }
	.node-title[editable='true'] { cursor: pointer; }
	.node-title[editable='true']:hover {
		background-color: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
		border-radius: 0.25rem;
	}
</style>
