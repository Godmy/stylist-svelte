<script lang="ts">
  import { CtaBannerStyleManager } from '$stylist/marketing/class/style-manager/cta-banner';
  import type { CtaBannerProps } from '$stylist/marketing/type/struct/cta-banner';
  import { createCtaBannerState } from '$stylist/marketing/function/state/cta-banner';

  let props: CtaBannerProps = $props();
  const state = createCtaBannerState(props);
</script>

<section class={state.containerClasses} role="banner" aria-label={`CTA Banner: ${state.title}`} {...state.restProps}>
  {#if state.backgroundVariant === 'image' && state.backgroundImage}
    <div class={state.backgroundClasses} style={`background-image: url('${state.backgroundImage}');`} aria-hidden="true"></div>
  {:else}
    <div class={state.backgroundClasses} aria-hidden="true"></div>
  {/if}

  <div class={state.contentClasses}>
    <h2 class={state.titleClasses} aria-label={state.title}>{state.title}</h2>

    {#if state.description}
      <p class={state.descriptionClasses} aria-label={state.description}>{state.description}</p>
    {/if}

    {#if state.buttons.length > 0}
      <div class={state.buttonsContainerClasses}>
        {#each state.buttons as button}
          <button class={state.getButtonClasses(button.variant)} onclick={() => button.onClick?.()} type="button" aria-label={button.label}>
            {button.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</section>
