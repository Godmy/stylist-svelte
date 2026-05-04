<script lang="ts">
	import PlaygroundMarkdownRenderer from '$stylist/playground/component/organism/playground-markdown-renderer/index.svelte';
	import JsonTreeViewer from '$stylist/domain/component/molecule/json-tree-viewer/index.svelte';

	interface DomainFilePreviewProps {
		previewMode?: 'file' | 'markdown' | 'story' | 'json-tree';
		fileContent?: string;
		fileLoading?: boolean;
		fileError?: string;
		storyPreviewComponent?: any;
		storyPreviewLoading?: boolean;
		storyPreviewError?: string;
		previewKind?: 'svg' | 'json' | 'text';
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
		previewKind = 'text',
		class: className = ''
	}: DomainFilePreviewProps = $props();

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
			<PlaygroundMarkdownRenderer content={fileContent} />
		</div>
	{:else if previewMode === 'json-tree' && fileContent}
		<JsonTreeViewer content={fileContent} />
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
</style>
