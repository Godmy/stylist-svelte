<script lang="ts">
	import type { NodePropertiesPanelRecipe as NodePropertiesPanelProps } from '$stylist/information/interface/recipe/node-properties-panel';
	import { createNodePropertiesPanelState } from '$stylist/information/function/state/node-properties-panel';
	import { IconButton, NodeProperty } from '$stylist';

	let props: NodePropertiesPanelProps = $props();

	const state = createNodePropertiesPanelState(props);
	const title = $derived(props.title ?? 'Properties');

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}

	function handleCloseClick(event: MouseEvent) {
		props.onclose?.(event as never);
	}
</script>

<aside
	class={`${state.classes} ${props.class ?? ''}`}
	data-node-id={props.nodeId}
	data-has-properties={state.hasProperties}
	{...state.restProps}
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
					onclick={handleCloseClick}
				/>
			{/if}
		</header>
	{/if}

	<div class="node-properties-panel__content">
		{#if state.hasProperties}
			{#if state.groupByType}
				{#each state.propertyGroups as [groupName, groupProperties]}
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
					{#each props.properties ?? [] as property (property.id)}
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
		gap: var(--spacing-3);
	}

	:global(.node-properties-panel__title) {
		margin: 0;
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
	}

	:global(.node-properties-panel__content) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	:global(.node-properties-panel__group) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	:global(.node-properties-panel__group-title) {
		margin: 0;
		font-size: var(--font-size-3);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-wide);
		opacity: var(--opacity-70);
	}

	:global(.node-properties-panel__list) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	:global(.node-properties-panel__empty) {
		margin: 0;
		opacity: var(--opacity-70);
	}
</style>


