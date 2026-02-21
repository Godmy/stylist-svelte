<script lang="ts">
  /**
   * @component CategoryCard
   * @description Card for component categories (for /stylist page)
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles category card display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any category card
   * - Interface Segregation: Minimal interface via ICategoryCardProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful category unit
   */

  import type { ICategoryCardProps } from '$stylist/design-system/props/information/category-card';
  import { CategoryCardStyleManager } from '$stylist/design-system/styles/information/category-card';
  import IconCircle from '$stylist/components/atoms/information/media/icon-circle/index.svelte';

  // Define component props using the interface
  let {
    title,
    icon,
    count,
    description,
    link,
    examples = [],
    class: className = ''
  }: ICategoryCardProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(CategoryCardStyleManager.getBaseClasses(className));
  let linkWrapperClasses = $derived(CategoryCardStyleManager.getLinkWrapperClasses());
  let headerClasses = $derived(CategoryCardStyleManager.getHeaderClasses());
  let iconContainerClasses = $derived(CategoryCardStyleManager.getIconContainerClasses());
  let contentContainerClasses = $derived(CategoryCardStyleManager.getContentContainerClasses());
  let titleClasses = $derived(CategoryCardStyleManager.getTitleClasses());
  let countBadgeClasses = $derived(CategoryCardStyleManager.getCountBadgeClasses());
  let descriptionClasses = $derived(CategoryCardStyleManager.getDescriptionClasses());
  let examplesContainerClasses = $derived(CategoryCardStyleManager.getExamplesContainerClasses());
  let examplesTitleClasses = $derived(CategoryCardStyleManager.getExamplesTitleClasses());
  let examplesListClasses = $derived(CategoryCardStyleManager.getExamplesListClasses());
  let exampleItemClasses = $derived(CategoryCardStyleManager.getExampleItemClasses());
</script>

<a href={link} class={classes} aria-label={`${title} category with ${count} components`}>
  <div class={linkWrapperClasses}>
    <div class={headerClasses}>
      <div class={iconContainerClasses}>
        <IconCircle icon={icon as any} size="md" variant="primary" />
      </div>
      <div class={contentContainerClasses}>
        <h3 class={titleClasses}>
          {title}
          <span class={countBadgeClasses}>{count}</span>
        </h3>
      </div>
    </div>

    <p class={descriptionClasses}>{description}</p>

    {#if examples.length > 0}
      <div class={examplesContainerClasses}>
        <h4 class={examplesTitleClasses}>Examples:</h4>
        <div class={examplesListClasses}>
          {#each examples as example}
            <span class={exampleItemClasses}>{example}</span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</a>
