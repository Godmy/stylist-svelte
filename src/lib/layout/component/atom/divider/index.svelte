<script lang="ts">
	import type { DividerProps } from '$stylist/layout/interface/recipe/divider';
	import createDividerState from '$stylist/layout/function/state/divider/index.svelte';

	let props: DividerProps = $props();
	const state = createDividerState(props);
</script>

{#if state.isHorizontal}
	<div
		class={[
			'layout-divider',
			'layout-divider--horizontal',
			state.dashed && 'layout-divider--dashed',
			state.align === 'left' && 'layout-divider--align-left',
			state.align === 'right' && 'layout-divider--align-right',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		{...state.restProps}
	>
		<span class="layout-divider__line layout-divider__line--left"></span>
		{#if props.label}
			<span class="layout-divider__label">{props.label}</span>
		{/if}
		<span class="layout-divider__line layout-divider__line--right"></span>
	</div>
{:else}
	<div
		class={[
			'layout-divider',
			'layout-divider--vertical',
			state.dashed && 'layout-divider--dashed',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		aria-hidden="true"
		{...state.restProps}
	></div>
{/if}

<style>
	.layout-divider--horizontal {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
	}

	.layout-divider--vertical {
		display: inline-block;
		height: 100%;
		width: 1px;
		border-left: 1px solid var(--color-border-secondary);
	}

	.layout-divider--vertical.layout-divider--dashed {
		border-left-style: dashed;
	}

	.layout-divider__line {
		flex: 1;
		border-top: 1px solid var(--color-border-secondary);
		border-style: solid;
	}

	.layout-divider--dashed .layout-divider__line {
		border-top-style: dashed;
	}

	.layout-divider--align-left .layout-divider__line--left {
		flex: none;
		width: 1rem;
	}

	.layout-divider--align-right .layout-divider__line--right {
		flex: none;
		width: 1rem;
	}

	.layout-divider__label {
		padding-inline: 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		white-space: nowrap;
	}
</style>
