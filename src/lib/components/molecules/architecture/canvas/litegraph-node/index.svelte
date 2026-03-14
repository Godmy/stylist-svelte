<script lang="ts">
	import type { LiteGraphNodeProps, LiteGraphPort } from '$stylist/design-system/contracts';
	import { createLiteGraphNodeState } from '$stylist/design-system/models/information/litegraph-node.svelte';
	import { NodeProperty } from '$stylist/components/atoms';
	import { NodeHeader, PortGroup } from '$stylist/components/molecules';

	let props: LiteGraphNodeProps = $props();

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
			state: _state,
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
		if (!isDragging) return;

		props.onNodeDrag?.(props.id, {
			x: props.x + (event.clientX - dragStartX),
			y: props.y + (event.clientY - dragStartY)
		});
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handlePortConnectionStart(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionStart?.(port, event);
	}

	function handlePortConnectionEnd(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionEnd?.(port, event);
	}

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div
	class={`${nodeState.classes} ${props.class ?? ''}`}
	style={nodeState.styles}
	data-node-id={props.id}
	data-node-type={nodeState.type}
	data-node-state={nodeState.state}
	data-selected={nodeState.selected}
	onmousedown={handleMouseDown}
	{...restProps}
>
	{#if !props.hideHeader}
		<NodeHeader
			id={`${props.id}-header`}
			title={props.title}
			color={nodeState.headerColor}
			size={props.size}
			selected={nodeState.selected}
			editable={true}
			showClose={props.deletable}
			showDuplicate={props.duplicable}
			showSettings={props.showActions}
			onclose={() => props.ondelete?.(props.id)}
			onduplicate={() => props.onduplicate?.(props.id)}
		>
			{#if props.headerContent}
				{@render props.headerContent?.()}
			{/if}
		</NodeHeader>
	{/if}

	<div class="litegraph-node__body">
		{#if !props.hidePorts && (hasInputs || hasOutputs)}
			<div class="litegraph-node__ports">
				{#if hasInputs}
					<PortGroup
						id={`${props.id}-inputs`}
						direction="input"
						ports={inputs.map((port, idx) => ({ ...port, index: idx }) as any)}
						portSize="md"
						showLabels={true}
						onConnectionStart={handlePortConnectionStart}
						onConnectionEnd={handlePortConnectionEnd}
					/>
				{/if}

				{#if hasOutputs}
					<PortGroup
						id={`${props.id}-outputs`}
						direction="output"
						ports={outputs.map((port, idx) => ({ ...port, index: idx }) as any)}
						portSize="md"
						showLabels={true}
						onConnectionStart={handlePortConnectionStart}
						onConnectionEnd={handlePortConnectionEnd}
					/>
				{/if}
			</div>
		{/if}

		{#if !props.hideProperties && hasProperties}
			<div class="litegraph-node__properties">
				{#each properties as property (property.id)}
					<NodeProperty
						id={property.id}
						name={property.name}
						type={property.type}
						value={property.value}
						label={property.label}
						description={property.description}
						options={property.options}
						size="sm"
						onchange={handlePropertyChange}
					/>
				{/each}
			</div>
		{/if}

		{#if props.bodyContent}
			<div class="litegraph-node__content">
				{@render props.bodyContent?.()}
			</div>
		{/if}

		{#if props.children}
			{@render props.children?.()}
		{/if}
	</div>
</div>

<style>
	:global(.litegraph-node) {
		position: absolute;
		display: flex;
		flex-direction: column;
		min-width: var(--node-min-width, 150px);
		width: var(--node-width, 200px);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-custom39);
		transition: box-shadow var(--duration-120) var(--animation-ease), border-color var(--duration-120) var(--animation-ease);
		z-index: var(--z-index-docked);
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
</style>

