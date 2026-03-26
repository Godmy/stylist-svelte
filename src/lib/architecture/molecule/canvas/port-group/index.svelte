<script lang="ts">
	import type { PortGroupProps, GraphPortProps } from '$stylist';
	import { GraphPort } from '$stylist';
	import { Divider } from '$stylist';

	let props: PortGroupProps = $props();

	const direction = $derived(props.direction);
	const portSize = $derived(props.portSize ?? 'md');
	const showLabels = $derived(props.showLabels ?? true);
	const compact = $derived(props.compact ?? false);
	const divider = $derived(props.divider ?? false);
	const hasTitle = $derived(Boolean(props.title));
	const title = $derived(props.title ?? '');
	const ports = $derived(props.ports ?? []);

	const classes = $derived(`port-group port-group--${direction} ${compact ? 'port-group--compact' : ''}`);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				id: _id,
				direction: _direction,
				ports: _ports,
				portSize: _portSize,
				showLabels: _showLabels,
				showTypeIcons: _showTypeIcons,
				compact: _compact,
				divider: _divider,
				title: _title,
				onPortClick: _onPortClick,
				onConnectionStart: _onConnectionStart,
				onConnectionEnd: _onConnectionEnd,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	function handlePortClick(port: GraphPortProps, event: MouseEvent) {
		if (props.onPortClick) {
			props.onPortClick(port.id, event);
		}
	}

	function handleConnectionStart(port: GraphPortProps, event: MouseEvent) {
		if (props.onConnectionStart) {
			props.onConnectionStart(port, event);
		}
	}

	function handleConnectionEnd(port: GraphPortProps, event: MouseEvent) {
		if (props.onConnectionEnd) {
			props.onConnectionEnd(port, event);
		}
	}
</script>

<div
	class={`${classes} ${props.class ?? ''}`}
	data-port-group-id={props.id}
	data-port-group-direction={props.direction}
	{...restProps}
>
	{#if hasTitle}
		<div class="port-group__title">
			{title}
		</div>
	{/if}

	<div class="port-group__list">
		{#each ports as port, index}
			{#if divider && index > 0}
				<Divider orientation="horizontal" class="port-group__divider" />
			{/if}

			<div class={`port-group__item ${divider && index > 0 ? 'port-group__item--divider' : ''}`}>
				<GraphPort
					id={port.id}
					direction={props.direction}
					dataType={port.dataType}
					label={showLabels ? port.label : undefined}
					size={portSize as 'xs' | 'sm' | 'md' | 'lg'}
					connected={port.connected}
					color={port.color}
					onclick={(e) => handlePortClick(port, e)}
					onConnectionStart={(e) => handleConnectionStart(port, e)}
					onConnectionEnd={(e) => handleConnectionEnd(port, e)}
				/>
			</div>
		{/each}

		{#if props.children}
			{@render props.children?.()}
		{/if}
	</div>
</div>

<style>
	:global(.port-group) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-1);
		padding: var(--spacing-2) 0;
	}

	:global(.port-group__title) {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-wider);
		padding: 0 var(--spacing-3);
		margin-bottom: var(--spacing-1);
	}

	:global(.port-group__list) {
		display: flex;
		flex-direction: column;
	}

	:global(.port-group__item) {
		position: relative;
		display: flex;
		align-items: center;
	}

	:global(.port-group__item--divider) {
		padding-top: var(--spacing-2);
		margin-top: var(--spacing-2);
	}

	:global(.port-group__divider) {
		margin: var(--spacing-2) var(--spacing-3);
		opacity: var(--opacity-30);
	}

	/* Input ports - left aligned */
	:global(.port-group--input) {
		align-items: flex-start;
	}

	:global(.port-group--input .port-group__item) {
		justify-content: flex-start;
	}

	/* Output ports - right aligned */
	:global(.port-group--output) {
		align-items: flex-end;
	}

	:global(.port-group--output .port-group__item) {
		justify-content: flex-end;
	}

	/* Compact mode */
	:global(.port-group--compact) {
		gap: 0;
		padding: var(--spacing-1) 0;
	}

	:global(.port-group--compact .port-group__item) {
		padding: var(--spacing-1) 0;
	}
</style>



