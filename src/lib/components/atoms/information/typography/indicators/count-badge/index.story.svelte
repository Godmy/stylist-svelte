<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import CountBadge from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'count', type: 'select', defaultValue: '12', options: ['0', '1', '3', '5', '10', '12', '25', '50', '99', '100', '152', '200'] },
		{ name: 'max', type: 'select', defaultValue: '99', options: ['10', '50', '99', '100', '200', '500', '999'] },
		{ name: 'showZero', type: 'boolean', defaultValue: false }
	];

	const inboxViews = [
		{ label: 'Inbox', count: 12 },
		{ label: 'Mentions', count: 3 },
		{ label: 'Approvals', count: 0 },
		{ label: 'Archive', count: 152 }
	];
</script>

<Story
	{controls}
	component={CountBadge}
	title="CountBadge Component"
	description="Compact counter for unread states with support for maximum display values"
	tags={['information', 'typography', 'indicator', 'counter', 'notifications']}
>
	{#snippet children(values: any)}
		{@const count = Number(values.count)}
		{@const max = Number(values.max)}
		<div class="space-y-8">
			<div class="flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
				<button class="relative rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
					Messages
					<span class="absolute -top-2 -right-2">
						<CountBadge count={Number.isNaN(count) ? 12 : count} max={Number.isNaN(max) ? 99 : max} showZero={values.showZero as boolean} />
					</span>
				</button>
			</div>

			<div class="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/40">
				<ul class="divide-y divide-gray-100 text-sm dark:divide-gray-800">
					{#each inboxViews as view}
						<li class="flex items-center justify-between py-3">
							<span class="text-gray-700 dark:text-gray-200">{view.label}</span>
							<CountBadge count={view.label === 'Inbox' ? (Number.isNaN(count) ? 12 : count) : view.count} max={Number.isNaN(max) ? 99 : max} showZero={values.showZero as boolean} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>
