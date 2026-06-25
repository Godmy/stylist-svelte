<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import TabGroup from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'activeTab',
			type: 'select' as TokenControllerType,
			defaultValue: 'dashboard',
			options: ['dashboard', 'analytics', 'settings'],
			description: 'ID of the active tab.'
		}
	];

	function handleTabChange(tabId: string) {
		console.log(`Tab changed to: ${tabId}`);
	}
</script>

{#snippet dashboardContent()}
	<div class="_dashboard">
		<div>
			<span>Revenue</span>
			<strong>$48.2k</strong>
		</div>
		<div>
			<span>Conversion</span>
			<strong>11.8%</strong>
		</div>
		<div>
			<span>Incidents</span>
			<strong>0</strong>
		</div>
	</div>
{/snippet}

{#snippet analyticsContent()}
	<div class="_chart">
		<span style="height: 42%"></span>
		<span style="height: 68%"></span>
		<span style="height: 55%"></span>
		<span style="height: 82%"></span>
		<span style="height: 63%"></span>
	</div>
{/snippet}

{#snippet settingsContent()}
	<dl class="_settings">
		<div>
			<dt>Notifications</dt>
			<dd>Enabled</dd>
		</div>
		<div>
			<dt>Export format</dt>
			<dd>JSON</dd>
		</div>
		<div>
			<dt>Access</dt>
			<dd>Team only</dd>
		</div>
	</dl>
{/snippet}

<Story
	{controls}
	title="TabGroup"
	description="Array-driven tabs API for data-defined sections."
>
	{#snippet children(controlValues: any)}
		{@const tabs = [
			{ id: 'dashboard', title: 'Dashboard', content: dashboardContent },
			{ id: 'analytics', title: 'Analytics', content: analyticsContent },
			{ id: 'settings', title: 'Settings', content: settingsContent }
		]}
		<div class="_surface">
			<div class="_heading">
				<span>Array model</span>
				<strong>{controlValues.activeTab}</strong>
			</div>
			<TabGroup
				{tabs}
				activeTab={controlValues.activeTab}
				onValueChange={handleTabChange}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: grid;
		gap: 1rem;
		max-width: 42rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	._heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	._heading span {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}

	._heading strong {
		color: var(--color-text-secondary);
	}

	._dashboard {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	._dashboard div {
		display: grid;
		gap: 0.35rem;
		padding: 0.85rem;
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
	}

	._dashboard span,
	._settings dt {
		color: var(--color-text-secondary);
	}

	._dashboard strong {
		font-size: 1.25rem;
	}

	._chart {
		display: flex;
		align-items: end;
		gap: 0.65rem;
		height: 8rem;
		padding: 0.75rem;
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
	}

	._chart span {
		width: 100%;
		border-radius: 0.35rem 0.35rem 0 0;
		background: var(--color-primary-500);
	}

	._settings {
		display: grid;
		gap: 0.65rem;
		margin: 0;
	}

	._settings div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	._settings dd {
		margin: 0;
		font-weight: 700;
	}

	@media (max-width: 640px) {
		._dashboard {
			grid-template-columns: 1fr;
		}
	}
</style>
