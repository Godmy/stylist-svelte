<script lang="ts">
	import type { RecipeLitegraphNode } from '$stylist/workspace/interface/recipe/litegraph-node';
	import NodeHeader from '$stylist/workspace/component/molecule/node-header/index.svelte';
	import NodeProperty from '$stylist/workspace/component/atom/node-property/index.svelte';
	import PortGroup from '$stylist/workspace/component/molecule/port-group/index.svelte';
	import type { LiteGraphPort } from '$stylist/workspace/type/struct/lite-graph-port';
	import createLiteGraphNodeState from '$stylist/workspace/function/state/litegraph-node/index.svelte';

	let props: RecipeLitegraphNode = $props();
	const state = createLiteGraphNodeState(props);
	const indexedInputs = $derived(
		state.inputs.map((port: LiteGraphPort, idx: number) => ({ ...port, index: idx }))
	);
	const indexedOutputs = $derived(
		state.outputs.map((port: LiteGraphPort, idx: number) => ({ ...port, index: idx }))
	);
</script>

<svelte:window onmousemove={state.handleMouseMove} onmouseup={state.handleMouseUp} />

<div
	class={`${state.classes} ${props.class ?? ''}`}
	style={state.styles}
	data-node-id={state.id}
	data-node-type={state.type}
	data-node-mode={state.mode}
	data-node-status={state.status}
	data-selected={state.selected}
	onmousedown={state.handleMouseDown}
	{...state.restProps}
>
	{#if state.useSemanticShell}
		<div class={state.semanticShellClasses} data-stage={state.presentation.stage}>
			{#if state.presentation.showIcon}
				<div class={state.semanticIconClasses}>{props.title?.slice(0, 1) ?? ''}</div>
			{/if}
			{#if state.presentation.showLabel}
				<div class="litegraph-node__semantic-copy">
					<div class={state.semanticTitleClasses}>{props.title}</div>
					{#if state.presentation.showDescription}
						<div class={state.semanticDescriptionClasses}>
							{props.type ?? 'default'} � {state.presentation.stage} � {state.presentation.size}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{:else}
		{#if state.renderHeader}
			<NodeHeader
				id={`${state.id}-header`}
				title={state.title}
				color={state.headerColor}
				size={state.size}
				selected={state.selected}
				editable={true}
				showClose={state.deletable}
				showDuplicate={state.duplicable}
				showSettings={state.showActions}
				onclose={() => props.ondelete?.(props.id)}
				onduplicate={() => props.onduplicate?.(props.id)}
			>
				{#if props.headerContent}
					{@render props.headerContent()}
				{/if}
			</NodeHeader>
		{/if}

		<div class={state.bodyClasses}>
			{#if state.renderPorts && (state.hasInputs || state.hasOutputs)}
				<div class={state.portsClasses}>
					{#if state.hasInputs}
						<PortGroup
							id={`${state.id}-inputs`}
							direction="input"
							ports={indexedInputs}
							portSize="md"
							showLabels={true}
							onConnectionStart={(port, event) =>
								state.handlePortConnectionStart(port as unknown as LiteGraphPort, event)}
							onConnectionEnd={(port, event) =>
								state.handlePortConnectionEnd(port as unknown as LiteGraphPort, event)}
						/>
					{/if}

					{#if state.hasOutputs}
						<PortGroup
							id={`${state.id}-outputs`}
							direction="output"
							ports={indexedOutputs}
							portSize="md"
							showLabels={true}
							onConnectionStart={(port, event) =>
								state.handlePortConnectionStart(port as unknown as LiteGraphPort, event)}
							onConnectionEnd={(port, event) =>
								state.handlePortConnectionEnd(port as unknown as LiteGraphPort, event)}
						/>
					{/if}
				</div>
			{/if}

			{#if state.renderProperties && state.hasProperties}
				<div class={state.propertiesClasses}>
					{#each state.properties as property (property.id)}
						<NodeProperty
							id={property.id}
							name={property.name}
							type={property.type as any}
							value={property.value}
							label={property.label}
							description={property.description}
							options={property.options as any}
							size="sm"
							onchange={state.handlePropertyChange}
						/>
					{/each}
				</div>
			{/if}

			{#if props.bodyContent}
				<div class={state.contentClasses}>{@render props.bodyContent()}</div>
			{/if}

			{#if props.children}{@render props.children()}{/if}
		</div>
	{/if}
</div>

<style>
	.litegraph-node {
		position: absolute;
		display: flex;
		flex-direction: column;
		min-width: var(--node-min-width, 150px);
		width: var(--node-width, 200px);
		height: var(--node-height, auto);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--node-radius, 0.5rem);
		box-shadow: var(--layout-box-shadow-custom39, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1));
		transition:
			box-shadow 120ms ease,
			border-color 120ms ease;
		z-index: 10;
		overflow: hidden;
	}
	.litegraph-node:hover {
		box-shadow: var(--layout-box-shadow-custom41, 0 4px 6px -1px rgb(0 0 0 / 0.1));
	}
	.litegraph-node--selected {
		border-color: var(--color-primary-500);
		box-shadow: var(--layout-box-shadow-custom14, 0 0 0 3px rgb(59 130 246 / 0.3));
	}
	.litegraph-node__body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem;
		border-radius: 0 0 0.5rem 0.5rem;
	}
	.litegraph-node__ports {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.litegraph-node__ports > :first-child { flex: 1 1 0; }
	.litegraph-node__ports > :last-child { flex: 1 1 0; }
	.litegraph-node__properties {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.litegraph-node__content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.litegraph-node__semantic-shell {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: 100%;
		height: 100%;
		padding: 0.75rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.86)),
			color-mix(in srgb, var(--node-color, #3b82f6) 10%, white);
	}
	.litegraph-node__semantic-icon {
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--node-color, #3b82f6) 82%, white);
		color: white;
		font-weight: 700;
		font-size: 0.92rem;
		flex: 0 0 auto;
	}
	.litegraph-node__semantic-copy { min-width: 0; }
	.litegraph-node__semantic-title {
		font-size: 0.92rem;
		font-weight: 700;
		line-height: 1.15;
		color: var(--color-text-primary);
	}
	.litegraph-node__semantic-description {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1.35;
		color: var(--color-text-secondary);
	}
</style>
