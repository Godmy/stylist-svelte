<script lang="ts">
	import MarkdownRenderer from '$stylist/information/component/organism/markdown-renderer/index.svelte';
	import JsonTreeViewer from '$stylist/domain/component/molecule/json-tree-viewer/index.svelte';
	import FlatTree from '$stylist/tree/component/molecule/flat-tree/index.svelte';
	import { ManagerStoryViewportContext } from '$stylist/theme/class/manager/story-viewport-context';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
	import type { TreeNode } from '$stylist/tree/type/object/tree-node';

	interface DomainDependency {
		key: string;
		depth: number;
	}

	interface DomainDependencyFile {
		name: string;
		content: string;
	}

	interface DomainFilePreviewProps {
		previewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
		fileContent?: string;
		fileLoading?: boolean;
		fileError?: string;
		storyPreviewComponent?: any;
		storyPreviewLoading?: boolean;
		storyPreviewError?: string;
		dependencyItems?: DomainDependency[];
		dependencyTreeNodes?: TreeNode[];
		selectedDependencyKey?: string;
		selectedDependencyFiles?: DomainDependencyFile[];
		dependencyLoading?: boolean;
		dependencyError?: string;
		onDependencySelect?: (key: string) => void;
		previewKind?: 'svg' | 'json' | 'text';
		storyDevice?: DeviceFrameViewport;
		class?: string;
	}

	let {
		previewMode = 'file',
		fileContent = '',
		fileLoading = false,
		fileError = '',
		storyPreviewComponent = null,
		storyPreviewLoading = false,
		storyPreviewError = '',
		dependencyItems = [],
		dependencyTreeNodes = [],
		selectedDependencyKey = '',
		selectedDependencyFiles = [],
		dependencyLoading = false,
		dependencyError = '',
		onDependencySelect,
		previewKind = 'text',
		storyDevice = $bindable('fullscreen'),
		class: className = ''
	}: DomainFilePreviewProps = $props();

	ManagerStoryViewportContext.set(() => storyDevice);

	const renderedContent = $derived.by(() => {
		if (previewKind !== 'json') return fileContent;
		try {
			return JSON.stringify(JSON.parse(fileContent), null, 2);
		} catch {
			return fileContent;
		}
	});
</script>

<div class="c-domain-file-preview {className}">
	{#if previewMode === 'story' && storyPreviewLoading}
		<p class="empty-state">Loading playground...</p>
	{:else if previewMode === 'story' && storyPreviewError}
		<p class="empty-state">{storyPreviewError}</p>
	{:else if previewMode === 'story' && storyPreviewComponent}
		{@const StoryPreviewComponent = storyPreviewComponent}
		<div class="story-preview-shell">
			<StoryPreviewComponent />
		</div>
	{:else if fileLoading}
		<p class="empty-state">Loading preview...</p>
	{:else if fileError}
		<p class="empty-state">{fileError}</p>
	{:else if previewMode === 'markdown' && fileContent}
		<div class="markdown-preview">
			<MarkdownRenderer content={fileContent} />
		</div>
	{:else if previewMode === 'json-tree' && fileContent}
		<JsonTreeViewer content={fileContent} />
	{:else if previewMode === 'di'}
		<div class="dependency-preview">
			<aside class="dependency-list" aria-label="Dependency list">
				<div class="dependency-list__header">
					<span>DI</span>
					<span>{dependencyItems.length}</span>
				</div>
				{#if dependencyLoading && dependencyItems.length === 0}
					<p class="dependency-empty">Loading dependencies...</p>
				{:else if dependencyError}
					<p class="dependency-empty">{dependencyError}</p>
				{:else if dependencyItems.length === 0}
					<p class="dependency-empty">No dependencies found for this component.</p>
				{:else}
					<FlatTree
						nodes={dependencyTreeNodes}
						selectedId={selectedDependencyKey}
						onSelect={(node) => onDependencySelect?.(node.id)}
						class="dependency-tree"
					/>
				{/if}
			</aside>
			<section class="dependency-detail" aria-label="Dependency source">
				{#if dependencyLoading && selectedDependencyFiles.length === 0}
					<p class="empty-state">Loading source...</p>
				{:else if dependencyError}
					<p class="empty-state">{dependencyError}</p>
				{:else if selectedDependencyFiles.length === 0}
					<p class="empty-state">Select a dependency to preview source.</p>
				{:else}
					<div class="dependency-detail__title">{selectedDependencyKey}</div>
					{#each selectedDependencyFiles as file (file.name)}
						<div class="dependency-source">
							<div class="dependency-source__name">{file.name}</div>
							<pre><code>{file.content}</code></pre>
						</div>
					{/each}
				{/if}
			</section>
		</div>
	{:else if fileContent && previewKind === 'svg'}
		<div class="svg-preview">
			<div class="svg-art">
				{@html fileContent}
			</div>
			<pre><code>{fileContent}</code></pre>
		</div>
	{:else if fileContent}
		<pre class:json-content={previewKind === 'json'}><code>{renderedContent}</code></pre>
	{:else}
		<p class="empty-state">Select an entity with files to preview content.</p>
	{/if}
</div>

<style>
	.c-domain-file-preview {
		min-height: 0;
		overflow: auto;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.svg-preview {
		display: grid;
		grid-template-rows: minmax(180px, 34vh) auto;
		min-height: 100%;
	}

	.markdown-preview,
	.story-preview-shell {
		min-height: 100%;
		padding: 1rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.story-preview-shell {
		/* Previewed stories can use any z-index for their own internal layering
		   (overlays, panels, dropdowns). Without a stacking context boundary here,
		   those z-indexes compete directly with the shell's own fixed chrome
		   (e.g. the top-right DomainMenu, z-index: 20) and can paint over it. */
		position: relative;
		isolation: isolate;
	}

	.svg-art {
		display: grid;
		place-items: center;
		padding: 1.25rem;
		background:
			linear-gradient(45deg, var(--color-background-secondary) 25%, transparent 25%),
			linear-gradient(-45deg, var(--color-background-secondary) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, var(--color-background-secondary) 75%),
			linear-gradient(-45deg, transparent 75%, var(--color-background-secondary) 75%),
			var(--color-background-primary);
		background-position:
			0 0,
			0 8px,
			8px -8px,
			-8px 0;
		background-size: 16px 16px;
		border-bottom: 1px solid var(--color-border-primary);
		color: var(--color-text-primary);
	}

	.svg-art :global(svg) {
		width: min(220px, 60%);
		height: min(220px, 60%);
		max-width: 100%;
		max-height: 100%;
	}

	pre {
		margin: 0;
		padding: 1rem;
		tab-size: 2;
		white-space: pre-wrap;
		word-break: break-word;
		font-size: 12px;
		line-height: 1.55;
	}

	.json-content {
		white-space: pre;
	}

	.empty-state {
		padding: 1rem;
		color: var(--color-text-secondary);
		font-size: 13px;
	}

	.dependency-preview {
		display: grid;
		grid-template-columns: minmax(220px, 32%) minmax(0, 1fr);
		min-height: 100%;
		background: var(--color-background-primary);
	}

	.dependency-list {
		min-width: 0;
		border-right: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		overflow: auto;
	}

	.dependency-list__header {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.65rem 0.75rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 12px;
	}

	.dependency-list :global(.dependency-tree) {
		padding: 0.35rem;
		font-family: var(--font-mono, monospace);
		font-size: 12px;
		line-height: 1.35;
	}

	.dependency-detail {
		min-width: 0;
		overflow: auto;
	}

	.dependency-detail__title,
	.dependency-source__name {
		position: sticky;
		top: 0;
		z-index: 1;
		padding: 0.65rem 1rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 12px;
		word-break: break-word;
	}

	.dependency-source__name {
		position: static;
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.dependency-empty {
		margin: 0;
		padding: 0.75rem;
		color: var(--color-text-secondary);
		font-size: 12px;
	}

	@media (max-width: 760px) {
		.dependency-preview {
			grid-template-columns: 1fr;
		}

		.dependency-list {
			max-height: 15rem;
			border-right: none;
			border-bottom: 1px solid var(--color-border-primary);
		}
	}
</style>
