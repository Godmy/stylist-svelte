<script lang="ts">
	import type { PortGroupProps, GraphPortProps } from '$stylist/design-system/contracts';
	import { GraphPort } from '$stylist/components/atoms';
	import { Divider } from '$stylist/components/atoms';

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
		gap: 0.25rem;
		padding: 0.5rem 0;
	}

	:global(.port-group__title) {
		font-size: 0.6875rem;
		font-weight: 600;
		color: #9ca3af;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0 0.75rem;
		margin-bottom: 0.25rem;
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
		padding-top: 0.5rem;
		margin-top: 0.5rem;
	}

	:global(.port-group__divider) {
		margin: 0.5rem 0.75rem;
		opacity: 0.3;
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
		padding: 0.25rem 0;
	}

	:global(.port-group--compact .port-group__item) {
		padding: 0.125rem 0;
	}
</style>
