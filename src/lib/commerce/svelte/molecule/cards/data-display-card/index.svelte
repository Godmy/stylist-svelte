<script lang="ts">
  import type { DataDisplayCardRecipe as DataDisplayCardProps } from '$stylist/commerce/interface/recipe/data-display-card';
  import { ObjectManagerDataDisplayCard } from '$stylist/commerce/class/object-manager/data-display-card';
  import { DataDisplayCardStyleManager } from '$stylist/commerce/class/style-manager/data-display-card';

  let {
    title,
    subtitle,
    description,
    image,
    footer,
    actions,
    class: className = '',
    imageClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    actionsClass = '',
    ...restProps
  }: DataDisplayCardProps = $props();
</script>

<div class={DataDisplayCardStyleManager.getContainerClasses(typeof className === 'string' ? className : undefined)} {...ObjectManagerDataDisplayCard.getRestProps({ title, subtitle, description, image, footer, actions, class: className, imageClass, headerClass, bodyClass, footerClass, actionsClass, ...restProps })}>
  {#if image}
    <img 
      src={image} 
      alt={title || 'Card image'} 
      class={DataDisplayCardStyleManager.getImageClasses(imageClass)} 
    />
  {/if}
  
  <div class={DataDisplayCardStyleManager.getBodyClasses()}>
    {#if title || subtitle}
      <div class={DataDisplayCardStyleManager.getHeaderClasses(headerClass)}>
        {#if title}
          <h3 class={DataDisplayCardStyleManager.getTitleClasses()}>{title}</h3>
        {/if}
        {#if subtitle}
          <p class={DataDisplayCardStyleManager.getSubtitleClasses()}>{subtitle}</p>
        {/if}
      </div>
    {/if}
    
    {#if description}
      <div class={DataDisplayCardStyleManager.getDescriptionContainerClasses(bodyClass)}>
        <p class={DataDisplayCardStyleManager.getDescriptionClasses()}>{description}</p>
      </div>
    {/if}
    
    {#if actions}
      <div class={DataDisplayCardStyleManager.getActionsClasses(actionsClass)}>
        {@render actions()}
      </div>
    {/if}
  </div>
  
  {#if footer}
    <div class={DataDisplayCardStyleManager.getFooterClasses(footerClass)}>
      {@render footer()}
    </div>
  {/if}
</div>


