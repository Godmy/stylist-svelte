<script lang="ts">
	import type { RecipeAiResultCard as AiResultCardContract } from '$stylist/science/interface/recipe/ai-result-card';
	import { createAiResultCardState } from '$stylist/science/function/state/ai-result-card';

	let props: AiResultCardContract = $props();
	const state = createAiResultCardState(props);
</script>

<div class={state.containerClass}>
  <div class={state.contentWrapperClass}>
    {#if state.icon}
      <div class={state.iconContainerClass}>
        <img src={state.icon} alt="" class={state.iconClass} />
      </div>
    {/if}
    <div class={state.textContentWrapperClass}>
      {#if state.title}
        <h3 class={state.titleClass}>{state.title}</h3>
      {/if}
      {#if state.description}
        <p class={state.descriptionClass}>{state.description}</p>
      {/if}
      {#if state.children}
        <div>
          {#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
        </div>
      {/if}
    </div>
  </div>
</div>
