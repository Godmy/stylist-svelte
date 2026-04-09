<script lang="ts">
	import type { AiResultCardContract } from '$stylist/science/interface/record/science';
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
          {@render state.children?.()}
        </div>
      {/if}
    </div>
  </div>
</div>



