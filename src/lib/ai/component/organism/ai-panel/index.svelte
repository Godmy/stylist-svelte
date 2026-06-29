<script lang="ts">
	import type { RecipeAiPanel } from '$stylist/ai/interface/recipe/ai-panel';
	import { createAiPanelState } from '$stylist/ai/function/state/ai-panel/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let { ...props }: RecipeAiPanel = $props();
	const state = createAiPanelState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<h2 class="pap-title">AI Assistants</h2>
		<p class="pap-subtitle">Выберите AI-модель для работы</p>
	</div>

	<div class="pap-body">
		{#each state.aiProviders as provider}
			<div class="pap-provider">
				<button
					onclick={() => state.toggleProvider(provider.id)}
					class="${state.providerHeaderClass} pap-provider-btn"
				>
					<div class="pap-provider-inner">
						{#if state.isExpanded(provider.id)}
							<BaseIcon name={state.ChevronDown} style="width:1rem;height:1rem;color:#6b7280" />
						{:else}
							<BaseIcon name={state.ChevronRight} style="width:1rem;height:1rem;color:#6b7280" />
						{/if}
						<span class="pap-provider-name">{provider.name}</span>
					</div>
				</button>

				{#if state.isExpanded(provider.id)}
					<div class="pap-options">
						{#each provider.options as option}
							<button
								onclick={() => state.handleOptionClick(provider.id, option.id)}
								class="${state.optionItemClass} pap-option-btn ${state.isSelected(
									provider.id,
									option.id
								)
									? state.selectedOptionItemClass + ' pap-option-btn--selected'
									: ''}"
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

<style>
	.pap-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: #111827;
	}
	@media (prefers-color-scheme: dark) {
		.pap-title {
			color: white;
		}
	}
	.pap-subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pap-subtitle {
			color: #9ca3af;
		}
	}
	.pap-body {
		padding: 0.5rem;
	}
	.pap-provider {
		margin-bottom: 0.25rem;
	}
	.pap-provider-btn {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.5rem;
		padding: 0.625rem 0.75rem;
		text-align: left;
		border: none;
		cursor: pointer;
	}
	.pap-provider-inner {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.pap-provider-name {
		font-size: 0.875rem;
		font-weight: 700;
		color: #111827;
	}
	@media (prefers-color-scheme: dark) {
		.pap-provider-name {
			color: white;
		}
	}
	.pap-options {
		margin-top: 0.25rem;
		margin-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
	.pap-option-btn {
		width: 100%;
		border-radius: 0.375rem;
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.875rem;
		color: #374151;
		border: none;
		cursor: pointer;
	}
	@media (prefers-color-scheme: dark) {
		.pap-option-btn {
			color: #d1d5db;
		}
	}
	.pap-option-btn--selected {
		font-weight: 500;
	}

	.ai-panel__header {
		padding: 1rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: #e5e7eb;
	}
	@media (prefers-color-scheme: dark) {
		.ai-panel__header {
			border-color: #374151;
		}
	}
</style>
