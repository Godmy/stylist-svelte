<script lang="ts">
	import type { PlaygroundAiPanelProps } from '$stylist/playground/type/struct/playground-ai-panel-props';
	import { createPlaygroundAiPanelState } from '$stylist/playground/function/state/playground-ai-panel';
	import { Icon as BaseIcon } from '$stylist/media';

	let { ...props }: PlaygroundAiPanelProps = $props();
	const state = createPlaygroundAiPanelState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<h2 class="text-lg font-bold text-gray-900 dark:text-white">AI Assistants</h2>
		<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Выберите AI-модель для работы</p>
	</div>

	<div class="p-2">
		{#each state.aiProviders as provider}
			<div class="mb-1">
				<!-- Provider header -->
				<button
					onclick={() => state.toggleProvider(provider.id)}
					class={state.providerHeaderClass +
						' flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left'}
				>
					<div class="flex items-center gap-2">
						{#if state.isExpanded(provider.id)}
							<BaseIcon name={state.ChevronDown} class="h-4 w-4 text-gray-500 dark:text-gray-400" />
						{:else}
							<BaseIcon
								name={state.ChevronRight}
								class="h-4 w-4 text-gray-500 dark:text-gray-400"
							/>
						{/if}
						<span class="text-sm font-bold text-gray-900 dark:text-white">
							{provider.name}
						</span>
					</div>
				</button>

				<!-- Provider options -->
				{#if state.isExpanded(provider.id)}
					<div class="mt-1 ml-6 space-y-0.5">
						{#each provider.options as option}
							<button
								onclick={() => state.handleOptionClick(provider.id, option.id)}
								class={state.optionItemClass +
									' w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 dark:text-gray-300' +
									(state.isSelected(provider.id, option.id)
										? ' ' + state.selectedOptionItemClass + ' font-medium'
										: '')}
							>
								{option.label}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
