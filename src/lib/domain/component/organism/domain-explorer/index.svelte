<script lang="ts">
	import DomainFilePreview from '$stylist/domain/component/organism/domain-file-preview/index.svelte';
	import { DomainSidebar } from '$stylist/domain/component/organism/domain-sidebar';
	import JointTabButtons from '$stylist/domain/component/molecule/joint-tab-buttons/index.svelte';
	import TaxonomyBreadcrumbs from '$stylist/domain/component/molecule/taxonomy-breadcrumbs/index.svelte';
	import { createDomainPageState } from '$stylist/domain/function/state/domain-page/index.svelte';
	import TextInputDialog from '$stylist/input/component/organism/text-input-dialog/index.svelte';

	type DomainPageState = ReturnType<typeof createDomainPageState>;

	interface DomainExplorerProps {
		state: DomainPageState;
		class?: string;
	}

	let { state: s, class: className = '' }: DomainExplorerProps = $props();
</script>

<main class="c-domain-explorer {className}">
	<DomainSidebar
		activeDomain={s.activeDomain}
		activeCluster={s.activeCluster}
		activeJoint={s.activeJoint}
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
			<TaxonomyBreadcrumbs
				domain={s.activeDomain}
				cluster={s.activeCluster}
				joint={s.activeJoint}
				family={s.activeFamilyName}
				file={s.breadcrumbFile}
			/>

			{#if s.activeEntity}
				<JointTabButtons
					files={s.activeEntity.files}
					markdownFile={s.markdownFile}
					storyFile={s.storyFile}
					activeFilePath={s.activeFilePath}
					previewMode={s.previewMode}
					previewKind={s.previewKind}
					activeFamily={s.activeFamily}
					onFileSelect={s.handleFileSelect}
					onMarkdownSelect={s.handleMarkdownSelect}
					onStorySelect={s.handleStorySelect}
					onJsonTreeSelect={s.handleJsonTreeSelect}
					onOpenBacklog={() => void s.openBacklogDialog()}
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
				previewKind={s.previewKind}
			/>
		</div>
	</section>
</main>

<TextInputDialog
	open={s.backlogDialogOpen}
	title="Debug backlog"
	path={s.backlogPath}
	bind:value={s.backlogDraft}
	loading={s.backlogLoading}
	saving={s.backlogSaving}
	error={s.backlogError}
	placeholder="Enter backlog text for this family..."
	onClose={s.closeBacklogDialog}
	onSave={() => void s.saveBacklog()}
/>

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
	}

	.viewer {
		display: grid;
		grid-template-rows: auto auto 1fr;
		min-height: 0;
	}

	.viewer :global(.c-taxonomy-breadcrumbs) {
		width: 400px;
	}

	@media (max-width: 840px) {
		.c-domain-explorer {
			grid-template-columns: 1fr;
		}
	}
</style>
