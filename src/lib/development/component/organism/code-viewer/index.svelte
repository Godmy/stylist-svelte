<script lang="ts">
	import type { RecipeCodeViewer } from '$stylist/development/interface/recipe/code-viewer';
	import { onMount } from 'svelte';
	import { createCodeViewerState } from '$stylist/development/function/state/code-viewer/index.svelte';
	let props: RecipeCodeViewer = $props();
	const state = createCodeViewerState(props);
	let highlightSequence = 0;

	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			state.darkMode = true;
		}

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) => {
			state.darkMode = e.matches;
		};
		media.addEventListener('change', handler);

		return () => media.removeEventListener('change', handler);
	});

	$effect(() => {
		state.currentTheme = state.darkMode ? 'github-dark' : 'github-light';
	});

	$effect(() => {
		const codeSnippet = state.generatedCode;
		const lang = state.currentLanguage;
		const activeTheme = state.currentTheme;
		const requestId = ++highlightSequence;
		state.highlightCode(codeSnippet, lang, activeTheme, requestId);
	});
</script>

<div class="pcv-wrap">
	<div class="pcv-tabs">
		<div class="pcv-tabs-left">
			<span class="pcv-lang-badge">Svelte 5</span>
			<span class="pcv-lang-label">Component Code</span>
		</div>
	</div>

	<div class="pcv-toolbar">
		<div class="pcv-toolbar-info">
			{state.currentLanguage} • {state.generatedCode.split('\n').length} lines
			{#if state.componentName}
				• Dynamic generation
			{/if}
		</div>
		<div class="pcv-toolbar-btns">
			<button onclick={state.copyCode} class="pcv-btn" title="Copy code">Copy</button>
			<button onclick={state.downloadCode} class="pcv-btn" title="Download file">Download</button>
		</div>
	</div>

	<div class="pcv-content">
		{#if state.isLoading}
			<div class="pcv-loading">Loading highlighted code...</div>
		{:else if state.highlightedCode}
			{@html state.highlightedCode}
		{:else}
			<div class="pcv-empty">No code to display</div>
		{/if}
	</div>
</div>

<style>
	.pcv-wrap {
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid #e5e7eb;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-wrap {
			border-color: #374151;
		}
	}
	.pcv-tabs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e5e7eb;
		background: #f9fafb;
		padding: 0.5rem 1rem;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-tabs {
			border-color: #374151;
			background: #1f2937;
		}
	}
	.pcv-tabs-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.pcv-lang-badge {
		border-radius: 0.25rem;
		background: #ffedd5;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: #c2410c;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-lang-badge {
			background: rgb(124 45 18 / 0.3);
			color: #fb923c;
		}
	}
	.pcv-lang-label {
		font-size: 0.75rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-lang-label {
			color: #9ca3af;
		}
	}
	.pcv-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e5e7eb;
		background: #f3f4f6;
		padding: 0.5rem;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-toolbar {
			border-color: #374151;
			background: #1f2937;
		}
	}
	.pcv-toolbar-info {
		font-size: 0.75rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-toolbar-info {
			color: #9ca3af;
		}
	}
	.pcv-toolbar-btns {
		display: flex;
		gap: 0.5rem;
	}
	.pcv-btn {
		border-radius: 0.25rem;
		background: #e5e7eb;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		color: #1f2937;
		border: none;
		cursor: pointer;
		transition: background-color 0.15s;
	}
	.pcv-btn:hover {
		background: #d1d5db;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-btn {
			background: #374151;
			color: #e5e7eb;
		}
		.pcv-btn:hover {
			background: #4b5563;
		}
	}
	.pcv-content {
		max-height: 24rem;
		overflow: auto;
	}
	.pcv-loading {
		padding: 1rem;
		text-align: center;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-loading {
			color: #9ca3af;
		}
	}
	.pcv-empty {
		padding: 1rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pcv-empty {
			color: #9ca3af;
		}
	}
</style>
