<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundEnhancedExportPanelState } from '$stylist/playground/function/state/playground-enhanced-export-panel';
	import type { PlaygroundEnhancedExportPanelProps } from '$stylist/playground/type/struct/playground-enhanced-export-panel-props';
	const FileCode = 'file-code';
	const Download = 'download';
	const Copy = 'copy';
	const CheckCircle = 'check-circle';
	const Code2 = 'code-2';
	const ExternalLink = 'external-link';
	const Package = 'package';
	const Terminal = 'terminal';

	let props: PlaygroundEnhancedExportPanelProps = $props();
	const state = createPlaygroundEnhancedExportPanelState(props);
</script>

<div
	class="export-panel h-full overflow-auto bg-gradient-to-b from-white to-gray-50 p-6 dark:from-gray-800 dark:to-gray-900"
>
	<!-- Header -->
	<div class="mb-6">
		<h3
			class="mb-2 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent dark:from-orange-400 dark:via-red-400 dark:to-purple-400"
		>
			Export Component
		</h3>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Generate Svelte code, open online editors, or install via npm
		</p>
	</div>

	<!-- Code preview -->
	<div class="mb-6">
		<div class="mb-3 flex items-center justify-between">
			<h3 class="block text-xs font-bold text-gray-700 dark:text-gray-300">
				Code Preview (Svelte)
			</h3>
			<div class="flex gap-2">
				<button
					onclick={state.copyCode}
					class="group flex items-center gap-1.5 rounded-lg border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm transition-all hover:scale-105 hover:from-green-100 hover:to-emerald-100 hover:shadow-md active:scale-95 dark:border-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300 dark:hover:from-green-800/40 dark:hover:to-emerald-800/40"
				>
					{#if state.copySuccess}
						<BaseIcon name={CheckCircle} class="h-3.5 w-3.5" />
						Copied!
					{:else}
						<BaseIcon name={Copy} class="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
						Copy
					{/if}
				</button>
				<button
					onclick={state.downloadCode}
					class="group flex items-center gap-1.5 rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition-all hover:scale-105 hover:from-blue-100 hover:to-indigo-100 hover:shadow-md active:scale-95 dark:border-blue-800 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40"
				>
					<BaseIcon
						name={Download}
						class="h-3.5 w-3.5 transition-transform group-hover:translate-y-1"
					/>
					Download
				</button>
			</div>
		</div>

		<div
			class="relative overflow-hidden rounded-xl border-2 border-gray-700 bg-gray-900 shadow-xl dark:border-gray-800 dark:bg-black"
		>
			<div
				class="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2 dark:bg-gray-900"
			>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full bg-red-500"></div>
					<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
					<div class="h-3 w-3 rounded-full bg-green-500"></div>
				</div>
				<span class="font-mono text-xs text-gray-400"> Svelte Code </span>
				<div class="w-16"></div>
			</div>
			<div class="max-h-96 overflow-x-auto overflow-y-auto p-4">
				<pre class="text-sm"><code class="font-mono text-gray-100">{state.currentCode}</code></pre>
			</div>
		</div>
	</div>

	<!-- Quick Actions -->
	<div class="mb-6">
		<h3 class="mb-3 block text-xs font-bold text-gray-700 dark:text-gray-300">Quick Actions</h3>
		<div class="grid grid-cols-2 gap-3">
			<!-- CodeSandbox -->
			<button
				onclick={state.openInCodeSandbox}
				class="group to-COLOR_AMBER-50 dark:to-COLOR_AMBER-900/20 hover:to-COLOR_AMBER-100 dark:hover:to-COLOR_AMBER-800/30 rounded-xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 p-4 shadow-sm transition-all hover:scale-105 hover:from-yellow-100 hover:shadow-lg active:scale-95 dark:border-yellow-800 dark:from-yellow-900/20 dark:hover:from-yellow-800/30"
			>
				<div class="mb-2 flex items-center justify-between">
					<div class="text-2xl">◆</div>
					<BaseIcon
						name={ExternalLink}
						class="h-4 w-4 text-yellow-600 opacity-[var(--opacity-0)] transition-opacity group-hover:opacity-[var(--opacity-100)] dark:text-yellow-400"
					/>
				</div>
				<div class="text-left">
					<h4 class="mb-1 text-sm font-bold text-yellow-900 dark:text-yellow-200">CodeSandbox</h4>
					<p class="text-xs text-yellow-700 dark:text-yellow-300">Open in browser IDE</p>
				</div>
			</button>

			<!-- StackBlitz -->
			<button
				onclick={state.openInStackBlitz}
				class="group rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 shadow-sm transition-all hover:scale-105 hover:from-blue-100 hover:to-cyan-100 hover:shadow-lg active:scale-95 dark:border-blue-800 dark:from-blue-900/20 dark:to-cyan-900/20 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30"
			>
				<div class="mb-2 flex items-center justify-between">
					<div class="text-2xl">◆</div>
					<BaseIcon
						name={ExternalLink}
						class="h-4 w-4 text-blue-600 opacity-[var(--opacity-0)] transition-opacity group-hover:opacity-[var(--opacity-100)] dark:text-blue-400"
					/>
				</div>
				<div class="text-left">
					<h4 class="mb-1 text-sm font-bold text-blue-900 dark:text-blue-200">StackBlitz</h4>
					<p class="text-xs text-blue-700 dark:text-blue-300">Instant dev environment</p>
				</div>
			</button>
		</div>
	</div>

	<!-- NPM Installation -->
	<div class="mb-6">
		<h3 class="mb-3 block text-xs font-bold text-gray-700 dark:text-gray-300">NPM Installation</h3>
		<div class="flex gap-2">
			<div
				class="flex flex-1 items-center gap-2 rounded-lg border-2 border-gray-700 bg-gray-900 px-4 py-3 font-mono text-sm text-green-400 shadow-lg dark:border-gray-800 dark:bg-black"
			>
				<BaseIcon name={Terminal} class="h-4 w-4 flex-shrink-0" />
				<code class="flex-1">npm install @stylist-svelte/components</code>
			</div>
			<button
				onclick={state.copyNpmCommand}
				class="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-green-600 hover:to-emerald-600 hover:shadow-xl active:scale-95"
			>
				{#if state.npmCopySuccess}
					<BaseIcon name={CheckCircle} class="h-4 w-4" />
					Copied!
				{:else}
					<BaseIcon name={Copy} class="h-4 w-4" />
					Copy
				{/if}
			</button>
		</div>
	</div>

	<!-- Features -->
	<div class="grid grid-cols-2 gap-4">
		<div
			class="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-4 shadow-sm dark:border-orange-800 dark:from-orange-900/20 dark:to-red-900/20"
		>
			<div class="mb-2 flex items-center gap-2">
				<BaseIcon name={Code2} class="h-4 w-4 text-orange-600 dark:text-orange-400" />
				<h4 class="text-xs font-bold text-orange-900 dark:text-orange-200">Svelte First</h4>
			</div>
			<p class="text-xs text-orange-700 dark:text-orange-300">
				Export Svelte-ready snippets with current prop values
			</p>
		</div>

		<div
			class="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-4 shadow-sm dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20"
		>
			<div class="mb-2 flex items-center gap-2">
				<BaseIcon name={FileCode} class="h-4 w-4 text-green-600 dark:text-green-400" />
				<h4 class="text-xs font-bold text-green-900 dark:text-green-200">TypeScript Ready</h4>
			</div>
			<p class="text-xs text-green-700 dark:text-green-300">
				Drop the snippet into your project and start building
			</p>
		</div>
	</div>

	<!-- Pro tip -->
	<div
		class="mt-4 rounded-xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4 shadow-sm dark:border-purple-800 dark:from-purple-900/20 dark:to-pink-900/20"
	>
		<p class="text-xs text-purple-700 dark:text-purple-300">
			<strong class="text-purple-900 dark:text-purple-200">Pro tip:</strong> The exported code includes
			all current prop values and can be used directly in your project!
		</p>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: var(--opacity-0);
			transform: scale(0.95);
		}
		to {
			opacity: var(--opacity-100);
			transform: scale(1);
		}
	}

	pre {
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	code {
		display: block;
	}
</style>
