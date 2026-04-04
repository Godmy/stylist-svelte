<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import {
		createWidgetContainerState,
		type WidgetContainerProps
	} from '$stylist/layout/function/state/widget-container/create-widget-container-state.svelte';

	const GripVertical = 'grip-vertical';
	const MoreHorizontal = 'more-horizontal';
	const Minimize2 = 'minimize-2';
	const Maximize2 = 'maximize-2';

	let props: WidgetContainerProps = $props();
	const state = createWidgetContainerState(props);
</script>

<div
	class={state.rootClass}
	class:collapsed={state.isCollapsed}
	{...state.restProps}
>
	<div class={state.headerClass}>
		{#if state.draggable}
			<div class={state.handleClass}>
				<BaseIcon name={GripVertical} class="h-5 w-5" />
			</div>
		{/if}

		<div class={state.titleGroupClass}>
			{#if state.title}
				<h3 class={state.titleClass}>{state.title}</h3>
			{/if}
			{#if state.subtitle}
				<p class={state.subtitleClass}>{state.subtitle}</p>
			{/if}
		</div>

		<div class={state.actionsClass}>
			{#if state.actions}
				{@render state.actions()}
			{/if}

			{#if state.maximizable}
				<button
					type="button"
					class={state.iconButtonClass}
					onclick={state.toggleMaximize}
					aria-label={state.isMaximized ? 'Minimize' : 'Maximize'}
				>
					{#if state.isMaximized}
						<BaseIcon name={Minimize2} class="h-5 w-5" />
					{:else}
						<BaseIcon name={Maximize2} class="h-5 w-5" />
					{/if}
				</button>
			{/if}

			{#if state.collapsible}
				<button
					type="button"
					class={state.iconButtonClass}
					onclick={state.toggleCollapse}
					aria-label={state.isCollapsed ? 'Expand' : 'Collapse'}
				>
					{#if state.isCollapsed}
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					{:else}
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
						</svg>
					{/if}
				</button>
			{/if}

			<button
				type="button"
				class={state.iconButtonClass}
				aria-label="More options"
			>
				<BaseIcon name={MoreHorizontal} class="h-5 w-5" />
			</button>
		</div>
	</div>

	{#if !state.isCollapsed}
		<div class={state.bodyClass}>
			{@render state.content()}
		</div>
	{/if}
</div>








