<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainMenu from './index.svelte';

	type Screen =
		| 'landing'
		| 'domain'
		| 'workspace'
		| 'builder'
		| 'backlog'
		| 'dashboard'
		| 'diagnostics';

	let screen = $state<Screen>('domain');
	let settingsOpen = $state(false);
	let aiOpen = $state(false);
</script>

<Story
	component={DomainMenu}
	title="DomainMenu"
	description="Floating navigation pill that switches between app screens, opens settings, and toggles the AI agent panel."
>
	{#snippet children()}
		<div class="_c1">
			<DomainMenu
				landingVisible={screen === 'landing'}
				domainVisible={screen === 'domain'}
				workspaceOpen={screen === 'workspace'}
				builderOpen={screen === 'builder'}
				backlogOpen={screen === 'backlog'}
				dashboardOpen={screen === 'dashboard'}
				diagnosticsOpen={screen === 'diagnostics'}
				{settingsOpen}
				{aiOpen}
				onLandingToggle={() => (screen = 'landing')}
				onDomainToggle={() => (screen = 'domain')}
				onWorkspaceToggle={() => (screen = 'workspace')}
				onBuilderToggle={() => (screen = 'builder')}
				onBacklogToggle={() => (screen = 'backlog')}
				onDashboardToggle={() => (screen = 'dashboard')}
				onDiagnosticsToggle={() => (screen = 'diagnostics')}
				onSettingsToggle={() => (settingsOpen = !settingsOpen)}
				onAiToggle={() => (aiOpen = !aiOpen)}
			/>
			<p class="_c2">
				Screen: {screen} · Settings: {settingsOpen ? 'open' : 'closed'} · AI: {aiOpen
					? 'open'
					: 'closed'}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.75rem;
		justify-items: start;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		color: #64748b;
	}
</style>
