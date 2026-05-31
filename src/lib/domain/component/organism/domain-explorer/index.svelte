<script lang="ts">
	import DomainFilePreview from '$stylist/domain/component/organism/domain-file-preview/index.svelte';
	import DomainSearch from '$stylist/domain/component/molecule/domain-search/index.svelte';
	import { DOMAIN_COMPONENT_DEBUG_ERROR } from '$stylist/domain/const/object/error';
	import { DomainSidebar } from '$stylist/domain/component/organism/domain-sidebar';
	import JointTabButtons from '$stylist/domain/component/molecule/joint-tab-buttons/index.svelte';
	import TaxonomyBreadcrumbs from '$stylist/domain/component/molecule/taxonomy-breadcrumbs/index.svelte';
	import { createDomainPageState } from '$stylist/domain/function/state/domain-page/index.svelte';
	import TextInputDialog from '$stylist/input/component/organism/text-input-dialog/index.svelte';

	type DomainPageState = ReturnType<typeof createDomainPageState>;

	type DebugMenuItem = {
		id: string;
		label: string;
		disabled?: boolean;
		onSelect?: () => void;
	};

	interface DomainExplorerProps {
		state: DomainPageState;
		class?: string;
	}

	let { state: s, class: className = '' }: DomainExplorerProps = $props();

	const isComponentJoint = $derived.by(
		() =>
			s.activeCluster === 'component' &&
			(s.activeJoint === 'atom' || s.activeJoint === 'molecule' || s.activeJoint === 'organism')
	);

	function buildIssueText(baseText: string): string {
		const family = s.activeFamily || 'component';
		return baseText ? `${baseText} for ${family}` : `review ${family}`;
	}

	function openBacklogNote(title: string, issue: string): void {
		s.openIssueDialog({
			title,
			text: s.createIssueText(buildIssueText(issue))
		});
	}

	const debugMenuItems = $derived.by<DebugMenuItem[]>(() => {
		if (!s.activeEntity) {
			return [];
		}

		const items: DebugMenuItem[] = [];

		if (isComponentJoint && !s.storyFile) {
			items.push({
				id: 'add-component-story',
				label: 'Add component story',
				onSelect: () =>
					openBacklogNote(
						DOMAIN_COMPONENT_DEBUG_ERROR.addComponentStory.title,
						DOMAIN_COMPONENT_DEBUG_ERROR.addComponentStory.text
					)
			});
		}

		if (isComponentJoint && s.storyFile) {
			items.push(
				{
					id: 'story-hangs',
					label: 'Story hangs on open',
					onSelect: () =>
						openBacklogNote(
							DOMAIN_COMPONENT_DEBUG_ERROR.storyHangsOnOpen.title,
							DOMAIN_COMPONENT_DEBUG_ERROR.storyHangsOnOpen.text
						)
				},
				{
					id: 'story-visual',
					label: 'Story looks wrong',
					onSelect: () =>
						openBacklogNote(
							DOMAIN_COMPONENT_DEBUG_ERROR.storyLooksWrong.title,
							DOMAIN_COMPONENT_DEBUG_ERROR.storyLooksWrong.text
						)
				},
				{
					id: 'settings-visual',
					label: 'Settings look wrong',
					onSelect: () =>
						openBacklogNote(
							DOMAIN_COMPONENT_DEBUG_ERROR.settingsLookWrong.title,
							DOMAIN_COMPONENT_DEBUG_ERROR.settingsLookWrong.text
						)
				},
				{
					id: 'missing-functionality',
					label: 'Functionality is missing',
					onSelect: () =>
						openBacklogNote(
							DOMAIN_COMPONENT_DEBUG_ERROR.functionalityMissing.title,
							DOMAIN_COMPONENT_DEBUG_ERROR.functionalityMissing.text
						)
				},
				{
					id: 'theme-support',
					label: 'Theme support is broken',
					onSelect: () =>
						openBacklogNote(
							DOMAIN_COMPONENT_DEBUG_ERROR.themeSupportBroken.title,
							DOMAIN_COMPONENT_DEBUG_ERROR.themeSupportBroken.text
						)
				}
			);
		}

		if (isComponentJoint) {
			items.push({
				id: 'component-behavior',
				label: 'Component works incorrectly',
				onSelect: () =>
					openBacklogNote(
						DOMAIN_COMPONENT_DEBUG_ERROR.componentWorksIncorrectly.title,
						DOMAIN_COMPONENT_DEBUG_ERROR.componentWorksIncorrectly.text
					)
			});
		}

		items.push({
			id: 'custom-note',
			label: 'Add custom note',
			onSelect: () =>
				openBacklogNote(
					DOMAIN_COMPONENT_DEBUG_ERROR.customNote.title,
					DOMAIN_COMPONENT_DEBUG_ERROR.customNote.text
				)
		});

		return items;
	});
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
			<div class="taxonomy-row">
				<TaxonomyBreadcrumbs
					domain={s.activeDomain}
					cluster={s.activeCluster}
					joint={s.activeJoint}
					family={s.activeFamilyName}
					file={s.breadcrumbFile}
				/>
				<DomainSearch entries={s.searchEntries} onSelect={s.selectSearchEntry} />
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
					{debugMenuItems}
					onFileSelect={s.handleFileSelect}
					onMarkdownSelect={s.handleMarkdownSelect}
					onStorySelect={s.handleStorySelect}
					onJsonTreeSelect={s.handleJsonTreeSelect}
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
	title={s.backlogDialogTitle}
	path={s.backlogPath}
	bind:value={s.backlogDraft}
	loading={s.backlogLoading}
	saving={s.backlogSaving}
	error={s.backlogError}
	placeholder={s.backlogDialogPlaceholder}
	onClose={s.closeIssueDialog}
	onSave={() => void s.saveIssue()}
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
