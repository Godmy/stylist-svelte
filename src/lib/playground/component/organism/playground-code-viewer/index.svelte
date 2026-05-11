<script lang="ts">
	import { onMount } from 'svelte';
	import { createPlaygroundCodeViewerState } from '$stylist/playground/function/state/playground-code-viewer';
	import type { PlaygroundCodeViewerProps } from '$stylist/playground/type/struct/playground-code-viewer-props';
	let props: PlaygroundCodeViewerProps = $props();
	const state = createPlaygroundCodeViewerState(props);
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

<div class="code-viewer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
	<div
		class="code-tabs flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="flex items-center gap-2">
			<span
				class="rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
			>
				Svelte 5
			</span>
			<span class="text-xs text-gray-500 dark:text-gray-400"> Component Code </span>
		</div>
	</div>

	<div
		class="code-toolbar flex items-center justify-between border-b border-gray-200 bg-gray-100 p-2 dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="text-xs text-gray-500 dark:text-gray-400">
			{state.currentLanguage} • {state.generatedCode.split('\n').length} lines
			{#if state.componentName}
				• Dynamic generation
			{/if}
		</div>
		<div class="flex space-x-2">
			<button
				onclick={state.copyCode}
				class="rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
				title="Copy code"
			>
				Copy
			</button>
			<button
				onclick={state.downloadCode}
				class="rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
				title="Download file"
			>
				Download
			</button>
		</div>
	</div>

	<div class="code-content max-h-96 overflow-auto">
		{#if state.isLoading}
			<div class="p-4 text-center text-gray-500 dark:text-gray-400">
				Loading highlighted code...
			</div>
		{:else if state.highlightedCode}
			{@html state.highlightedCode}
		{:else}
			<div class="p-4 text-gray-500 dark:text-gray-400">No code to display</div>
		{/if}
	</div>
</div>
