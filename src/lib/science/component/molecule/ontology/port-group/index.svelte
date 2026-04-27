<script lang="ts">
	import type { PortGroupProps } from '$stylist/science/type/struct/port-group-props';
	import { createPortGroupState } from '$stylist/science/function/state/port-group';
	import { GraphPort } from '$stylist';
	import { Divider } from '$stylist';

	let props: PortGroupProps = $props();
	const state = createPortGroupState(props);
</script>

<div class={`${state.classes} ${props.class ?? ''}`} data-port-group-id={props.id} data-port-group-direction={props.direction} {...state.restProps}>
	{#if state.hasTitle}
		<div class="port-group__title">{state.title}</div>
	{/if}

	<div class="port-group__list">
		{#each state.ports as port, index}
			{#if state.divider && index > 0}
				<Divider orientation="horizontal" class="port-group__divider" />
			{/if}

			<div class={`port-group__item ${state.divider && index > 0 ? 'port-group__item--divider' : ''}`}>
				<GraphPort
					id={port.id}
					direction={state.direction}
					dataType={port.dataType}
					label={state.showLabels ? port.label : undefined}
					size={state.portSize as 'xs' | 'sm' | 'md' | 'lg'}
					connected={port.connected}
					color={port.color}
					onclick={(event: MouseEvent) => state.handlePortClick(port, event)}
					onConnectionStart={(event: MouseEvent) => state.handleConnectionStart(port, event)}
					onConnectionEnd={(event: MouseEvent) => state.handleConnectionEnd(port, event)}
				/>
			</div>
		{/each}

		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{/if}
	</div>
</div>

<style>
	:global(.port-group) { display: flex; flex-direction: column; gap: var(--spacing-1); padding: var(--spacing-2) 0; }
	:global(.port-group__title) { font-size: var(--font-size-3); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0 var(--spacing-3); margin-bottom: var(--spacing-1); }
	:global(.port-group__list) { display: flex; flex-direction: column; }
	:global(.port-group__item) { position: relative; display: flex; align-items: center; }
	:global(.port-group__item--divider) { padding-top: var(--spacing-2); margin-top: var(--spacing-2); }
	:global(.port-group__divider) { margin: var(--spacing-2) var(--spacing-3); opacity: var(--opacity-30); }
	:global(.port-group--input) { align-items: flex-start; }
	:global(.port-group--input .port-group__item) { justify-content: flex-start; }
	:global(.port-group--output) { align-items: flex-end; }
	:global(.port-group--output .port-group__item) { justify-content: flex-end; }
	:global(.port-group--compact) { gap: 0; padding: var(--spacing-1) 0; }
	:global(.port-group--compact .port-group__item) { padding: var(--spacing-1) 0; }
</style>
