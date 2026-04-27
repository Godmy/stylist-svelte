<script lang="ts">
	import type { NodeHeaderProps } from '$stylist/science/type/struct/node-header-props';
	import { createNodeHeaderState } from '$stylist/science/function/state/node-header';
	import { Icon as BaseIcon } from '$stylist';

	let props: NodeHeaderProps = $props();
	const state = createNodeHeaderState(props);
</script>

<div class={`${state.classes} ${props.class ?? ''}`} style={state.styles} data-header-id={props.id} data-header-selected={state.selected} {...state.restProps}>
	{#if state.isEditing}
		<input type="text" class="node-header__title-input" bind:value={state.editValue} onblur={state.handleBlur} onkeydown={state.handleKeydown} />
	{:else}
		<button type="button" class="node-header__title-button" ondblclick={state.handleDoubleClick} onclick={state.handleDoubleClick} disabled={!props.editable} aria-label={props.editable ? `Edit ${state.title}` : state.title}>
			<span class="node-header__title">{state.title}</span>
		</button>
	{/if}

	{#if state.showActions || props.actions}
		<div class="node-header__actions">
			{#if props.actions}
				{@render props.actions()}}
			{/if}
			{#if props.showDuplicate}
				<button type="button" class="node-header__action-btn" onclick={() => props.onduplicate?.()} title="Duplicate" aria-label="Duplicate node"><BaseIcon name="copy" size={14} /></button>
			{/if}
			{#if props.showSettings}
				<button type="button" class="node-header__action-btn" onclick={() => props.onsettings?.()} title="Settings" aria-label="Node settings"><BaseIcon name="settings" size={14} /></button>
			{/if}
			{#if props.showClose}
				<button type="button" class="node-header__action-btn node-header__action-btn--danger" onclick={() => props.onclose?.()} title="Close" aria-label="Close node"><BaseIcon name="x" size={14} /></button>
			{:else if props.showDelete}
				<button type="button" class="node-header__action-btn node-header__action-btn--danger" onclick={() => props.ondelete?.()} title="Delete" aria-label="Delete node"><BaseIcon name="trash-2" size={14} /></button>
			{/if}
		</div>
	{/if}

	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	:global(.node-header) { display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-2); padding: var(--spacing-2) var(--spacing-3); background: var(--node-header-color, var(--color-primary-600)); color: var(--color-text-inverse); border-radius: var(--border-radius-md) var(--border-radius-md) 0 0; cursor: grab; user-select: none; }
	:global(.node-header:active) { cursor: grabbing; }
	:global(.node-header__title-button) { flex: 1 1 auto; display: flex; align-items: center; padding: 0; background: transparent; border: none; color: inherit; text-align: left; }
	:global(.node-header__title-button:not(:disabled)) { cursor: pointer; }
	:global(.node-header__title-button:not(:disabled):hover) { background: color-mix(in srgb, var(--color-background-primary) 10%, transparent); border-radius: var(--border-radius-base); }
	:global(.node-header__title-button:focus-visible) { outline: 2px solid var(--color-text-inverse); outline-offset: 2px; }
	:global(.node-header__title) { flex: 1 1 auto; font-size: var(--font-size-3); font-weight: var(--font-weight-semibold); line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	:global(.node-header__title-input) { flex: 1 1 auto; padding: var(--spacing-1) var(--spacing-2); font-size: inherit; font-weight: inherit; font-family: inherit; color: var(--color-text-primary); background: var(--color-background-primary); border: 2px solid var(--color-primary-400); border-radius: var(--border-radius-base); outline: none; }
	:global(.node-header__actions) { display: flex; align-items: center; gap: var(--spacing-1); flex-shrink: 0; }
	:global(.node-header__action-btn) { display: inline-flex; align-items: center; justify-content: center; padding: var(--spacing-1); background: transparent; border: none; border-radius: var(--border-radius-base); color: inherit; opacity: var(--opacity-70); cursor: pointer; transition: opacity var(--duration-120) var(--animation-ease), background-color var(--duration-120) var(--animation-ease); }
	:global(.node-header__action-btn:hover) { opacity: var(--opacity-100); background: color-mix(in srgb, var(--color-background-primary) 15%, transparent); }
	:global(.node-header__action-btn:active) { background: color-mix(in srgb, var(--color-background-primary) 20%, transparent); }
	:global(.node-header__action-btn--danger:hover) { background: color-mix(in srgb, var(--color-danger-500) 30%, transparent); }
	:global(.node-header--selected) { box-shadow: var(--shadow-custom13); }
	:global(.node-header--size-xs) { padding: var(--spacing-1) var(--spacing-2); }
	:global(.node-header--size-xs .node-header__title) { font-size: var(--font-size-3); }
	:global(.node-header--size-sm) { padding: var(--spacing-2) var(--spacing-2); }
	:global(.node-header--size-sm .node-header__title) { font-size: var(--font-size-3); }
	:global(.node-header--size-md) { padding: var(--spacing-2) var(--spacing-3); }
	:global(.node-header--size-md .node-header__title) { font-size: var(--font-size-3); }
	:global(.node-header--size-lg) { padding: var(--spacing-2) var(--spacing-3); }
	:global(.node-header--size-lg .node-header__title) { font-size: var(--font-size-3); }
</style>
