<script lang="ts">
  import { CtaBannerStyleManager } from '$stylist/design-system/styles/information/cta-banner';

  type CtaBannerButton = {
    label: string;
    variant: 'primary' | 'secondary' | 'outline';
    onClick: () => void;
  };

  type CtaBannerBackgroundVariant = 'gradient' | 'solid' | 'image';

  interface CtaBannerProps {
    title: string;
    description?: string;
    buttons: CtaBannerButton[];
    backgroundVariant?: CtaBannerBackgroundVariant;
    backgroundImage?: string;
    class?: string;
  }

  let {
    title,
    description,
    buttons = [],
    backgroundVariant = 'gradient',
    backgroundImage,
    class: className = ''
  }: CtaBannerProps = $props();

  const containerClasses = $derived(`${CtaBannerStyleManager.getContainerClasses()} ${className}`.trim());
  const backgroundClasses = $derived(CtaBannerStyleManager.getBackgroundClasses(backgroundVariant));
  const contentClasses = $derived(CtaBannerStyleManager.getContentClasses());
  const titleClasses = $derived(CtaBannerStyleManager.getTitleClasses());
  const descriptionClasses = $derived(CtaBannerStyleManager.getDescriptionClasses());
  const buttonsContainerClasses = $derived(CtaBannerStyleManager.getButtonsContainerClasses());

  function getButtonClasses(variant: 'primary' | 'secondary' | 'outline') {
    return CtaBannerStyleManager.getButtonClasses(variant);
  }

  function handleButtonClick(onClick: () => void) {
    onClick();
  }
</script>

<section class={containerClasses} role="banner" aria-label={`CTA Banner: ${title}`}>
  {#if backgroundVariant === 'image' && backgroundImage}
    <div class={backgroundClasses} style={`background-image: url('${backgroundImage}');`} aria-hidden="true"></div>
  {:else}
    <div class={backgroundClasses} aria-hidden="true"></div>
  {/if}

  <div class={contentClasses}>
    <h2 class={titleClasses} aria-label={title}>{title}</h2>

    {#if description}
      <p class={descriptionClasses} aria-label={description}>{description}</p>
    {/if}

    {#if buttons.length > 0}
      <div class={buttonsContainerClasses}>
        {#each buttons as button}
          <button class={getButtonClasses(button.variant)} onclick={() => handleButtonClick(button.onClick)} type="button" aria-label={button.label}>
            {button.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</section>