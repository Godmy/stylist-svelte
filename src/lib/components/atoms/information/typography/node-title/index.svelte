<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
	import type { NodeTitleProps } from '$stylist/design-system/contracts';
	import { createNodeTitleState } from '$stylist/design-system/models/architecture/node-title.svelte';
	import { NodeTitleStyleManager } from '$stylist/design-system/styles';

	let props: NodeTitleProps = $props();

	const titleState = createNodeTitleState(props);
	const title = $derived(props.title ?? '');
	const defaultColor = $derived(
		titleState.selected
			? NodeTitleStyleManager.getVariantColor('selected')
			: NodeTitleStyleManager.getVariantColor(props.variant ?? 'default')
	);
	const titleColor = $derived(props.color ?? defaultColor);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				title: _title,
				variant: _variant,
				size: _size,
				color: _color,
				icon: _icon,
				trailingIcon: _trailingIcon,
				selected: _selected,
				editable: _editable,
				onchange: _onchange,
				ondblclick: _ondblclick,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	let isEditing = $state(false);
	let editValue = $state('');

	$effect(() => {
		if (!isEditing) {
			editValue = title;
		}
	});

	function handleDoubleClick(event: MouseEvent) {
		if (props.editable) {
			isEditing = true;
			editValue = title;
		}
		if (props.ondblclick) {
			props.ondblclick(event);
		}
	}

	function handleBlur() {
		isEditing = false;
		if (props.onchange && editValue !== title) {
			props.onchange(editValue);
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			isEditing = false;
			if (props.onchange && editValue !== title) {
				props.onchange(editValue);
			}
		}
		if (event.key === 'Escape') {
			isEditing = false;
			editValue = title;
		}
	}
</script>

{#if isEditing}
	<input
		type="text"
		class="node-title__input"
		value={editValue}
		onblur={handleBlur}
		onkeydown={handleKeydown}
		style="width: 100%;"
	/>
{:else}
	<h3
		class={`${titleState.classes} ${props.class ?? ''}`}
		style={`${titleState.styles} --node-title-color: ${titleColor};`}
		data-title-variant={props.variant ?? 'default'}
		data-title-selected={titleState.selected}
		aria-label={title}
		{...restProps}
	>
		{#if props.icon}
			<span class="node-title__icon node-title__icon--leading">
				{#if typeof props.icon === 'string'}
					<BaseIcon name={props.icon} size={14} />
				{:else}
					{@render props.icon?.()}
				{/if}
			</span>
		{/if}
		<span class="node-title__text">{title}</span>
		{#if props.trailingIcon}
			<span class="node-title__icon node-title__icon--trailing">
				{#if typeof props.trailingIcon === 'string'}
					<BaseIcon name={props.trailingIcon} size={14} />
				{:else}
					{@render props.trailingIcon?.()}
				{/if}
			</span>
		{/if}
		{#if props.children}
			{@render props.children?.()}
		{/if}
	</h3>
{/if}

<style>
	:global(.node-title) {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		padding: 0.5rem 0.75rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--node-title-color, #f8fafc);
		cursor: default;
		user-select: none;
		transition: color 120ms ease, background-color 120ms ease;
	}

	:global(.node-title__input) {
		width: 100%;
		padding: 0.25rem 0.5rem;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: #0f172a;
		background: #f8fafc;
		border: 2px solid #3b82f6;
		border-radius: 4px;
		outline: none;
	}

	:global(.node-title__icon) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		opacity: 0.8;
	}

	:global(.node-title__icon--leading) {
		margin-right: 0.25rem;
	}

	:global(.node-title__icon--trailing) {
		margin-left: 0.25rem;
	}

	:global(.node-title__text) {
		flex: 1 1 auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Size variants */
	:global(.node-title--xs) {
		font-size: 0.6875rem;
		padding: 0.25rem 0.5rem;
	}

	:global(.node-title--sm) {
		font-size: 0.75rem;
		padding: 0.375rem 0.5rem;
	}

	:global(.node-title--md) {
		font-size: 0.8125rem;
		padding: 0.5rem 0.75rem;
	}

	:global(.node-title--lg) {
		font-size: 0.875rem;
		padding: 0.625rem 1rem;
	}

	:global(.node-title--xl) {
		font-size: 1rem;
		padding: 0.75rem 1.25rem;
	}

	:global(.node-title--2xl) {
		font-size: 1.125rem;
		padding: 1rem 1.5rem;
	}

	/* Style variants */
	:global(.node-title--default) {
		color: var(--node-title-color, #f8fafc);
	}

	:global(.node-title--selected) {
		color: var(--node-title-color, #60A5FA);
		font-weight: 700;
	}

	:global(.node-title--error) {
		color: var(--node-title-color, #F44336);
	}

	:global(.node-title--warning) {
		color: var(--node-title-color, #FF9800);
	}

	/* Interactive */
	:global(.node-title[editable="true"]) {
		cursor: pointer;
	}

	:global(.node-title[editable="true"]:hover) {
		background-color: rgb(255 255 255 / 0.1);
		border-radius: 4px;
	}
</style>
