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
	let editValue = $state<string>(title);

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
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--node-header-color, #2563eb);
		color: #f8fafc;
		border-radius: 6px 6px 0 0;
		cursor: grab;
		user-select: none;
	}

	:global(.node-header:active) {
		cursor: grabbing;
	}

	:global(.node-header__title) {
		flex: 1 1 auto;
		font-size: 0.8125rem;
		font-weight: 600;
		line-height: 1.2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.node-header__title-input) {
		flex: 1 1 auto;
		padding: 0.25rem 0.5rem;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: #0f172a;
		background: #f8fafc;
		border: 2px solid #60a5fa;
		border-radius: 4px;
		outline: none;
	}

	:global(.node-header__title[role='button']) {
		cursor: pointer;
	}

	:global(.node-header__title[role='button']:hover) {
		background: rgb(255 255 255 / 0.1);
		border-radius: 4px;
	}

	:global(.node-header__title[role='button']:focus-visible) {
		outline: 2px solid #f8fafc;
		outline-offset: 2px;
	}

	:global(.node-header__actions) {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex-shrink: 0;
	}

	:global(.node-header__action-btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		background: transparent;
		border: none;
		border-radius: 4px;
		color: inherit;
		opacity: 0.7;
		cursor: pointer;
		transition: opacity 120ms ease, background-color 120ms ease;
	}

	:global(.node-header__action-btn:hover) {
		opacity: 1;
		background: rgb(255 255 255 / 0.15);
	}

	:global(.node-header__action-btn:active) {
		background: rgb(255 255 255 / 0.2);
	}

	:global(.node-header__action-btn--danger:hover) {
		background: rgb(239 68 68 / 0.3);
	}

	:global(.node-header--selected) {
		box-shadow: 0 0 0 2px #60a5fa;
	}

	:global(.node-header--size-xs) {
		padding: 0.375rem 0.5rem;
	}

	:global(.node-header--size-xs .node-header__title) {
		font-size: 0.6875rem;
	}

	:global(.node-header--size-sm) {
		padding: 0.4375rem 0.625rem;
	}

	:global(.node-header--size-sm .node-header__title) {
		font-size: 0.75rem;
	}

	:global(.node-header--size-md) {
		padding: 0.5rem 0.75rem;
	}

	:global(.node-header--size-md .node-header__title) {
		font-size: 0.8125rem;
	}

	:global(.node-header--size-lg) {
		padding: 0.625rem 0.875rem;
	}

	:global(.node-header--size-lg .node-header__title) {
		font-size: 0.875rem;
	}
</style>
