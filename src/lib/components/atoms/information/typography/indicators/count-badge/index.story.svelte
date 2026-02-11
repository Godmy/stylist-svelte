<script lang="ts">
	import CountBadge from './index.svelte';
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	type CountBadgeStoryProps = {
		count: number;
		max: number;
		showZero: boolean;
	};

	const controls: ControlConfig[] = [
		{ name: 'count', type: 'number', defaultValue: 12, min: 0, max: 200, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 99, min: 1, max: 999, step: 1 },
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
	id="atoms-count-badge"
	title="CountBadge"
	component={CountBadge}
	category="Atoms"
	description="Compact counter for unread states with support for maximum display values."
	tags={['indicator', 'counter', 'notifications']}
	{controls}
>
	{#snippet children(props)}
		<div class="space-y-8">
			<div
				class="flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40"
			>
				<button class="relative rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
					Messages
					<span class="absolute -top-2 -right-2">
						<CountBadge count={props.count} max={props.max} showZero={props.showZero} />
					</span>
				</button>
				<p class="text-sm text-gray-600 dark:text-gray-300">
					Play with the controls to see how overflow (`{props.max}+`) and zero visibility behave.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
			>
				<p class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Inbox sections</p>
				<ul class="divide-y divide-gray-100 text-sm dark:divide-gray-800">
					{#each inboxViews as view}
						<li class="flex items-center justify-between py-3">
							<span class="text-gray-700 dark:text-gray-200">{view.label}</span>
							<CountBadge
								count={view.label === 'Inbox' ? props.count : view.count}
								max={props.max}
								showZero={props.showZero}
							/>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>
