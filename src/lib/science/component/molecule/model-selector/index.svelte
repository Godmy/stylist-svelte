<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeModelSelector as ModelSelectorContract } from '$stylist/science/interface/recipe/model-selector';
	import createModelSelectorState from '$stylist/science/function/state/model-selector/index.svelte';

	let props: ModelSelectorContract = $props();
	const state = createModelSelectorState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<button type="button" class={state.dropdownButtonClass} onclick={state.toggleOpen}>
		<div class={state.modelInfoContainerClass}>
			{#if state.selectedModelValue}
				<span class={state.selectedModelNameClass}>{state.selectedModelValue.name}</span>
				<span class={state.selectedModelDescriptionClass}
					>{state.selectedModelValue.description}</span
				>
			{:else}
				<span class={state.placeholderClass}>{state.placeholder}</span>
			{/if}
		</div>
		<BaseIcon
			name="chevron-down"
			style="width: 1.25rem; height: 1.25rem; color: var(--color-text-secondary); margin-left: var(--spacing-sm); transition: transform 0.15s ease;"
			class={state.chevronClass}
		/>
	</button>

	{#if state.isOpen}
		<div class={state.dropdownMenuClass}>
			{#each state.models as model}
				<div
					class={state.getModelItemClass(state.selectedModelValue?.id === model.id)}
					onclick={() => state.selectModel(model)}
					onkeydown={(event) =>
						event.key === 'Enter' || event.key === ' ' ? state.selectModel(model) : null}
					role="button"
					tabindex="0"
				>
					<div class={state.modelDetailsContainerClass}>
						<div class="model-selector__item-header">
							<p class={state.modelNameClass}>{model.name}</p>
							<p class={state.modelProviderVersionClass}>{model.provider} · v{model.version}</p>
						</div>
						<p class={state.modelDescriptionClass}>{model.description}</p>

						{#if state.showCapabilities && model.capabilities && model.capabilities.length > 0}
							<div class={state.capabilitiesContainerClass}>
								{#each model.capabilities.slice(0, 3) as capability}
									<span class={state.capabilityTagClass}>{capability}</span>
								{/each}
								{#if model.capabilities.length > 3}
									<span class={state.moreCapabilitiesTagClass}
										>+{model.capabilities.length - 3} more</span
									>
								{/if}
							</div>
						{/if}

						{#if state.showTags && model.tags && model.tags.length > 0}
							<div class={state.tagsContainerClass}>
								{#each model.tags.slice(0, 2) as tag}
									<span class={state.tagClass}>#{tag}</span>
								{/each}
								{#if model.tags.length > 2}
									<span class={state.tagClass}>+{model.tags.length - 2} more</span>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	:global(.model-selector) {
		position: relative;
	}

	:global(.model-selector__button) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		text-align: left;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		cursor: pointer;
	}

	:global(.model-selector__button:focus) {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	:global(.model-selector__info) {
		flex: 1;
		min-width: 0;
	}

	:global(.model-selector__selected-name) {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.model-selector__selected-description) {
		display: block;
		font-size: 0.875rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-text-secondary);
	}

	:global(.model-selector__placeholder) {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-text-secondary);
	}

	:global(.model-selector__chevron) {
		flex-shrink: 0;
		transition: transform 0.15s ease;
	}

	:global(.model-selector__chevron--open) {
		transform: rotate(180deg);
	}

	:global(.model-selector__menu) {
		position: absolute;
		z-index: var(--z-index-docked, 10);
		margin-top: 0.25rem;
		width: 100%;
		background-color: var(--color-background-primary);
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		max-height: 15rem;
		border-radius: 0.375rem;
		padding: 0.25rem 0;
		overflow-y: auto;
		border: 1px solid var(--color-border-primary);
	}

	:global(.model-selector__item) {
		display: flex;
		align-items: flex-start;
		padding: var(--spacing-md);
		cursor: pointer;
	}

	:global(.model-selector__item:hover) {
		background-color: var(--color-background-secondary);
	}

	:global(.model-selector__item--selected) {
		background-color: var(--color-primary-50);
	}

	:global(.model-selector__item-details) {
		flex: 1;
		min-width: 0;
	}

	:global(.model-selector__item-header) {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-xs);
	}

	:global(.model-selector__item-name) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.model-selector__item-meta) {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-left: var(--spacing-xs);
	}

	:global(.model-selector__item-description) {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-top: var(--spacing-xs);
	}

	:global(.model-selector__capabilities),
	:global(.model-selector__tags) {
		margin-top: var(--spacing-sm);
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	:global(.model-selector__tag) {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		font-weight: var(--font-weight-medium, 500);
		background-color: var(--color-background-tertiary);
		color: var(--color-text-secondary);
	}

	:global(.model-selector__tag--capability) {
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	:global(.model-selector__tag--more) {
		background-color: var(--color-background-tertiary);
		color: var(--color-text-secondary);
	}
</style>
