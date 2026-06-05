<script lang="ts">
	import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
	import { DOMAIN_SCREEN_BUILDER } from '$stylist/domain/const/value/domain-screen-builder';
	import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
	import DomainMenu from '$stylist/domain/component/molecule/domain-menu/index.svelte';
	import createDomainBacklogState from '$stylist/domain/function/state/domain-backlog/index.svelte';
	import createDomainLandingScreenState from '$stylist/domain/function/state/domain-landing-screen/index.svelte';
	import StylistLanding from '$stylist/marketing/component/organism/stylist-landing/index.svelte';
	import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/struct/domain-component-descriptor';
	import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';
	import type { TypeDomainTreeNode } from '$stylist/domain/type/struct/domain-tree-node';

	let {
		tree = [],
		descriptors = [],
		initialScreen = DOMAIN_SCREEN_LANDING,
		class: className = ''
	}: {
		tree?: TypeDomainTreeNode[];
		descriptors?: TypeDomainComponentDescriptor[];
		initialScreen?: TypeDomainScreen | typeof DOMAIN_SCREEN_BUILDER;
		class?: string;
	} = $props();

	const screenState = createDomainLandingScreenState(initialScreen);
	let activeDomain = $state(tree[0]?.name ?? '');
	let activeFamily = $state('');
	const storyModuleCount = descriptors.filter((descriptor) => descriptor.hasStoryPreview).length;
	const backlogState = createDomainBacklogState({
		getDomain: () => activeDomain,
		getFamily: () => activeFamily,
		onOpen: screenState.openBacklogScreen
	});

	const loadDomainExplorer = () =>
		import('$stylist/domain/component/organism/domain-explorer/index.svelte');
	const loadDomainBuilder = () =>
		import('$stylist/domain/component/organism/domain-builder/index.svelte');
	const loadDomainBacklog = () =>
		import('$stylist/domain/component/organism/domain-backlog/index.svelte');
	const loadDomainDiagnostics = () =>
		import('$stylist/domain/component/organism/domain-diagnostics/index.svelte');
	const loadDomainSettings = () =>
		import('$stylist/domain/component/organism/domain-settings/index.svelte');

	function handleSelectionChange(selection: { domain: string; family: string }) {
		activeDomain = selection.domain;
		activeFamily = selection.family;
	}
</script>

<div class="c-domain-workspace-shell {className}">
	{#if screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
		{#await loadDomainExplorer() then module}
			{@const DomainExplorer = module.default}
			<DomainExplorer {tree} onSelectionChange={handleSelectionChange} />
		{/await}
	{:else if screenState.currentScreen === DOMAIN_SCREEN_BUILDER}
		{#await loadDomainBuilder() then module}
			{@const DomainBuilder = module.default}
			<DomainBuilder {tree} {descriptors} />
		{/await}
	{:else if screenState.currentScreen === DOMAIN_SCREEN_BACKLOG}
		{#await loadDomainBacklog() then module}
			{@const DomainBacklog = module.default}
			<DomainBacklog
				title={backlogState.title}
				path={backlogState.path}
				sourceLabel={backlogState.sourceLabel}
				saveStatus={backlogState.saveStatus}
				isFallback={backlogState.isFallback}
				lastSavedAt={backlogState.lastSavedAt}
				sprintName={backlogState.sprintName}
				backlogData={backlogState.backlogData}
				issues={backlogState.issues}
				kanbanBoard={backlogState.kanbanBoard}
				burnDownData={backlogState.burnDownData}
				loading={backlogState.loading}
				saving={backlogState.saving}
				dirty={backlogState.dirty}
				error={backlogState.error}
				onSave={() => void backlogState.save()}
				onReload={() => void backlogState.handleReload()}
				onItemAdd={backlogState.handleItemAdd}
				onItemUpdate={backlogState.handleItemUpdate}
				onItemDelete={backlogState.handleItemDelete}
				onIssuesMoveToBacklog={(items) => void backlogState.handleIssuesMoveToBacklog(items)}
				onBoardChange={backlogState.handleBoardChange}
			/>
		{/await}
	{:else if screenState.currentScreen === DOMAIN_SCREEN_DIAGNOSTICS}
		{#await loadDomainDiagnostics() then module}
			{@const DomainDiagnostics = module.default}
			<DomainDiagnostics />
		{/await}
	{:else}
		<StylistLanding rootDomainCount={tree.length} {storyModuleCount} />
	{/if}

	<div class="menu-shell">
		<DomainMenu
			landingVisible={screenState.currentScreen === DOMAIN_SCREEN_LANDING}
			domainVisible={screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
			builderOpen={screenState.currentScreen === DOMAIN_SCREEN_BUILDER}
			backlogOpen={screenState.currentScreen === DOMAIN_SCREEN_BACKLOG}
			dashboardOpen={screenState.currentScreen === DOMAIN_SCREEN_DIAGNOSTICS}
			settingsOpen={screenState.isSettingsOpen}
			onLandingToggle={screenState.handleLandingToggle}
			onDomainToggle={screenState.handleDomainToggle}
			onBuilderToggle={screenState.handleBuilderToggle}
			onBacklogToggle={() => void backlogState.handleBacklogToggle()}
			onDashboardToggle={screenState.handleDiagnosticsToggle}
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
	.c-domain-workspace-shell {
		position: relative;
		min-height: 100vh;
	}

	.menu-shell {
		position: fixed;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 20;
	}

	@media (max-width: 840px) {
		.c-domain-workspace-shell {
			padding-top: calc(env(safe-area-inset-top, 0px) + 6rem);
		}

		.menu-shell {
			top: calc(env(safe-area-inset-top, 0px) + 0.75rem);
			left: 0.75rem;
			right: 0.75rem;
		}
	}
</style>
