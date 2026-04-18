<script lang="ts">
  import type { SlotHero as IHeroProps } from '$stylist/marketing/interface/slot/hero';
  import { createHeroState } from '$stylist/marketing/function/state/hero';
  import AnimatedNumber from '$stylist/typography/svelte/atom/animation/animated-number/index.svelte';

  let props: IHeroProps = $props();
  const state = createHeroState(props);
</script>

<div class={state.containerClasses} role="banner">
  <!-- Р¤РѕРЅРѕРІРѕРµ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёР»Рё РіСЂР°РґРёРµРЅС‚ -->
  {#if state.backgroundVariant === 'image' && state.backgroundImage}
    <div
      class={state.backgroundClasses}
      style={`background-image: url('${state.backgroundImage}'); opacity: var(--opacity-30);`}
      aria-hidden="true"
    ></div>
  {:else if state.backgroundVariant === 'gradient'}
    <div class={state.backgroundClasses} aria-hidden="true"></div>
  {:else if state.backgroundVariant === 'particles'}
    <!-- РџРѕРєР° С‡С‚Рѕ РїСЂРѕСЃС‚РѕР№ РіСЂР°РґРёРµРЅС‚ РІРјРµСЃС‚Рѕ С‡Р°СЃС‚РёС† -->
    <div class={state.backgroundClasses + ' [background-image:var(--gradient-cosmic)]'} aria-hidden="true"></div>
  {/if}

  <!-- РћСЃРЅРѕРІРЅРѕР№ РєРѕРЅС‚РµРЅС‚ -->
  <div class={state.contentClasses}>
    <h1 class={state.titleClasses} aria-label={state.title}>{state.title}</h1>

    {#if state.subtitle}
      <p class={state.subtitleClasses} aria-label={state.subtitle}>{state.subtitle}</p>
    {/if}

    {#if state.stats && state.stats.length > 0}
      <div class={state.statsContainerClasses}>
        {#each state.stats as stat}
          <div class={state.statItemClasses} aria-label={`${stat.label}: ${stat.value}`}>
            <div class={state.statValueClasses}>
              {#if typeof stat.value === 'number'}
                <AnimatedNumber value={stat.value} />
              {:else}
                {stat.value}
              {/if}
            </div>
            <div class={state.statLabelClasses}>{stat.label}</div>
          </div>
        {/each}
      </div>
    {/if}

    {#if state.primaryCTA || state.secondaryCTA}
      <div class={state.ctaContainerClasses}>
        {#if state.primaryCTA}
          <button
            class={state.primaryCTAButtonClasses}
            onclick={state.handlePrimaryClick}
            type="button"
            aria-label={state.primaryCTA.label}
          >
            {state.primaryCTA.label}
          </button>
        {/if}

        {#if state.secondaryCTA}
          <button
            class={state.secondaryCTAButtonClasses}
            onclick={state.handleSecondaryClick}
            type="button"
            aria-label={state.secondaryCTA.label}
          >
            {state.secondaryCTA.label}
          </button>
        {/if}
      </div>
    {/if}

    {#if state.children}
      <div class="mt-8">
        {@render state.children()}
      </div>
    {/if}
  </div>
</div>






