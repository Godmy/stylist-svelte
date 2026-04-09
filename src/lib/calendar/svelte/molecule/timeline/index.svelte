<script lang="ts">
	import type { TimelineContract, TimelineItem, TimelineStatus } from '$stylist/calendar/interface/record/calendar';
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

	type Props = TimelineContract & InteractionHTMLAttributes<HTMLDivElement>;

	let props: Props = $props();
	let {
		items = [],
		orientation = 'vertical',
		class: className = '',
		itemClass = '',
		connectorClass = '',
		iconClass = '',
		...restProps
	} = props;

	function getStatusClasses(status: TimelineStatus) {
		switch (status) {
			case 'completed': return 'bg-[var(--color-success-500)] text-[var(--color-text-inverse)]';
			case 'current': return 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]';
			default: return 'bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)]';
		}
	}

	function getItemBackgroundClasses(status: TimelineStatus) {
		switch (status) {
			case 'completed': return 'bg-[var(--color-success-50)]';
			case 'current': return 'bg-[var(--color-primary-50)]';
			default: return 'bg-[var(--color-background-secondary)]';
		}
	}
</script>

<div class={`w-full ${className} ${orientation === 'vertical' ? 'flex flex-col' : 'flex'}`} {...restProps}>
	{#each items as item, index}
		<div class={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row items-center'}`}>
			<div class={`flex ${orientation === 'vertical' ? 'flex-row' : 'flex-col items-center'}`}>
				<div class={`flex items-center justify-center z-[var(--z-index-docked)] ${
					orientation === 'vertical' ? 'mr-4' : 'mb-4'
				}`}>
					{#if item.icon}
						<div class={`flex items-center justify-center w-8 h-8 rounded-full ${getStatusClasses(item.status || 'pending')} ${iconClass}`}>
							{@render item.icon()}
						</div>
					{:else}
						<div class={`flex items-center justify-center w-8 h-8 rounded-full ${getStatusClasses(item.status || 'pending')} ${iconClass}`}>
							{index + 1}
						</div>
					{/if}
				</div>

				<div class={`mb-6 ${itemClass} ${orientation === 'vertical' ? 'flex-1' : ''}`}>
					<div class={`p-4 rounded-lg ${getItemBackgroundClasses(item.status || 'pending')}`}>
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

			{#if index < items.length - 1}
				<div class={`${
					orientation === 'vertical'
						? 'absolute left-4 h-full w-0.5 bg-[var(--color-background-tertiary)] ml-4'
						: 'h-0.5 w-full bg-[var(--color-background-tertiary)] mt-4'
				} ${connectorClass}`}></div>
			{/if}
		</div>
	{/each}
</div>
