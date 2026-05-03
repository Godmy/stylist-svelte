<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { RecipeModelSelector as ModelSelectorContract } from '$stylist/science/interface/recipe/model-selector';
	import { createModelSelectorState } from '$stylist/science/function/state/model-selector';

	let props: ModelSelectorContract = $props();
	const state = createModelSelectorState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<button
		type="button"
		class={state.dropdownButtonClass}
		onclick={state.toggleOpen}
	>
		<div class={state.modelInfoContainerClass}>
			{#if state.selectedModelValue}
				<span class={state.selectedModelNameClass}>{state.selectedModelValue.name}</span>
				<span class={state.selectedModelDescriptionClass}>{state.selectedModelValue.description}</span>
			{:else}
				<span class={state.placeholderClass}>{state.placeholder}</span>
			{/if}
		</div>
		<BaseIcon name="chevron-down" class={state.chevronClass} />
	</button>

	{#if state.isOpen}
		<div class={state.dropdownMenuClass}>
			{#each state.models as model}
				<div
					class={state.getModelItemClass(state.selectedModelValue?.id === model.id)}
					onclick={() => state.selectModel(model)}
					onkeydown={(event) => event.key === 'Enter' || event.key === ' ' ? state.selectModel(model) : null}
					role="button"
					tabindex="0"
				>
					<div class={state.modelDetailsContainerClass}>
						<div class="flex items-baseline">
							<p class={state.modelNameClass}>{model.name}</p>
							<p class={state.modelProviderVersionClass}>{model.provider} � v{model.version}</p>
						</div>
						<p class={state.modelDescriptionClass}>{model.description}</p>

						{#if state.showCapabilities && model.capabilities && model.capabilities.length > 0}
							<div class={state.capabilitiesContainerClass}>
								{#each model.capabilities.slice(0, 3) as capability}
									<span class={state.capabilityTagClass}>{capability}</span>
								{/each}
								{#if model.capabilities.length > 3}
									<span class={state.moreCapabilitiesTagClass}>+{model.capabilities.length - 3} more</span>
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
