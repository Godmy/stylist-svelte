<script lang="ts">
  import type { CardWithImageRecipe as CardWithImageProps } from '$stylist/commerce/interface/recipe/card-with-image';
  import { ObjectManagerCardWithImage } from '$stylist/commerce/class/object-manager/card-with-image';
  import { CardWithImageStyleManager } from '$stylist/commerce/class/style-manager/card-with-image';

  let {
    title,
    subtitle,
    description,
    image,
    imageClass = 'h-48 w-full object-cover',
    footer,
    actions,
    class: className = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    actionsClass = '',
    ...restProps
  }: CardWithImageProps = $props();
</script>

<div class={CardWithImageStyleManager.getContainerClasses(typeof className === 'string' ? className : undefined)} {...ObjectManagerCardWithImage.getRestProps({ title, subtitle, description, image, imageClass, footer, actions, class: className, headerClass, bodyClass, footerClass, actionsClass, ...restProps })}>
  {#if image}
    <img src={image} alt="" class={CardWithImageStyleManager.getImageClasses(imageClass)} />
  {/if}
  
  <div class={CardWithImageStyleManager.getBodyClasses(bodyClass)}>
    {#if title || subtitle}
      <div class={CardWithImageStyleManager.getHeaderClasses(headerClass)}>
        {#if title}
          <h3 class={CardWithImageStyleManager.getTitleClasses()}>{title}</h3>
        {/if}
        {#if subtitle}
          <p class={CardWithImageStyleManager.getSubtitleClasses()}>{subtitle}</p>
        {/if}
      </div>
    {/if}
    
    {#if description}
      <p class={CardWithImageStyleManager.getDescriptionClasses()}>{description}</p>
    {/if}
    
    {#if footer}
      <div class={footerClass}>
        {@render footer()}
      </div>
    {/if}
    
    {#if actions}
      <div class={actionsClass}>
        {@render actions()}
      </div>
    {/if}
  </div>
</div>


