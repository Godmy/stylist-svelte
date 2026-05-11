<script lang="ts">
	import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
	import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
	import DomainMenu from '$stylist/domain/component/molecule/domain-menu/index.svelte';
	import DomainBacklog from '$stylist/domain/component/organism/domain-backlog/index.svelte';
	import DomainDiagnostics from '$stylist/domain/component/organism/domain-diagnostics/index.svelte';
	import DomainExplorer from '$stylist/domain/component/organism/domain-explorer/index.svelte';
	import DomainLanding from '$stylist/domain/component/organism/domain-landing/index.svelte';
	import DomainSettings from '$stylist/domain/component/organism/domain-settings/index.svelte';
	import { createDomainBacklogPreviewState } from '$stylist/domain/function/state/domain-backlog-preview/index.svelte';
	import { createDomainLandingScreenState } from '$stylist/domain/function/state/domain-landing-screen/index.svelte';
	import { createDomainPageState } from '$stylist/domain/function/state/domain-page/index.svelte';
	import type { TypeDomainTreeNode } from '$stylist/domain/type/struct/domain-tree-node';
	import type { TypeStoryModule } from '$stylist/domain/type/struct/story-module';

	let {
		tree = [],
		storyModules = {},
		class: className = ''
	}: {
		tree?: TypeDomainTreeNode[];
		storyModules?: Record<string, () => Promise<TypeStoryModule>>;
		class?: string;
	} = $props();

	const pageState = createDomainPageState({ tree, storyModules });
	const screenState = createDomainLandingScreenState();
	const backlogState = createDomainBacklogPreviewState({
		getPath: () => pageState.backlogPath,
		onOpen: screenState.openBacklogScreen
	});
</script>

<div class="c-domain-workspace-shell {className}">
	{#if screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
		<DomainExplorer state={pageState} />
	{:else if screenState.currentScreen === DOMAIN_SCREEN_BACKLOG}
		<DomainBacklog
			title="Domain backlog"
			path={pageState.backlogPath}
			content={backlogState.content}
			loading={backlogState.loading}
			error={backlogState.error}
		/>
	{:else if screenState.currentScreen === DOMAIN_SCREEN_DIAGNOSTICS}
		<DomainDiagnostics />
	{:else}
		<DomainLanding
			rootDomainCount={tree.length}
			storyModuleCount={Object.keys(storyModules).length}
		/>
	{/if}

	<div class="menu-shell">
		<DomainMenu
			landingVisible={screenState.currentScreen === DOMAIN_SCREEN_LANDING}
			domainVisible={screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
			backlogOpen={screenState.currentScreen === DOMAIN_SCREEN_BACKLOG}
			dashboardOpen={screenState.currentScreen === DOMAIN_SCREEN_DIAGNOSTICS}
			settingsOpen={screenState.isSettingsOpen}
			onLandingToggle={screenState.handleLandingToggle}
			onDomainToggle={screenState.handleDomainToggle}
			onBacklogToggle={() => void backlogState.handleBacklogToggle()}
			onDashboardToggle={screenState.handleDiagnosticsToggle}
			onSettingsToggle={screenState.handleSettingsToggle}
		/>
	</div>
</div>

<DomainSettings open={screenState.isSettingsOpen} onClose={screenState.closeSettings} />

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
