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


