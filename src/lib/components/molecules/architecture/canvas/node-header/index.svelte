<script lang="ts">
	import type { NodeHeaderProps } from '$stylist/design-system/contracts';
	import { createNodeHeaderState } from '$stylist/design-system/models/information/node-header.svelte';
	import { Icon as BaseIcon } from '$stylist/components/atoms';

	const X = 'x';
	const Settings = 'settings';
	const Copy = 'copy';
	const Trash2 = 'trash-2';

	let props: NodeHeaderProps = $props();

	const nodeState = createNodeHeaderState(props);
	const title = $derived(props.title ?? '');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			title: _title,
			color: _color,
			size: _size,
			selected: _selected,
			editable: _editable,
			showClose: _showClose,
			showSettings: _showSettings,
			showDuplicate: _showDuplicate,
			showDelete: _showDelete,
			actions: _actions,
			onTitleChange: _onTitleChange,
			onclose: _onclose,
			onsettings: _onsettings,
			onduplicate: _onduplicate,
			ondelete: _ondelete,
			children: _children,
			...rest
		} = props;

		return rest;
	});

	let isEditing = $state(false);
	// svelte-ignore state_referenced_locally
	let editValue = $state<string>(title);

	// svelte-ignore state_referenced_locally
	function handleDoubleClick() {
		if (!props.editable) return;
		isEditing = true;
		editValue = $state.snapshot(title);
	}

	function commitTitleChange() {
		isEditing = false;
		if (props.onTitleChange && editValue !== title) {
			props.onTitleChange(editValue);
		}
	}

	function handleBlur() {
		commitTitleChange();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			commitTitleChange();
		}

		if (event.key === 'Escape') {
			isEditing = false;
			editValue = title;
		}
	}
</script>

<div
	class={`${nodeState.classes} ${props.class ?? ''}`}
	style={nodeState.styles}
	data-header-id={props.id}
	data-header-selected={nodeState.selected}
	{...restProps}
>
	{#if isEditing}
		<!-- svelte-ignore a11y_autofocus -->
		<input
			type="text"
			class="node-header__title-input"
			bind:value={editValue}
			onblur={handleBlur}
			onkeydown={handleKeydown}
			autofocus
		/>
	{:else}
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<span
			class="node-header__title"
			ondblclick={handleDoubleClick}
			role={props.editable ? 'button' : undefined}
			tabindex={props.editable ? 0 : undefined}
		>
			{title}
		</span>
	{/if}

	{#if nodeState.showActions || props.actions}
		<div class="node-header__actions">
			{#if props.actions}
				{@render props.actions?.()}
			{/if}

			{#if props.showDuplicate}
				<button
					type="button"
					class="node-header__action-btn"
					onclick={props.onduplicate}
					title="Duplicate"
					aria-label="Duplicate node"
				>
					<BaseIcon name={Copy} size={14} />
				</button>
			{/if}

			{#if props.showSettings}
				<button
					type="button"
					class="node-header__action-btn"
					onclick={props.onsettings}
					title="Settings"
					aria-label="Node settings"
				>
					<BaseIcon name={Settings} size={14} />
				</button>
			{/if}

			{#if props.showClose}
				<button
					type="button"
					class="node-header__action-btn node-header__action-btn--danger"
					onclick={props.onclose}
					title="Close"
					aria-label="Close node"
				>
					<BaseIcon name={X} size={14} />
				</button>
			{:else if props.showDelete}
				<button
					type="button"
					class="node-header__action-btn node-header__action-btn--danger"
					onclick={props.ondelete}
					title="Delete"
					aria-label="Delete node"
				>
					<BaseIcon name={Trash2} size={14} />
				</button>
			{/if}
		</div>
	{/if}

	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>

<style>
	:global(.node-header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-3);
		background: var(--node-header-color, var(--color-primary-600));
		color: var(--color-text-inverse);
		border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
		cursor: grab;
		user-select: none;
	}

	:global(.node-header:active) {
		cursor: grabbing;
	}

	:global(.node-header__title) {
		flex: 1 1 auto;
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		line-height: 1.2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.node-header__title-input) {
		flex: 1 1 auto;
		padding: var(--spacing-1) var(--spacing-2);
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border: 2px solid var(--color-primary-400);
		border-radius: var(--border-radius-base);
		outline: none;
	}

	:global(.node-header__title[role='button']) {
		cursor: pointer;
	}

	:global(.node-header__title[role='button']:hover) {
		background: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
		border-radius: var(--border-radius-base);
	}

	:global(.node-header__title[role='button']:focus-visible) {
		outline: 2px solid var(--color-text-inverse);
		outline-offset: 2px;
	}

	:global(.node-header__actions) {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
		flex-shrink: 0;
	}

	:global(.node-header__action-btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-1);
		background: transparent;
		border: none;
		border-radius: var(--border-radius-base);
		color: inherit;
		opacity: var(--opacity-70);
		cursor: pointer;
		transition: opacity var(--duration-120) var(--animation-ease), background-color var(--duration-120) var(--animation-ease);
	}

	:global(.node-header__action-btn:hover) {
		opacity: var(--opacity-100);
		background: color-mix(in srgb, var(--color-background-primary) 15%, transparent);
	}

	:global(.node-header__action-btn:active) {
		background: color-mix(in srgb, var(--color-background-primary) 20%, transparent);
	}

	:global(.node-header__action-btn--danger:hover) {
		background: color-mix(in srgb, var(--color-danger-500) 30%, transparent);
	}

	:global(.node-header--selected) {
		box-shadow: var(--shadow-custom13);
	}

	:global(.node-header--size-xs) {
		padding: var(--spacing-1) var(--spacing-2);
	}

	:global(.node-header--size-xs .node-header__title) {
		font-size: var(--font-size-3);
	}

	:global(.node-header--size-sm) {
		padding: var(--spacing-2) var(--spacing-2);
	}

	:global(.node-header--size-sm .node-header__title) {
		font-size: var(--font-size-3);
	}

	:global(.node-header--size-md) {
		padding: var(--spacing-2) var(--spacing-3);
	}

	:global(.node-header--size-md .node-header__title) {
		font-size: var(--font-size-3);
	}

	:global(.node-header--size-lg) {
		padding: var(--spacing-2) var(--spacing-3);
	}

	:global(.node-header--size-lg .node-header__title) {
		font-size: var(--font-size-3);
	}
</style>

