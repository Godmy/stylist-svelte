<script lang="ts">
  import type { DataDisplayCardRecipe as DataDisplayCardProps } from '$stylist/commerce/interface/recipe/data-display-card';
  import { createDataDisplayCardState } from '$stylist/commerce/function/state/data-display-card';

  let props: DataDisplayCardProps = $props();
  const state = createDataDisplayCardState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
  {#if props.image}
    <img 
      src={props.image} 
      alt={props.title || 'Card image'} 
      class={state.imageClasses} 
    />
  {/if}
  
  <div class={state.bodyClasses}>
    {#if props.title || props.subtitle}
      <div class={state.headerClasses}>
        {#if props.title}
          <h3 class={state.titleClasses}>{props.title}</h3>
        {/if}
        {#if props.subtitle}
          <p class={state.subtitleClasses}>{props.subtitle}</p>
        {/if}
      </div>
    {/if}
    
    {#if props.description}
      <div class={state.descriptionContainerClasses}>
        <p class={state.descriptionClasses}>{props.description}</p>
      </div>
    {/if}
    
    {#if props.actions}
      <div class={state.actionsClasses}>
        {@render props.actions()}
      </div>
    {/if}
  </div>
  
  {#if props.footer}
    <div class={state.footerClasses}>
      {@render props.footer()}
    </div>
  {/if}
</div>
