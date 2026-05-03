	<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import type { ThemeNodeTitleRecipe } from '$stylist/typography/interface/recipe/node-title';
	import { createNodeTitleState } from '$stylist/typography/function/state/node-title';

	let props: ThemeNodeTitleRecipe = $props();

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
					{@render props.icon()}}
				{/if}
			</span>
		{/if}
		<span class="node-title__text">{state.title}</span>
		{#if props.trailingIcon}
			<span class="node-title__icon node-title__icon--trailing">
				{#if typeof props.trailingIcon === 'string'}
					<BaseIcon name={props.trailingIcon} size={14} />
				{:else}
					{@render props.trailingIcon()}}
				{/if}
			</span>
		{/if}
		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{/if}
	</h3>
{/if}

<style>
	:global(.node-title) {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		margin: 0;
		padding: var(--spacing-2) var(--spacing-3);
		font-weight: var(--font-weight-semibold);
		line-height: 1.2;
		color: var(--node-title-color, var(--color-text-primary));
		cursor: default;
		user-select: none;
		transition: color var(--duration-120) var(--animation-ease), background-color var(--duration-120) var(--animation-ease);
	}

	:global(.node-title__input) {
		width: 100%;
		padding: var(--spacing-1) var(--spacing-2);
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border: 2px solid var(--color-primary-500);
		border-radius: var(--border-radius-base);
		outline: none;
	}

	:global(.node-title__icon) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		opacity: var(--opacity-80);
	}

	:global(.node-title__icon--leading) {
		margin-right: var(--spacing-1);
	}

	:global(.node-title__icon--trailing) {
		margin-left: var(--spacing-1);
	}

	:global(.node-title__text) {
		flex: 1 1 auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Size variants */
	:global(.node-title--xs) {
		font-size: var(--font-size-3);
		padding: var(--spacing-1) var(--spacing-2);
	}

	:global(.node-title--sm) {
		font-size: var(--font-size-3);
		padding: var(--spacing-1) var(--spacing-2);
	}

	:global(.node-title--md) {
		font-size: var(--font-size-3);
		padding: var(--spacing-2) var(--spacing-3);
	}

	:global(.node-title--lg) {
		font-size: var(--font-size-3);
		padding: var(--spacing-2) var(--spacing-4);
	}

	:global(.node-title--xl) {
		font-size: var(--font-size-4);
		padding: var(--spacing-3) var(--spacing-5);
	}

	:global(.node-title--2xl) {
		font-size: var(--font-size-4);
		padding: var(--spacing-4) var(--spacing-6);
	}

	/* Style variants */
	:global(.node-title--default) {
		color: var(--node-title-color, var(--color-text-primary));
	}

	:global(.node-title--selected) {
		color: var(--node-title-color, var(--color-primary-400));
		font-weight: var(--font-weight-bold);
	}

	:global(.node-title--error) {
		color: var(--node-title-color, var(--color-error-500));
	}

	:global(.node-title--warning) {
		color: var(--node-title-color, var(--color-warning-500));
	}

	/* Interactive */
	:global(.node-title[editable="true"]) {
		cursor: pointer;
	}

	:global(.node-title[editable="true"]:hover) {
		background-color: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
		border-radius: var(--border-radius-base);
	}
</style>

