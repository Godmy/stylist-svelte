<script lang="ts">
	import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
	import { DOMAIN_SCREEN_BUILDER } from '$stylist/domain/const/value/domain-screen-builder';
	import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
	import { DOMAIN_SCREEN_WORKSPACE } from '$stylist/domain/const/value/domain-screen-workspace';
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
	{:else if screenState.currentScreen === DOMAIN_SCREEN_WORKSPACE}
		<main class="workspace-screen">
			<header class="workspace-screen__header">
				<div class="workspace-screen__title">
					<p>workspace</p>
					<h1>Clean workspace</h1>
				</div>

				<DomainMenu
					landingVisible={false}
					domainVisible={false}
					workspaceOpen={true}
					builderOpen={false}
					backlogOpen={false}
					dashboardOpen={false}
					settingsOpen={screenState.isSettingsOpen}
					onLandingToggle={screenState.handleLandingToggle}
					onDomainToggle={screenState.handleDomainToggle}
					onWorkspaceToggle={screenState.handleWorkspaceToggle}
					onBuilderToggle={screenState.handleBuilderToggle}
					onBacklogToggle={() => void backlogState.handleBacklogToggle()}
					onDashboardToggle={screenState.handleDiagnosticsToggle}
					onSettingsToggle={screenState.handleSettingsToggle}
				/>
			</header>

			<section class="workspace-screen__content" aria-label="Clean workspace"></section>
		</main>
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

	{#if screenState.currentScreen !== DOMAIN_SCREEN_WORKSPACE}
		<div class="menu-shell">
			<DomainMenu
				landingVisible={screenState.currentScreen === DOMAIN_SCREEN_LANDING}
				domainVisible={screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
				workspaceOpen={false}
				builderOpen={screenState.currentScreen === DOMAIN_SCREEN_BUILDER}
				backlogOpen={screenState.currentScreen === DOMAIN_SCREEN_BACKLOG}
				dashboardOpen={screenState.currentScreen === DOMAIN_SCREEN_DIAGNOSTICS}
				settingsOpen={screenState.isSettingsOpen}
				onLandingToggle={screenState.handleLandingToggle}
				onDomainToggle={screenState.handleDomainToggle}
				onWorkspaceToggle={screenState.handleWorkspaceToggle}
				onBuilderToggle={screenState.handleBuilderToggle}
				onBacklogToggle={() => void backlogState.handleBacklogToggle()}
				onDashboardToggle={screenState.handleDiagnosticsToggle}
				onSettingsToggle={screenState.handleSettingsToggle}
			/>
		</div>
	{/if}
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

	.workspace-screen {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		height: 100vh;
		min-height: 0;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		overflow: hidden;
	}

	.workspace-screen__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}

	.workspace-screen__title {
		display: grid;
		gap: 0.15rem;
		min-width: 0;
	}

	.workspace-screen__title p,
	.workspace-screen__title h1,
	.workspace-screen__title span {
		margin: 0;
	}

	.workspace-screen__title p,
	.workspace-screen__title span {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
	}

	.workspace-screen__title h1 {
		font-size: 1rem;
		font-weight: 650;
	}

	.workspace-screen__content {
		min-height: 0;
		min-width: 0;
		overflow: hidden;
	}

	@media (max-width: 840px) {
		.c-domain-workspace-shell {
			padding-top: calc(env(safe-area-inset-top, 0px) + 6rem);
		}

		.c-domain-workspace-shell:has(.workspace-screen) {
			padding-top: 0;
		}

		.menu-shell {
			top: calc(env(safe-area-inset-top, 0px) + 0.75rem);
			left: 0.75rem;
			right: 0.75rem;
		}

		.workspace-screen__header {
			align-items: stretch;
			flex-direction: column;
			padding-top: calc(env(safe-area-inset-top, 0px) + 0.75rem);
		}
	}
</style>
