<script lang="ts">
  import type { ArticleCardRecipe as ArticleCardProps } from '$stylist/commerce/interface/recipe/article-card';
  import { createArticleCardState } from '$stylist/commerce/function/state/article-card';

  let props: ArticleCardProps = $props();
  const state = createArticleCardState(props);
</script>

<div class={state.containerClasses}>
  {#if props.image}
    <img src={props.image} alt={props.title} class={state.imageClasses} />
  {/if}
  <div class={state.bodyClasses}>
    <h3 class={state.titleClasses}>{props.title}</h3>
    {#if props.subtitle}
      <p class={state.subtitleClasses}>{props.subtitle}</p>
    {/if}
    <div class={state.actionsClasses}>
      {#each props.actions ?? [] as action}
        <button
          onclick={action.onClick}
          class={state.actionButtonClasses}
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>
