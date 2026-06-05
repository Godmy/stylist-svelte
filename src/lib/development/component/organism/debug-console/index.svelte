<script lang="ts">
	import type { DebugConsoleProps } from '$stylist/development/type/struct/debug-console-props';
	import type { DebugConsoleLogLevel } from '$stylist/development/type/struct/debug-console-log-level';
	import createDebugConsoleState from '$stylist/development/function/state/debug-console/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: DebugConsoleProps = $props();
	const state = createDebugConsoleState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerComputedClass}>
		<div class="flex items-center">
			<BaseIcon name={state.Terminal} class="mr-2 h-5 w-5 text-gray-500" />
			<h3 class="text-sm font-medium text-gray-900">{state.title}</h3>
			<span class="ml-2 text-xs text-gray-500">({state.filteredLogs.length} entries)</span>
		</div>

		<div class="flex items-center space-x-2">
			{#if state.allowClear}
				<button
					type="button"
					class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-red-500"
					onclick={state.clearLogs}
					title="Clear logs"
				>
					<BaseIcon name={state.Trash2} class="h-4 w-4" />
				</button>
			{/if}

			<button
				type="button"
				class={`rounded p-1.5 ${
					state.isRunning
						? 'text-red-500 hover:bg-red-100 hover:text-red-700'
						: 'text-green-500 hover:bg-green-100 hover:text-green-700'
				}`}
				onclick={state.isRunning ? state.stopSimulator : state.startSimulator}
				title={state.isRunning ? 'Stop simulator' : 'Start simulator'}
			>
				{#if state.isRunning}
					<BaseIcon name={state.Square} class="h-4 w-4" />
				{:else}
					<BaseIcon name={state.Play} class="h-4 w-4" />
				{/if}
			</button>
		</div>
	</div>

	<div class="border-b bg-gray-50 p-2">
		<div class="flex items-center space-x-4">
			{#if state.allowFilter}
				{#each ['log', 'info', 'warn', 'error', 'debug'] as level (level)}
					<button
						type="button"
						class={`rounded-full px-2 py-1 text-xs ${
							state.logLevelFilter.includes(level as DebugConsoleLogLevel)
								? state.getLevelBgColor(level as DebugConsoleLogLevel) +
									' ' +
									state.getLevelColor(level as DebugConsoleLogLevel)
								: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
						}`}
						onclick={() => state.toggleLogLevel(level as DebugConsoleLogLevel)}
					>
						{level.toUpperCase()}
					</button>
				{/each}
			{/if}

			<div class="relative flex-1">
				<input
					type="text"
					class="block w-full rounded-md border border-gray-300 py-1 pr-4 pl-8 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					placeholder="Search logs..."
					bind:value={state.searchQuery}
					oninput={state.updateFilteredLogs}
				/>
				<BaseIcon name={state.Search} class="absolute top-1.5 left-2.5 h-3 w-3 text-gray-400" />
			</div>
		</div>
	</div>

	<div
		class={`font-mono text-xs ${state.consoleClass}`}
		style={`max-height: ${state.maxHeight}; overflow-y: auto;`}
	>
		{#if state.filteredLogs.length === 0}
			<div class="p-4 text-center text-gray-500 italic">
				No logs to display. {state.isRunning
					? 'Generating logs...'
					: 'Start the simulator or add logs.'}
			</div>
		{:else}
			{#each state.filteredLogs as log}
				<div class={`border-b p-2 ${state.getLevelColor(log.level)} ${state.entryClass}`}>
					<div class="flex">
						{#if state.showTimestamps}
							<span class="mr-3 w-20 flex-shrink-0 text-gray-500"
								>{state.formatTimestamp(log.timestamp)}</span
							>
						{/if}

						{#if state.showLogLevel}
							<span
								class={`mr-2 rounded px-1.5 py-0.5 text-xs font-medium ${state.getLevelBgColor(log.level)} flex-shrink-0`}
							>
								{log.level.toUpperCase()}
							</span>
						{/if}

						<span class="flex-1 break-words">{log.message}</span>

						{#if log.data}
							<details class="ml-2">
								<summary class="cursor-pointer text-gray-500 hover:text-gray-700"> [Data] </summary>
								<pre class="mt-1 overflow-x-auto rounded bg-gray-100 p-2 text-xs">
                  {JSON.stringify(log.data, null, 2)}
                </pre>
							</details>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<div
		class={`flex items-center justify-between border-t px-4 py-2 text-xs text-gray-500 ${state.footerClass}`}
	>
		<div>
			<span class="inline-flex items-center">
				<BaseIcon name={state.Bug} class="mr-1 h-3 w-3" />
				Debug Console
			</span>
		</div>
		<div>
			{state.isRunning ? 'Live logging' : 'Ready'}
		</div>
	</div>
</div>
