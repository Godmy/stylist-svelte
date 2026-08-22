<script lang="ts">
	import { DOMAIN_SCREEN } from '$stylist/domain/const/value/domain-screen';
	import DomainMenu from '$stylist/domain/component/molecule/domain-menu/index.svelte';
	import DeviceViewport from '$stylist/domain/component/molecule/device-viewport/index.svelte';
	import createDomainPlaygroundState from './state.svelte';
	import DomainLanding from '$stylist/domain/component/page/domain-landing/index.svelte';
	import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/object/domain-component-descriptor';
	import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';
	import type { TypeDomainTreeNode } from '$stylist/domain/type/object/domain-tree-node';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';

	let {
		tree = [],
		descriptors = [],
		initialScreen = DOMAIN_SCREEN.LANDING,
		initialDomain,
		initialCluster,
		initialJoint,
		initialPreviewMode,
		class: className = ''
	}: {
		tree?: TypeDomainTreeNode[];
		descriptors?: TypeDomainComponentDescriptor[];
		initialScreen?: TypeDomainScreen;
		initialDomain?: string;
		initialCluster?: string;
		initialJoint?: string;
		initialPreviewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
		class?: string;
	} = $props();

	const screenState = createDomainPlaygroundState(initialScreen);
	let storyDevice = $state<DeviceFrameViewport>('fullscreen');
	let deviceViewportVisible = $state(false);
	const storyModuleCount = descriptors.filter((descriptor) => descriptor.hasStoryPreview).length;

	const loadDomainExplorer = () =>
		import('$stylist/domain/component/organism/domain-explorer/index.svelte');
	const loadDomainDiagnostics = () =>
		import('$stylist/domain/component/organism/domain-diagnostics/index.svelte');
	const loadDomainSettings = () =>
		import('$stylist/domain/component/organism/domain-settings/index.svelte');
</script>

<div class="c-domain-playground {className}">
	{#if screenState.currentScreen === DOMAIN_SCREEN.DOMAIN}
		{#await loadDomainExplorer() then module}
			{@const DomainExplorer = module.default}
			<DomainExplorer
				{tree}
				{initialDomain}
				{initialCluster}
				{initialJoint}
				{initialPreviewMode}
				bind:storyDevice
				bind:deviceViewportVisible
			/>
		{/await}
	{:else if screenState.currentScreen === DOMAIN_SCREEN.DIAGNOSTICS}
		{#await loadDomainDiagnostics() then module}
			{@const DomainDiagnostics = module.default}
			<DomainDiagnostics />
		{/await}
	{:else}
		<DomainLanding
			rootDomainCount={tree.length}
			{storyModuleCount}
			onBrowseComponents={screenState.handleDomainToggle}
			onOpenPlayground={screenState.handleDomainToggle}
			onOpenWorkspace={screenState.handleDomainToggle}
		/>
	{/if}

	<div class="menu-shell">
		{#if screenState.currentScreen === DOMAIN_SCREEN.DOMAIN && deviceViewportVisible}
			<DeviceViewport value={storyDevice} onChange={(next) => (storyDevice = next)} />
		{/if}

		<DomainMenu
			landingVisible={screenState.currentScreen === DOMAIN_SCREEN.LANDING}
			domainVisible={screenState.currentScreen === DOMAIN_SCREEN.DOMAIN}
			diagnosticsOpen={screenState.currentScreen === DOMAIN_SCREEN.DIAGNOSTICS}
			settingsOpen={screenState.isSettingsOpen}
			onLandingToggle={screenState.handleLandingToggle}
			onDomainToggle={screenState.handleDomainToggle}
			onDiagnosticsToggle={screenState.handleDiagnosticsToggle}
			onSettingsToggle={screenState.handleSettingsToggle}
		/>
	</div>
</div>

{#if screenState.isSettingsOpen}
	{#await loadDomainSettings() then module}
		{@const DomainSettings = module.default}
		<DomainSettings open={screenState.isSettingsOpen} onClose={screenState.closeSettings} />
	{/await}
{/if}

<style>
	.c-domain-playground {
		position: relative;
		min-height: 100vh;
	}

	.menu-shell {
		position: fixed;
		inset: 0.75rem 0.75rem auto auto;
		z-index: 1000;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 0.55rem;
		width: max-content;
		max-width: calc(100vw - 1.5rem);
	}

	@media (max-width: 840px) {
		.c-domain-playground {
			padding-top: calc(env(safe-area-inset-top, 0px) + 6rem);
		}

		.menu-shell {
			inset: calc(env(safe-area-inset-top, 0px) + 0.75rem) 0.75rem auto 0.75rem;
			width: auto;
			flex-wrap: wrap;
			justify-content: flex-end;
		}
	}
</style>
