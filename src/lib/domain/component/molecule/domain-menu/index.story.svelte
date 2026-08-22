<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainMenu from './index.svelte';

	type Screen = 'landing' | 'domain' | 'diagnostics';

	let screen = $state<Screen>('domain');
	let settingsOpen = $state(false);
</script>

<Story
	component={DomainMenu}
	title="DomainMenu"
	description="Floating navigation pill that switches between app screens and opens settings."
>
	{#snippet children()}
		<div class="_c1">
			<DomainMenu
				landingVisible={screen === 'landing'}
				domainVisible={screen === 'domain'}
				diagnosticsOpen={screen === 'diagnostics'}
				{settingsOpen}
				onLandingToggle={() => (screen = 'landing')}
				onDomainToggle={() => (screen = 'domain')}
				onDiagnosticsToggle={() => (screen = 'diagnostics')}
				onSettingsToggle={() => (settingsOpen = !settingsOpen)}
			/>
			<p class="_c2">Screen: {screen} · Settings: {settingsOpen ? 'open' : 'closed'}</p>
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
