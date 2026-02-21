<script lang="ts">
	import StatusIndicator from './index.svelte';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

	const controls: ControlConfig[] = [
		{
			name: 'status',
			type: 'select',
			options: ['online', 'offline', 'away', 'busy'],
			defaultValue: 'online'
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Available for pairing'
		}
	];

	const team = [
		{ name: 'Maya Patel', role: 'Product Design', status: 'online' },
		{ name: 'Jonas Müller', role: 'Frontend', status: 'busy' },
		{ name: 'Luna Chen', role: 'Research', status: 'away' },
		{ name: 'Diego Alvarez', role: 'Infrastructure', status: 'offline' }
	] as Array<{ name: string; role: string; status: 'online' | 'offline' | 'away' | 'busy' }>;
</script>

<Story
	{controls}
	component={StatusIndicator}
	title="StatusIndicator"
	category="Atoms/Information/Typography/Indicators"
	description="Presence dot and label pairing for live collaboration states."
	tags={['status', 'indicator', 'presence', 'collaboration']}
>
	{#snippet children(values: any)}
		<div class="space-y-8">
			<div
				class="flex items-center justify-between rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40"
			>
				<div>
					<p class="text-sm font-semibold text-gray-900 dark:text-white">Current selection</p>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Combine label overrides with semantic states.
					</p>
				</div>
				<StatusIndicator
					status={values.status}
					label={values.label}
					class="text-sm font-medium text-gray-800 dark:text-gray-100"
				/>
			</div>

			<div
				class="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
			>
				<p class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Team presence</p>
				<ul class="divide-y divide-gray-100 text-sm dark:divide-gray-800">
					{#each team as member}
						<li class="flex items-center justify-between py-3">
							<div>
								<p class="font-medium text-gray-900 dark:text-white">{member.name}</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
							</div>
							<StatusIndicator status={member.status} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>





