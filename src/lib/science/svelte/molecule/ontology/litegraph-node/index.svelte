<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LiteGraphPort, LitegraphNodeRecipe } from '$stylist/science/interface/recipe/litegraph-node';
	import { createLiteGraphNodeState } from '$stylist/science/function/state/litegraph-node';
	import { NodeProperty } from '$stylist';
	import { NodeHeader, PortGroup } from '$stylist';

	type LitegraphNodeProps = LitegraphNodeRecipe & {
		selectable?: boolean;
		resizable?: boolean;
		deletable?: boolean;
		duplicable?: boolean;
		showActions?: boolean;
		onNodeSelect?: (nodeId?: string) => void;
		onNodeDrag?: (nodeId: string | undefined, position: { x: number; y: number }) => void;
		onNodeResize?: (nodeId: string | undefined, size: { width?: number; height?: number | 'auto' }) => void;
		ondelete?: (nodeId?: string) => void;
		onduplicate?: (nodeId?: string) => void;
		onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
		onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
		onPropertyChange?: (propertyId: string, value: unknown) => void;
		headerContent?: Snippet;
		bodyContent?: Snippet;
	};

	let props: LitegraphNodeProps = $props();

	const nodeState = createLiteGraphNodeState(props);
	const inputs = $derived(props.inputs ?? []);
	const outputs = $derived(props.outputs ?? []);
	const properties = $derived(props.properties ?? []);
	const hasInputs = $derived(inputs.length > 0);
	const hasOutputs = $derived(outputs.length > 0);
	const hasProperties = $derived(properties.length > 0);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			title: _title,
			type: _type,
			mode: _mode,
			status: _status,
			x: _x,
			y: _y,
			width: _width,
			minWidth: _minWidth,
			height: _height,
			color: _color,
			headerColor: _headerColor,
			size: _size,
			inputs: _inputs,
			outputs: _outputs,
			properties: _properties,
			selected: _selected,
			draggable: _draggable,
			selectable: _selectable,
			resizable: _resizable,
			deletable: _deletable,
			duplicable: _duplicable,
			hideHeader: _hideHeader,
			hidePorts: _hidePorts,
			hideProperties: _hideProperties,
			showActions: _showActions,
			onNodeSelect: _onNodeSelect,
			onNodeDrag: _onNodeDrag,
			onNodeResize: _onNodeResize,
			ondelete: _ondelete,
			onduplicate: _onduplicate,
			onConnectionStart: _onConnectionStart,
			onConnectionEnd: _onConnectionEnd,
			onPropertyChange: _onPropertyChange,
			children: _children,
			headerContent: _headerContent,
			bodyContent: _bodyContent,
			...rest
		} = props;

		return rest;
	});

	let isDragging = $state(false);
	let dragStartX = $state(0);
	let dragStartY = $state(0);

	function handleSelect() {
		props.onNodeSelect?.(props.id);
	}

	function handleMouseDown(event: MouseEvent) {
		if (props.draggable === false) return;

		isDragging = true;
		dragStartX = event.clientX;
		dragStartY = event.clientY;
		handleSelect();
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging || props.x === undefined || props.y === undefined) return;

		props.onNodeDrag?.(props.id, {
			x: props.x + (event.clientX - dragStartX),
			y: props.y + (event.clientY - dragStartY)
		});
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handlePortConnectionStart(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionStart?.(port as LiteGraphPort, event);
	}

	function handlePortConnectionEnd(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionEnd?.(port as LiteGraphPort, event);
	}

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div
	class={`${nodeState.classes} ${props.class ?? ''}`}
	style={nodeState.styles}
	data-node-id={nodeState.id}
	data-node-type={nodeState.type}
	data-node-mode={nodeState.mode}
	data-node-status={nodeState.status}
	data-selected={nodeState.selected}
	onmousedown={handleMouseDown}
	{...restProps}
>
	{#if nodeState.useSemanticShell}
		<div class={nodeState.semanticShellClasses} data-stage={nodeState.presentation.stage}>
			{#if nodeState.presentation.showIcon}
				<div class={nodeState.semanticIconClasses}>
					{props.title?.slice(0, 1) ?? ''}
				</div>
			{/if}

			{#if nodeState.presentation.showLabel}
				<div class="litegraph-node__semantic-copy">
					<div class={nodeState.semanticTitleClasses}>{props.title}</div>
					{#if nodeState.presentation.showDescription}
						<div class={nodeState.semanticDescriptionClasses}>
							{props.type ?? 'default'} · {nodeState.presentation.stage} · {nodeState.presentation.size}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{:else}
		{#if nodeState.renderHeader}
			<NodeHeader
				id={`${nodeState.id}-header`}
				title={nodeState.title}
				color={nodeState.headerColor}
				size={nodeState.size}
				selected={nodeState.selected}
				editable={true}
				showClose={nodeState.deletable}
				showDuplicate={nodeState.duplicable}
				showSettings={nodeState.showActions}
				onclose={() => props.ondelete?.(props.id)}
				onduplicate={() => props.onduplicate?.(props.id)}
			>
				{#if props.headerContent}
					{@render props.headerContent?.()}
				{/if}
			</NodeHeader>
		{/if}

		<div class={nodeState.bodyClasses}>
			{#if nodeState.renderPorts && (hasInputs || hasOutputs)}
				<div class={nodeState.portsClasses}>
					{#if hasInputs}
						<PortGroup
							id={`${nodeState.id}-inputs`}
							direction="input"
							ports={inputs.map((port, idx) => ({ ...port, index: idx }))}
							portSize="md"
							showLabels={true}
							onConnectionStart={(port, event) => handlePortConnectionStart(port as unknown as LiteGraphPort, event)}
							onConnectionEnd={(port, event) => handlePortConnectionEnd(port as unknown as LiteGraphPort, event)}
						/>
					{/if}

					{#if hasOutputs}
						<PortGroup
							id={`${nodeState.id}-outputs`}
							direction="output"
							ports={outputs.map((port, idx) => ({ ...port, index: idx }))}
							portSize="md"
							showLabels={true}
							onConnectionStart={(port, event) => handlePortConnectionStart(port as unknown as LiteGraphPort, event)}
							onConnectionEnd={(port, event) => handlePortConnectionEnd(port as unknown as LiteGraphPort, event)}
						/>
					{/if}
				</div>
			{/if}

			{#if nodeState.renderProperties && hasProperties}
				<div class={nodeState.propertiesClasses}>
					{#each properties as property (property.id)}
						<NodeProperty
							id={property.id}
							name={property.name}
							type={property.type as any}
							value={property.value}
							label={property.label}
							description={property.description}
							options={property.options as any}
							size="sm"
							onchange={handlePropertyChange}
						/>
					{/each}
				</div>
			{/if}

			{#if props.bodyContent}
				<div class={nodeState.contentClasses}>
					{@render props.bodyContent?.()}
				</div>
			{/if}

			{#if props.children}
				{@render props.children?.()}
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(.litegraph-node) {
		position: absolute;
		display: flex;
		flex-direction: column;
		min-width: var(--node-min-width, 150px);
		width: var(--node-width, 200px);
		height: var(--node-height, auto);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--node-radius, var(--border-radius-lg));
		box-shadow: var(--shadow-custom39);
		transition: box-shadow var(--duration-120) var(--animation-ease), border-color var(--duration-120) var(--animation-ease);
		z-index: var(--z-index-docked);
		overflow: hidden;
	}

	:global(.litegraph-node:hover) {
		box-shadow: var(--shadow-custom41);
	}

	:global(.litegraph-node--selected) {
		border-color: var(--color-primary-500);
		box-shadow: var(--shadow-custom14);
	}

	:global(.litegraph-node__body) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
		padding: var(--spacing-3);
		border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
	}

	:global(.litegraph-node__ports) {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing-2);
	}

	:global(.litegraph-node__ports > *:first-child) {
		flex: 1 1 0;
	}

	:global(.litegraph-node__ports > *:last-child) {
		flex: 1 1 0;
	}

	:global(.litegraph-node__properties) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	:global(.litegraph-node__content) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	:global(.litegraph-node__semantic-shell) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-3);
		width: 100%;
		height: 100%;
		padding: var(--spacing-3);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.86)),
			color-mix(in srgb, var(--node-color, #3b82f6) 10%, white);
	}

	:global(.litegraph-node__semantic-icon) {
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

	:global(.litegraph-node__semantic-copy) {
		min-width: 0;
	}

	:global(.litegraph-node__semantic-title) {
		font-size: 0.92rem;
		font-weight: 700;
		line-height: 1.15;
		color: var(--color-text-primary);
	}

	:global(.litegraph-node__semantic-description) {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1.35;
		color: var(--color-text-secondary);
	}
</style>

