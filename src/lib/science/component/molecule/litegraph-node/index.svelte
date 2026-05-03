<script lang="ts">
	import { NodeProperty } from '$stylist/control';
	import { NodeHeader, PortGroup } from '$stylist/science';
	import type { LiteGraphPort } from '$stylist/science/type/struct/litegraph-port';
	import type { LitegraphNodeProps } from '$stylist/science/type/struct/litegraph-node-props';
	import { createLiteGraphNodeState } from '$stylist/science/function/state/litegraph-node';

	let props: LitegraphNodeProps = $props();
	const state = createLiteGraphNodeState(props);
	const indexedInputs = $derived(state.inputs.map((port: LiteGraphPort, idx: number) => ({ ...port, index: idx })));
	const indexedOutputs = $derived(state.outputs.map((port: LiteGraphPort, idx: number) => ({ ...port, index: idx })));
</script>

<svelte:window on:mousemove={state.handleMouseMove} on:mouseup={state.handleMouseUp} />

<div class={`${state.classes} ${props.class ?? ''}`} style={state.styles} data-node-id={state.id} data-node-type={state.type} data-node-mode={state.mode} data-node-status={state.status} data-selected={state.selected} onmousedown={state.handleMouseDown} {...state.restProps}>
	{#if state.useSemanticShell}
		<div class={state.semanticShellClasses} data-stage={state.presentation.stage}>
			{#if state.presentation.showIcon}
				<div class={state.semanticIconClasses}>{props.title?.slice(0, 1) ?? ''}</div>
			{/if}
			{#if state.presentation.showLabel}
				<div class="litegraph-node__semantic-copy">
					<div class={state.semanticTitleClasses}>{props.title}</div>
					{#if state.presentation.showDescription}
						<div class={state.semanticDescriptionClasses}>{props.type ?? 'default'} � {state.presentation.stage} � {state.presentation.size}</div>
					{/if}
				</div>
			{/if}
		</div>
	{:else}
		{#if state.renderHeader}
			<NodeHeader id={`${state.id}-header`} title={state.title} color={state.headerColor} size={state.size} selected={state.selected} editable={true} showClose={state.deletable} showDuplicate={state.duplicable} showSettings={state.showActions} onclose={() => props.ondelete?.(props.id)} onduplicate={() => props.onduplicate?.(props.id)}>
				{#if props.headerContent}
					{@render props.headerContent()}}
				{/if}
			</NodeHeader>
		{/if}

		<div class={state.bodyClasses}>
			{#if state.renderPorts && (state.hasInputs || state.hasOutputs)}
				<div class={state.portsClasses}>
					{#if state.hasInputs}
						<PortGroup id={`${state.id}-inputs`} direction="input" ports={indexedInputs} portSize="md" showLabels={true} onConnectionStart={(port, event) => state.handlePortConnectionStart(port as unknown as LiteGraphPort, event)} onConnectionEnd={(port, event) => state.handlePortConnectionEnd(port as unknown as LiteGraphPort, event)} />
					{/if}

					{#if state.hasOutputs}
						<PortGroup id={`${state.id}-outputs`} direction="output" ports={indexedOutputs} portSize="md" showLabels={true} onConnectionStart={(port, event) => state.handlePortConnectionStart(port as unknown as LiteGraphPort, event)} onConnectionEnd={(port, event) => state.handlePortConnectionEnd(port as unknown as LiteGraphPort, event)} />
					{/if}
				</div>
			{/if}

			{#if state.renderProperties && state.hasProperties}
				<div class={state.propertiesClasses}>
					{#each state.properties as property (property.id)}
						<NodeProperty id={property.id} name={property.name} type={property.type as any} value={property.value} label={property.label} description={property.description} options={property.options as any} size="sm" onchange={state.handlePropertyChange} />
					{/each}
				</div>
			{/if}

			{#if props.bodyContent}
				<div class={state.contentClasses}>{@render props.bodyContent()}}</div>
			{/if}

			{#if props.children}
				{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(.litegraph-node) { position: absolute; display: flex; flex-direction: column; min-width: var(--node-min-width, 150px); width: var(--node-width, 200px); height: var(--node-height, auto); background: var(--color-background-primary); border: 1px solid var(--color-border-primary); border-radius: var(--node-radius, var(--border-radius-lg)); box-shadow: var(--shadow-custom39); transition: box-shadow var(--duration-120) var(--animation-ease), border-color var(--duration-120) var(--animation-ease); z-index: var(--z-index-docked); overflow: hidden; }
	:global(.litegraph-node:hover) { box-shadow: var(--shadow-custom41); }
	:global(.litegraph-node--selected) { border-color: var(--color-primary-500); box-shadow: var(--shadow-custom14); }
	:global(.litegraph-node__body) { display: flex; flex-direction: column; gap: var(--spacing-2); padding: var(--spacing-3); border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg); }
	:global(.litegraph-node__ports) { display: flex; justify-content: space-between; gap: var(--spacing-2); }
	:global(.litegraph-node__ports > *:first-child) { flex: 1 1 0; }
	:global(.litegraph-node__ports > *:last-child) { flex: 1 1 0; }
	:global(.litegraph-node__properties) { display: flex; flex-direction: column; gap: var(--spacing-2); }
	:global(.litegraph-node__content) { display: flex; flex-direction: column; gap: var(--spacing-2); }
	:global(.litegraph-node__semantic-shell) { display: flex; align-items: center; justify-content: center; gap: var(--spacing-3); width: 100%; height: 100%; padding: var(--spacing-3); background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.86)), color-mix(in srgb, var(--node-color, #3b82f6) 10%, white); }
	:global(.litegraph-node__semantic-icon) { display: grid; place-items: center; width: 2.25rem; height: 2.25rem; border-radius: 999px; background: color-mix(in srgb, var(--node-color, #3b82f6) 82%, white); color: white; font-weight: 700; font-size: 0.92rem; flex: 0 0 auto; }
	:global(.litegraph-node__semantic-copy) { min-width: 0; }
	:global(.litegraph-node__semantic-title) { font-size: 0.92rem; font-weight: 700; line-height: 1.15; color: var(--color-text-primary); }
	:global(.litegraph-node__semantic-description) { margin-top: 0.25rem; font-size: 0.75rem; line-height: 1.35; color: var(--color-text-secondary); }
</style>
