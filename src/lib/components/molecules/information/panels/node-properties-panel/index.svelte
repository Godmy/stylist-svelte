<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { LiteGraphNodeProperty, NodePropertiesPanelProps } from '$stylist/design-system/contracts';
	import { createNodePropertiesPanelState } from '$stylist/design-system/models/information/node-properties-panel.svelte';
	import { IconButton, NodeProperty } from '$stylist/components/atoms';

	let props: NodePropertiesPanelProps = $props();

	const state = createNodePropertiesPanelState(props);
	const properties = $derived(props.properties ?? []);
	const title = $derived(props.title ?? 'Properties');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			nodeId: _nodeId,
			title: _title,
			properties: _properties,
			size: _size,
			compact: _compact,
			showHeader: _showHeader,
			showClose: _showClose,
			editable: _editable,
			groupByType: _groupByType,
			onPropertyChange: _onPropertyChange,
			onclose: _onclose,
			children: _children,
			// Исключаем события clipboard чтобы избежать проблем с типами
			oncopy: _oncopy,
			oncut: _oncut,
			onpaste: _onpaste,
			...rest
		} = props;

		// Приводим restProps к правильному типу для aside
		return rest as Omit<HTMLAttributes<HTMLElement>, 
			'class' | 'id' | 'oncopy' | 'oncut' | 'onpaste'>;
	});

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}

	function getPropertyGroups(items: readonly LiteGraphNodeProperty[]) {
		return Object.entries(
			items.reduce<Record<string, LiteGraphNodeProperty[]>>((groups, property) => {
				const key = property.type ?? 'default';
				(groups[key] ??= []).push(property);
				return groups;
			}, {})
		);
	}
</script>

<aside
	class={`${state.classes} ${props.class ?? ''}`}
	data-node-id={props.nodeId}
	data-has-properties={state.hasProperties}
	{...restProps}
>
	{#if state.showHeader}
		<header class="node-properties-panel__header">
			<h3 class="node-properties-panel__title">{title}</h3>
			{#if state.showClose}
				<IconButton
					variant="ghost"
					size="sm"
					icon="x"
					aria-label="Close properties panel"
					onclick={props.onclose}
				/>
			{/if}
		</header>
	{/if}

	<div class="node-properties-panel__content">
		{#if state.hasProperties}
			{#if state.groupByType}
				{#each getPropertyGroups(properties) as [groupName, groupProperties]}
					<section class="node-properties-panel__group">
						<h4 class="node-properties-panel__group-title">{groupName}</h4>
						<div class="node-properties-panel__list">
							{#each groupProperties as property (property.id)}
								<NodeProperty
									id={property.id}
									name={property.name}
									type={property.type}
									value={property.value}
									label={property.label}
									description={property.description}
									options={property.options}
									size={props.size}
									editable={state.editable}
									onchange={handlePropertyChange}
								/>
							{/each}
						</div>
					</section>
				{/each}
			{:else}
				<div class="node-properties-panel__list">
					{#each properties as property (property.id)}
						<NodeProperty
							id={property.id}
							name={property.name}
							type={property.type}
							value={property.value}
							label={property.label}
							description={property.description}
							options={property.options}
							size={props.size}
							editable={state.editable}
							onchange={handlePropertyChange}
						/>
					{/each}
				</div>
			{/if}
		{:else}
			<p class="node-properties-panel__empty">No properties available.</p>
		{/if}

		{#if props.children}
			{@render props.children?.()}
		{/if}
	</div>
</aside>

<style>
	:global(.node-properties-panel__header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	:global(.node-properties-panel__title) {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
	}

	:global(.node-properties-panel__content) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	:global(.node-properties-panel__group) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(.node-properties-panel__group-title) {
		margin: 0;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		opacity: 0.7;
	}

	:global(.node-properties-panel__list) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(.node-properties-panel__empty) {
		margin: 0;
		opacity: 0.7;
	}
</style>
