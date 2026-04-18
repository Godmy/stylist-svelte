<script lang="ts">
	import { createTimelineState } from '$stylist/calendar/function/state/timeline';
	import type { TimelineProps } from '$stylist/calendar/type/struct/timeline';

	let props: TimelineProps = $props();
	const state = createTimelineState(props);
</script>

<div class={`w-full ${state.className} ${state.orientation === 'vertical' ? 'flex flex-col' : 'flex'}`} {...state.restProps}>
	{#each state.items as item, index}
		<div class={`flex ${state.orientation === 'vertical' ? 'flex-col' : 'flex-row items-center'}`}>
			<div class={`flex ${state.orientation === 'vertical' ? 'flex-row' : 'flex-col items-center'}`}>
				<div class={`flex items-center justify-center z-[var(--z-index-docked)] ${
					state.orientation === 'vertical' ? 'mr-4' : 'mb-4'
				}`}>
					{#if item.icon}
						<div class={`flex items-center justify-center w-8 h-8 rounded-full ${state.getStatusClasses(item.status || 'upcoming')} ${state.iconClass}`}>
							{@render item.icon()}
						</div>
					{:else}
						<div class={`flex items-center justify-center w-8 h-8 rounded-full ${state.getStatusClasses(item.status || 'upcoming')} ${state.iconClass}`}>
							{index + 1}
						</div>
					{/if}
				</div>

				<div class={`mb-6 ${state.itemClass} ${state.orientation === 'vertical' ? 'flex-1' : ''}`}>
					<div class={`p-4 rounded-lg ${state.getItemBackgroundClasses(item.status || 'upcoming')}`}>
						<div class="flex justify-between items-start">
							<h3 class="text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
							{#if item.date}
								<span class="text-sm text-[var(--color-text-secondary)]">{item.date}</span>
							{/if}
						</div>
						{#if item.content}
							<div class="mt-2 text-[var(--color-text-secondary)]">
								{@render item.content()}
							</div>
						{/if}
					</div>
				</div>
			</div>

			{#if index < state.items.length - 1}
				<div class={`${
					state.orientation === 'vertical'
						? 'absolute left-4 h-full w-0.5 bg-[var(--color-background-tertiary)] ml-4'
						: 'h-0.5 w-full bg-[var(--color-background-tertiary)] mt-4'
				} ${state.connectorClass}`}></div>
			{/if}
		</div>
	{/each}
</div>
