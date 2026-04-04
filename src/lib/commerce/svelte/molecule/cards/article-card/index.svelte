<script lang="ts">
  import type { ArticleCardRecipe as ArticleCardProps } from '$stylist/commerce/interface/recipe/article-card';
  import { ArticleCardStyleManager } from '$stylist/commerce/class/style-manager/article-card';

  let {
    title = '',
    subtitle = '',
    image = '',
    actions = [],
    class: className = ''
  }: ArticleCardProps = $props();
</script>

<div class={ArticleCardStyleManager.getContainerClasses(typeof className === 'string' ? className : undefined)}>
  {#if image}
    <img src={image} alt={title} class={ArticleCardStyleManager.getImageClasses()} />
  {/if}
  <div class={ArticleCardStyleManager.getBodyClasses()}>
    <h3 class={ArticleCardStyleManager.getTitleClasses()}>{title}</h3>
    {#if subtitle}
      <p class={ArticleCardStyleManager.getSubtitleClasses()}>{subtitle}</p>
    {/if}
    <div class={ArticleCardStyleManager.getActionsClasses()}>
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class={ArticleCardStyleManager.getActionButtonClasses()}
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>



