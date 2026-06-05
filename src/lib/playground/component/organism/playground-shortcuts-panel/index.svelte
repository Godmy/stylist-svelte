<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createPlaygroundShortcutsPanelState from '$stylist/playground/function/state/playground-shortcuts-panel/index.svelte';
	import type { PlaygroundShortcutsPanelProps } from '$stylist/playground/type/struct/playground-shortcuts-panel-props';
	const Keyboard = 'keyboard';
	const Command = 'command';
	const Search = 'search';
	const Zap = 'zap';
	const Eye = 'eye';
	const SidebarIcon = 'sidebar';
	const Layout = 'layout';
	const Grid = 'grid';
	const Moon = 'moon';
	const Code = 'code';
	const Copy = 'copy';

	let props: PlaygroundShortcutsPanelProps = $props();
	const state = createPlaygroundShortcutsPanelState(props);
</script>

<div
	class="shortcuts-panel h-full overflow-auto bg-gradient-to-b from-white to-gray-50 p-6 dark:from-gray-800 dark:to-gray-900"
>
	<!-- Header -->
	<div class="mb-6">
		<div class="mb-2 flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg"
			>
				<BaseIcon name={Keyboard} class="h-6 w-6 text-white" />
			</div>
			<h3
				class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-base font-bold text-transparent dark:from-indigo-400 dark:to-purple-400"
			>
				Keyboard Shortcuts
			</h3>
		</div>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Master the playground with these keyboard shortcuts
		</p>
	</div>

	<!-- Shortcuts by category -->
	<div class="space-y-6">
		{#each state.categoryOrder as category}
			{#if state.groupedShortcuts.has(category)}
				{@const categoryShortcuts = state.groupedShortcuts.get(category) || []}
				<div class="category-section">
					<!-- Category header -->
					<div class="mb-3 flex items-center gap-2">
						<div
							class="h-8 w-8 rounded-lg bg-gradient-to-br {state.getCategoryColor(
								category
							)} flex items-center justify-center border-2"
						>
							<BaseIcon
								name={state.getCategoryIcon(category)}
								class="h-4 w-4 text-gray-700 dark:text-gray-300"
							/>
						</div>
						<h4 class="text-sm font-bold text-gray-900 dark:text-white">
							{category}
						</h4>
						<span
							class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400"
						>
							{categoryShortcuts.length}
						</span>
					</div>

					<!-- Shortcuts list -->
					<div class="ml-10 space-y-2">
						{#each categoryShortcuts as shortcut, index}
							<div
								class="shortcut-item group rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-3 shadow-sm transition-all hover:scale-[1.02] hover:border-indigo-300 hover:shadow-md dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:hover:border-indigo-700"
								style="animation-delay: {index * 30}ms"
							>
								<div class="flex items-center justify-between gap-4">
									<div class="flex min-w-0 flex-1 items-center gap-3">
										{#if shortcut.icon}
											<BaseIcon
												name={shortcut.icon}
												class="h-4 w-4 flex-shrink-0 text-gray-500 dark:text-gray-400"
											/>
										{/if}
										<span class="truncate text-sm font-medium text-gray-700 dark:text-gray-300">
											{shortcut.description}
										</span>
									</div>
									<div class="flex flex-shrink-0 items-center gap-1">
										{#each shortcut.keys as key, i}
											<kbd
												class="rounded px-2.5 py-1 text-xs font-bold {state.getKeyColor(
													key
												)} border font-mono shadow-sm transition-all group-hover:scale-105"
											>
												{key}
											</kbd>
											{#if i < shortcut.keys.length - 1}
												<span class="mx-0.5 text-xs text-gray-400 dark:text-gray-600">+</span>
											{/if}
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>

	<!-- Tips section -->
	<div
		class="mt-6 rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-4 dark:border-indigo-800 dark:from-indigo-900/20 dark:to-purple-900/20"
	>
		<h4 class="mb-2 flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-200">
			<BaseIcon name={Zap} class="h-4 w-4" />
			Pro Tips
		</h4>
		<ul class="space-y-1.5 text-xs text-indigo-700 dark:text-indigo-300">
			<li class="flex items-start gap-2">
				<span class="mt-0.5 text-indigo-500">•</span>
				<span
					>Hold <kbd
						class="rounded border border-indigo-300 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-indigo-700 dark:bg-gray-800"
						>Shift</kbd
					> while using zoom shortcuts for finer control</span
				>
			</li>
			<li class="flex items-start gap-2">
				<span class="mt-0.5 text-indigo-500">•</span>
				<span
					>Press <kbd
						class="rounded border border-indigo-300 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-indigo-700 dark:bg-gray-800"
						>?</kbd
					> anytime to open this shortcuts panel</span
				>
			</li>
			<li class="flex items-start gap-2">
				<span class="mt-0.5 text-indigo-500">•</span>
				<span
					>Use <kbd
						class="rounded border border-indigo-300 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-indigo-700 dark:bg-gray-800"
						>Esc</kbd
					> to close any modal or panel</span
				>
			</li>
		</ul>
	</div>

	<!-- Platform note -->
	<div
		class="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-700 dark:bg-gray-800"
	>
		<p class="text-center text-xs text-gray-600 dark:text-gray-400">
			On macOS, replace <kbd
				class="rounded border border-gray-300 bg-white px-1 py-0.5 font-mono dark:border-gray-600 dark:bg-gray-700"
				>Ctrl</kbd
			>
			with
			<kbd
				class="rounded border border-gray-300 bg-white px-1 py-0.5 font-mono dark:border-gray-600 dark:bg-gray-700"
				>⌘</kbd
			> (Command)
		</p>
	</div>
</div>

<style>
	.shortcut-item {
		animation: fade-slide-in var(--duration-300) var(--animation-ease-out);
	}

	@keyframes fade-slide-in {
		from {
			opacity: var(--opacity-0);
			transform: translateX(-8px);
		}
		to {
			opacity: var(--opacity-100);
			transform: translateX(0);
		}
	}

	.category-section {
		animation: fade-in var(--duration-400) var(--animation-ease-out);
	}

	@keyframes fade-in {
		from {
			opacity: var(--opacity-0);
		}
		to {
			opacity: var(--opacity-100);
		}
	}
</style>
