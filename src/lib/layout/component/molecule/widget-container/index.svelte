<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createWidgetContainerState from '$stylist/layout/function/state/widget-container/index.svelte';
	import type { WidgetContainerProps } from '$stylist/layout/type/alias/widget-container-props';

	const GripVertical = 'grip-vertical';
	const MoreHorizontal = 'more-horizontal';
	const Minimize2 = 'minimize-2';
	const Maximize2 = 'maximize-2';

	let props: WidgetContainerProps = $props();
	const state = createWidgetContainerState(props);

	const TITLE_SIZE: Record<string, string> = {
		sm: '1rem',
		md: '1.125rem',
		lg: '1.25rem'
	};
	const titleSize = $derived(TITLE_SIZE[state.size ?? 'md'] ?? '1.125rem');
</script>

<div
	class={[
		'layout-widget',
		state.isMaximized && 'layout-widget--maximized',
		state.isCollapsed && 'layout-widget--collapsed',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	{...state.restProps}
>
	<div class={['layout-widget__header', props.headerClass].filter(Boolean).join(' ')}>
		{#if state.draggable}
			<div class="layout-widget__handle">
				<BaseIcon name={GripVertical} class="layout-widget__icon" />
			</div>
		{/if}

		<div class="layout-widget__title-group">
			{#if state.title}
				<h3 class="layout-widget__title" style:--title-size={titleSize}>{state.title}</h3>
			{/if}
			{#if state.subtitle}
				<p class="layout-widget__subtitle">{state.subtitle}</p>
			{/if}
		</div>

		<div class="layout-widget__actions">
			{#if state.actions}
				{@render state.actions()}
			{/if}

			{#if state.maximizable}
				<button
					type="button"
					class="layout-widget__icon-btn"
					onclick={state.toggleMaximize}
					aria-label={state.isMaximized ? 'Minimize' : 'Maximize'}
				>
					{#if state.isMaximized}
						<BaseIcon name={Minimize2} class="layout-widget__icon" />
					{:else}
						<BaseIcon name={Maximize2} class="layout-widget__icon" />
					{/if}
				</button>
			{/if}

			{#if state.collapsible}
				<button
					type="button"
					class="layout-widget__icon-btn"
					onclick={state.toggleCollapse}
					aria-label={state.isCollapsed ? 'Expand' : 'Collapse'}
				>
					{#if state.isCollapsed}
						<svg class="layout-widget__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					{:else}
						<svg class="layout-widget__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 15l7-7 7 7"
							/>
						</svg>
					{/if}
				</button>
			{/if}

			<button type="button" class="layout-widget__icon-btn" aria-label="More options">
				<BaseIcon name={MoreHorizontal} class="layout-widget__icon" />
			</button>
		</div>
	</div>

	{#if !state.isCollapsed}
		<div class={['layout-widget__body', props.bodyClass].filter(Boolean).join(' ')}>
			{@render state.content()}
		</div>
	{/if}
</div>

<style>
	.layout-widget {
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		overflow: hidden;
	}

	.layout-widget--maximized {
		position: fixed;
		inset: 0;
		z-index: var(--z-index-modal, 100);
	}

	.layout-widget__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.layout-widget__handle {
		cursor: move;
		color: var(--color-text-tertiary);
		margin-right: 0.5rem;
	}

	.layout-widget__title-group {
		flex: 1;
		margin-left: 0.5rem;
	}

	.layout-widget__title {
		font-size: var(--title-size, 1.125rem);
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.layout-widget__subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.layout-widget__actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.layout-widget__icon-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		color: var(--color-text-tertiary);
		display: flex;
		align-items: center;
		border-radius: 0.25rem;
		transition: color 150ms ease;
	}

	.layout-widget__icon-btn:hover {
		color: var(--color-text-secondary);
	}

	:global(.layout-widget__icon) {
		width: 1.25rem;
		height: 1.25rem;
	}

	.layout-widget__body {
		padding: 1rem;
	}
</style>
