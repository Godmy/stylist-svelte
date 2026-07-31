<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StatusIndicator from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'status',
			type: 'select',
			options: ['online', 'offline', 'away', 'busy'],
			defaultValue: 'online'
		},
		{ name: 'label', type: 'text', defaultValue: 'Available for pairing' }
	];

	const team = [
		{ name: 'Maya Patel', role: 'Product Design', status: 'online' },
		{ name: 'Jonas MГјller', role: 'Frontend', status: 'busy' },
		{ name: 'Luna Chen', role: 'Research', status: 'away' },
		{ name: 'Diego Alvarez', role: 'Infrastructure', status: 'offline' }
	] as Array<{ name: string; role: string; status: 'online' | 'offline' | 'away' | 'busy' }>;
</script>

<Story
	{controls}
	component={StatusIndicator}
	title="StatusIndicator"
	category="Atoms/Information/Indicators"
	description="Presence dot and label pairing for live collaboration states."
	tags={['status', 'indicator', 'presence', 'collaboration']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<div>
					<p class="_c3 _c1">Current selection</p>
					<p class="_c4 _c2">Combine label overrides with semantic states.</p>
				</div>
				<StatusIndicator status={values.status} label={values.label} class="_c5 _c3" />
			</div>

			<div class="_c6 _c4">
				<p class="_c7 _c1">Team presence</p>
				<ul class="_c8">
					{#each team as member}
						<li class="_c9">
							<div>
								<p class="_c10 _c1">
									{member.name}
								</p>
								<p class="_c11 _c2">
									{member.role}
								</p>
							</div>
							<StatusIndicator status={member.status} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 2rem;
	}
	._c10 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c11 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c6 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c8 > * + * {
		border-top-width: 1px;
		border-style: solid;
	}
	._c9 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}

	@media (prefers-color-scheme: dark) {
		._c1 {
			color: var(--color-text-inverse);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c2 {
			color: var(--color-text-tertiary);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c3 {
			color: var(--color-neutral-100);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c4 {
			border-color: var(--color-border-primary);
		}
	}
</style>
