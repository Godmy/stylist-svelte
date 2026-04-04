<script lang="ts">
  import type { PostCardRecipe as PostCardProps } from '$stylist/commerce/interface/recipe/post-card';
  import { PostCardStyleManager } from '$stylist/commerce/class/style-manager/post-card';

  let {
    title = '',
    subtitle = '',
    image = '',
    date = '',
    excerpt = '',
    author = '',
    tags = [],
    actions = [],
    class: className = ''
  }: PostCardProps = $props();
</script>

<div class={PostCardStyleManager.getContainerClasses(typeof className === 'string' ? className : undefined)}>
  {#if image}
    <img src={image} alt={title} class={PostCardStyleManager.getImageClasses()} />
  {/if}
  <div class={PostCardStyleManager.getBodyClasses()}>
    <div class={PostCardStyleManager.getHeaderClasses()}>
      <h3 class={PostCardStyleManager.getTitleClasses()}>{title}</h3>
      {#if date}
        <span class={PostCardStyleManager.getDateClasses()}>{date}</span>
      {/if}
    </div>
    {#if subtitle}
      <p class={PostCardStyleManager.getSubtitleClasses()}>{subtitle}</p>
    {/if}
    {#if excerpt}
      <p class={PostCardStyleManager.getExcerptClasses()}>{excerpt}</p>
    {/if}
    <div class={PostCardStyleManager.getMetaClasses()}>
      {#if author}
        <span class={PostCardStyleManager.getAuthorClasses()}>By {author}</span>
      {/if}
      {#if tags.length > 0}
        <div class={PostCardStyleManager.getTagsClasses()}>
          {#each tags as tag}
            <span class={PostCardStyleManager.getTagClasses()}>{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
    <div class={PostCardStyleManager.getActionsClasses()}>
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class={PostCardStyleManager.getActionButtonClasses()}
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>



