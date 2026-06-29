<script lang="ts">
	import type { PortGroupProps } from '$stylist/workspace/type/struct/port-group-props';
	import createPortGroupState from '$stylist/workspace/function/state/port-group/index.svelte';
	import GraphPort from '$stylist/workspace/component/atom/graph-port/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';

	let props: PortGroupProps = $props();
	const state = createPortGroupState(props);
</script>

<div
	class={`${state.classes} ${props.class ?? ''}`}
	data-port-group-id={props.id}
	data-port-group-direction={props.direction}
	{...state.restProps}
>
	{#if state.hasTitle}
		<div class="port-group__title">{state.title}</div>
	{/if}

	<div class="port-group__list">
		{#each state.ports as port, index}
			{#if state.divider && index > 0}
				<Divider orientation="horizontal" class="port-group__divider" />
			{/if}

			<div
				class={`port-group__item ${state.divider && index > 0 ? 'port-group__item--divider' : ''}`}
			>
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

		{#if props.children}{@render props.children()}{/if}
	</div>
</div>

<style>
	.port-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.5rem 0;
	}
	.port-group__title {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0 0.75rem;
		margin-bottom: 0.25rem;
	}
	.port-group__list {
		display: flex;
		flex-direction: column;
	}
	.port-group__item {
		position: relative;
		display: flex;
		align-items: center;
	}
	.port-group__item--divider {
		padding-top: 0.5rem;
		margin-top: 0.5rem;
	}
	.port-group__divider {
		margin: 0.5rem 0.75rem;
		opacity: 0.3;
	}
	.port-group--input {
		align-items: flex-start;
	}
	.port-group--input .port-group__item {
		justify-content: flex-start;
	}
	.port-group--output {
		align-items: flex-end;
	}
	.port-group--output .port-group__item {
		justify-content: flex-end;
	}
	.port-group--compact {
		gap: 0;
		padding: 0.25rem 0;
	}
	.port-group--compact .port-group__item {
		padding: 0.25rem 0;
	}
</style>
