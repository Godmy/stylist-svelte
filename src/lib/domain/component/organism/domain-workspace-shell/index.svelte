<script lang="ts">
	import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
	import { DOMAIN_SCREEN_BUILDER } from '$stylist/domain/const/value/domain-screen-builder';
	import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
	import { DOMAIN_SCREEN_WORKSPACE } from '$stylist/domain/const/value/domain-screen-workspace';
	import DomainMenu from '$stylist/domain/component/molecule/domain-menu/index.svelte';
	import Workspace from '$stylist/workspace/component/organism/workspace/index.svelte';
	import createDomainBacklogState from '$stylist/domain/function/state/domain-backlog/index.svelte';
	import createDomainLandingScreenState from '$stylist/domain/function/state/domain-landing-screen/index.svelte';
	import StylistLanding from '$stylist/marketing/component/organism/stylist-landing/index.svelte';
	import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/struct/domain-component-descriptor';
	import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';
	import type { TypeDomainTreeNode } from '$stylist/domain/type/struct/domain-tree-node';
	import type { SlotNodeConnection } from '$stylist/workspace/interface/slot/node-connection';
	import type { SlotWorkspaceNode } from '$stylist/workspace/interface/slot/workspace-node';

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
	const WORKSPACE_NODE_HEADER_HEIGHT = 40;
	const WORKSPACE_NODE_PORT_ROW_HEIGHT = 32;
	const backlogState = createDomainBacklogState({
		getDomain: () => activeDomain,
		getFamily: () => activeFamily,
		onOpen: screenState.openBacklogScreen
	});
	let workspaceNodes = $state<SlotWorkspaceNode[]>([
		{
			id: 'workspace-source',
			title: 'Source',
			type: 'source',
			x: 120,
			y: 110,
			color: 'var(--color-success-500)',
			outputs: [{ id: 'workspace-source-output', direction: 'output', dataType: 'object', label: 'Data' }],
			properties: [
				{ id: 'source-url', name: 'url', type: 'string', value: '/api/source', label: 'URL' },
				{ id: 'source-cache', name: 'cache', type: 'boolean', value: true, label: 'Cache' }
			]
		},
		{
			id: 'workspace-processor',
			title: 'Processor',
			type: 'processor',
			x: 440,
			y: 170,
			color: 'var(--color-secondary-500)',
			inputs: [{ id: 'workspace-processor-input', direction: 'input', dataType: 'object', label: 'Input' }],
			outputs: [{ id: 'workspace-processor-output', direction: 'output', dataType: 'object', label: 'Result' }],
			properties: [
				{ id: 'processor-mode', name: 'mode', type: 'enum', value: 'merge', label: 'Mode', options: ['merge', 'filter', 'map'] },
				{ id: 'processor-limit', name: 'limit', type: 'number', value: 100, label: 'Limit' }
			]
		},
		{
			id: 'workspace-output',
			title: 'Output',
			type: 'output',
			x: 760,
			y: 110,
			color: 'var(--color-warning-500)',
			inputs: [{ id: 'workspace-output-input', direction: 'input', dataType: 'object', label: 'Result' }],
			properties: [{ id: 'output-format', name: 'format', type: 'string', value: 'json', label: 'Format' }]
		}
	]);
	let workspaceConnections = $state<SlotNodeConnection[]>([
		{
			id: 'workspace-source-processor',
			fromNodeId: 'workspace-source',
			toNodeId: 'workspace-processor',
			fromPort: 'workspace-source-output',
			toPort: 'workspace-processor-input',
			startX: 320,
			startY: 166,
			endX: 440,
			endY: 226,
			type: 'bezier',
			color: 'var(--color-primary-500)',
			active: true
		},
		{
			id: 'workspace-processor-output',
			fromNodeId: 'workspace-processor',
			toNodeId: 'workspace-output',
			fromPort: 'workspace-processor-output',
			toPort: 'workspace-output-input',
			startX: 640,
			startY: 226,
			endX: 760,
			endY: 166,
			type: 'bezier',
			color: 'var(--color-primary-500)',
			active: true
		}
	]);
	let selectedWorkspaceNodeIds = $state<string[]>(['workspace-processor']);
	let workspaceZoom = $state(1);
	let workspaceOffset = $state({ x: 0, y: 0 });

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

	function handleWorkspaceNodeSelect(nodeId: string) {
		selectedWorkspaceNodeIds = nodeId ? [nodeId] : [];
	}

	function getWorkspacePortAnchor(
		node: SlotWorkspaceNode,
		direction: 'input' | 'output',
		portId: string | undefined
	): { x: number; y: number } {
		const ports = direction === 'input' ? (node.inputs ?? []) : (node.outputs ?? []);
		const index = Math.max(
			0,
			ports.findIndex((port) => port.id === portId)
		);
		const width = node.width ?? 200;
		const x = (node.x ?? 0) + (direction === 'input' ? 0 : width);
		const y =
			(node.y ?? 0) +
			WORKSPACE_NODE_HEADER_HEIGHT +
			index * WORKSPACE_NODE_PORT_ROW_HEIGHT +
			WORKSPACE_NODE_PORT_ROW_HEIGHT / 2;
		return { x, y };
	}

	function updateWorkspaceConnectionsForNode(nodeId: string) {
		const node = workspaceNodes.find((candidate) => candidate.id === nodeId);
		if (!node) return;

		workspaceConnections = workspaceConnections.map((connection) => {
			if (connection.fromNodeId === nodeId) {
				const anchor = getWorkspacePortAnchor(node, 'output', connection.fromPort);
				return { ...connection, startX: anchor.x, startY: anchor.y };
			}

			if (connection.toNodeId === nodeId) {
				const anchor = getWorkspacePortAnchor(node, 'input', connection.toPort);
				return { ...connection, endX: anchor.x, endY: anchor.y };
			}

			return connection;
		});
	}

	function handleWorkspaceNodeDrag(nodeId: string, position: { x: number; y: number }) {
		workspaceNodes = workspaceNodes.map((node) =>
			node.id === nodeId ? { ...node, x: position.x, y: position.y } : node
		);
		updateWorkspaceConnectionsForNode(nodeId);
	}

	function handleWorkspaceNodeAdd(node: SlotWorkspaceNode) {
		workspaceNodes = [...workspaceNodes, node];
	}

	function handleWorkspaceNodeDelete(nodeId: string) {
		workspaceNodes = workspaceNodes.filter((node) => node.id !== nodeId);
		workspaceConnections = workspaceConnections.filter(
			(connection) => connection.fromNodeId !== nodeId && connection.toNodeId !== nodeId
		);
		selectedWorkspaceNodeIds = selectedWorkspaceNodeIds.filter((id) => id !== nodeId);
	}

	function handleWorkspaceNodeDuplicate(nodeId: string) {
		const source = workspaceNodes.find((node) => node.id === nodeId);
		if (!source) return;

		const id = `${nodeId}-copy-${Date.now()}`;
		workspaceNodes = [
			...workspaceNodes,
			{ ...source, id, x: (source.x ?? 0) + 36, y: (source.y ?? 0) + 36 }
		];
	}

	function handleWorkspacePropertyChange(nodeId: string, propertyId: string, value: unknown) {
		workspaceNodes = workspaceNodes.map((node) =>
			node.id === nodeId
				? {
						...node,
						properties: (node.properties ?? []).map((property) =>
							property.id === propertyId ? { ...property, value } : property
						)
					}
				: node
		);
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
			<Workspace
				nodes={workspaceNodes}
				connections={workspaceConnections}
				selectedNodeIds={selectedWorkspaceNodeIds}
				zoom={workspaceZoom}
				offset={workspaceOffset}
				showToolbar={true}
				showMiniMap={false}
				showWorkspacePalette={false}
				showPropertiesPanel={true}
				showGrid={true}
				allowAddNodes={true}
				allowDeleteNodes={true}
				allowDuplicateNodes={true}
				onNodeSelect={handleWorkspaceNodeSelect}
				onNodeDrag={handleWorkspaceNodeDrag}
				onNodeAdd={handleWorkspaceNodeAdd}
				onNodeDelete={handleWorkspaceNodeDelete}
				onNodeDuplicate={handleWorkspaceNodeDuplicate}
				onPropertyChange={handleWorkspacePropertyChange}
				onZoomChange={(next: number) => (workspaceZoom = next)}
				onOffsetChange={(next: { x: number; y: number }) => (workspaceOffset = next)}
			/>
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

	<div class="menu-shell">
		<DomainMenu
			landingVisible={screenState.currentScreen === DOMAIN_SCREEN_LANDING}
			domainVisible={screenState.currentScreen === DOMAIN_SCREEN_DOMAIN}
			workspaceOpen={screenState.currentScreen === DOMAIN_SCREEN_WORKSPACE}
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
		height: 100vh;
		min-height: 0;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
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

	}
</style>
