<script lang="ts">
	import StatusIndicator from './index.svelte';
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';

	const controls: InterfaceControllerSettings[] = [
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
				class="flex items-center justify-between rounded-2xl border border-[var(--color-border-primary)]/80 bg-[var(--color-background-primary)]/70 p-4 shadow-sm dark:border-[var(--color-border-primary)]/80 dark:bg-[var(--color-neutral-900)]/40"
			>
				<div>
					<p class="text-sm font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-inverse)]">Current selection</p>
					<p class="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-tertiary)]">
						Combine label overrides with semantic states.
					</p>
				</div>
				<StatusIndicator
					status={values.status}
					label={values.label}
					class="text-sm font-medium text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]"
				/>
			</div>

			<div
				class="rounded-2xl border border-[var(--color-border-primary)]/80 bg-[var(--color-background-primary)]/80 p-4 shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40"
			>
				<p class="mb-4 text-sm font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-inverse)]">Team presence</p>
				<ul class="divide-y divide-gray-100 text-sm dark:divide-gray-800">
					{#each team as member}
						<li class="flex items-center justify-between py-3">
							<div>
								<p class="font-medium text-[var(--color-text-primary)] dark:text-[var(--color-text-inverse)]">{member.name}</p>
								<p class="text-xs text-[var(--color-text-secondary)] dark:text-[var(--color-text-tertiary)]">{member.role}</p>
							</div>
							<StatusIndicator status={member.status} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>










