<script lang="ts">
	import DomainFilePreview from '$stylist/domain/component/organism/domain-file-preview/index.svelte';
	import DomainSearch from '$stylist/domain/component/molecule/domain-search/index.svelte';
	import DomainSidebar from '$stylist/domain/component/organism/domain-sidebar/index.svelte';
	import JointTabButtons from '$stylist/domain/component/molecule/joint-tab-buttons/index.svelte';
	import TaxonomyBreadcrumbs from '$stylist/domain/component/molecule/taxonomy-breadcrumbs/index.svelte';
	import createDomainPageState from './state.svelte';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';

	type StoryModule = { default: unknown };
	type DomainTree = Parameters<typeof createDomainPageState>[0]['tree'];

	interface DomainExplorerProps {
		tree: DomainTree;
		initialDomain?: string;
		initialCluster?: string;
		initialJoint?: string;
		initialPreviewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
		onSelectionChange?: (selection: {
			domain: string;
			cluster: string;
			joint: string;
			family: string;
			entityPath: string;
			files: { name: string; path: string }[];
		}) => void;
		storyDevice?: DeviceFrameViewport;
		deviceViewportVisible?: boolean;
		class?: string;
	}

	const storyModules = import.meta.glob('/src/lib/**/component/**/index.story.svelte') as Record<
		string,
		() => Promise<StoryModule>
	>;

	let {
		tree,
		initialDomain,
		initialCluster,
		initialJoint,
		initialPreviewMode,
		onSelectionChange,
		storyDevice = $bindable('fullscreen'),
		deviceViewportVisible = $bindable(false),
		class: className = ''
	}: DomainExplorerProps = $props();

	const s = createDomainPageState({
		tree,
		storyModules,
		initialDomain,
		initialCluster,
		initialJoint,
		initialPreviewMode
	});

	$effect(() => {
		onSelectionChange?.({
			domain: s.activeDomain,
			cluster: s.activeCluster,
			joint: s.activeJoint,
			family: s.activeFamily,
			entityPath: s.activeEntityPath,
			files: s.activeEntity?.files ?? []
		});
	});

	$effect(() => {
		deviceViewportVisible = s.previewMode === 'story' && !!s.storyPreviewComponent;
	});

</script>

<main class="c-domain-explorer {className}">
	<DomainSidebar
		activeDomain={s.activeDomain}
		activeCluster={s.activeCluster}
		activeJoint={s.activeJoint}
		availableDomains={s.availableDomainNames}
		availableJoints={s.availableJointNames}
		entities={s.entities}
		activeEntityPath={s.activeEntityPath}
		onDomainSelect={s.handleDomainSelect}
		onClusterSelect={s.handleClusterSelect}
		onJointSelect={s.handleJointSelect}
		onEntitySelect={s.handleEntitySelect}
	/>

	<section class="content-panel" aria-label="Content viewer">
		<div class="viewer">
			<div class="taxonomy-row">
				<TaxonomyBreadcrumbs
					domain={s.activeDomain}
					cluster={s.activeCluster}
					joint={s.activeJoint}
					family={s.activeFamilyName}
					file={s.breadcrumbFile}
				/>
				<DomainSearch
					entries={s.searchEntries}
					currentPath={[
						s.activeDomain,
						s.activeCluster,
						s.activeJoint,
						s.activeFamilyName,
						s.breadcrumbFile
					]
						.filter(Boolean)
						.join('\\')}
					onSelect={s.selectSearchEntry}
				/>
			</div>

			{#if s.activeEntity}
				<JointTabButtons
					files={s.activeEntity.files}
					markdownFile={s.markdownFile}
					storyFile={s.storyFile}
					selectedEntityName={s.activeFamily}
					activeFilePath={s.activeFilePath}
					previewMode={s.previewMode}
					previewKind={s.previewKind}
					activeJoint={s.activeJoint}
					hasDependencyPreview={s.hasDependencyPreview}
					onFileSelect={s.handleFileSelect}
					onMarkdownSelect={s.handleMarkdownSelect}
					onStorySelect={s.handleStorySelect}
					onJsonTreeSelect={s.handleJsonTreeSelect}
					onDependencySelect={() => s.handleDependencySelect()}
				/>
			{/if}

			<DomainFilePreview
				previewMode={s.previewMode}
				fileContent={s.fileContent}
				fileLoading={s.fileLoading}
				fileError={s.fileError}
				storyPreviewComponent={s.storyPreviewComponent}
				storyPreviewLoading={s.storyPreviewLoading}
				storyPreviewError={s.storyPreviewError}
				dependencyItems={s.dependencyItems}
				dependencyTreeNodes={s.dependencyTreeNodes}
				selectedDependencyKey={s.selectedDependencyKey}
				selectedDependencyFiles={s.selectedDependencyFiles}
				dependencyLoading={s.dependencyLoading}
				dependencyError={s.dependencyError}
				onDependencySelect={s.handleDependencySelect}
				previewKind={s.previewKind}
				bind:storyDevice
			/>
		</div>
	</section>
</main>

<style>
	.c-domain-explorer {
		display: grid;
		grid-template-columns: 249px minmax(0, 1fr);
		min-height: 100vh;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.content-panel {
		display: grid;
		min-width: 0;
		overflow-x: hidden;
	}

	.viewer {
		display: grid;
		grid-template-rows: auto auto 1fr;
		min-height: 0;
		overflow-x: hidden;
	}

	.taxonomy-row {
		display: inline-grid;
		grid-template-columns: minmax(0, 500px) auto;
		align-items: center;
		gap: 15px;
		min-width: 0;
		justify-self: start;
		max-width: 100%;
	}

	.taxonomy-row :global(.c-taxonomy-breadcrumbs) {
		width: 500px;
		max-width: 100%;
		min-width: 0;
	}

	.taxonomy-row :global(.c-domain-search) {
		flex-shrink: 0;
		--domain-search-overlay-width: 510px;
	}

	@media (max-width: 840px) {
		.c-domain-explorer {
			grid-template-columns: 1fr;
		}
	}
</style>
