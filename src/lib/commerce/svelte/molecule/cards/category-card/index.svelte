<script lang="ts">
  import type { CategoryCardRecipe as ICategoryCardProps } from '$stylist/commerce/interface/recipe/category-card';
  import Icon from '$stylist/media/svelte/atom/icon/index.svelte';
  import { createCategoryCardState } from '$stylist/commerce/function/state/category-card';

  let props: ICategoryCardProps = $props();
  const state = createCategoryCardState(props);
</script>

<a href={props.link} class={state.classes} aria-label={state.ariaLabel}>
  <div class={state.linkWrapperClasses}>
    <div class={state.headerClasses}>
      <div class={state.iconContainerClasses}>
        <Icon name={props.icon} container="circle" containerSize="md" variant="primary" />
      </div>
      <div class={state.contentContainerClasses}>
        <h3 class={state.titleClasses}>
          {props.title}
          <span class={state.countBadgeClasses}>{props.count}</span>
        </h3>
      </div>
    </div>

    <p class={state.descriptionClasses}>{props.description}</p>

    {#if (props.examples ?? []).length > 0}
      <div class={state.examplesContainerClasses}>
        <h4 class={state.examplesTitleClasses}>Examples:</h4>
        <div class={state.examplesListClasses}>
          {#each props.examples ?? [] as example}
            <span class={state.exampleItemClasses}>{example}</span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</a>
