<script lang="ts">
  /**
   * @component ComparisonCard
   * @description Before/After comparison card for SAMO case study
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles comparison card display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any comparison card
   * - Interface Segregation: Minimal interface via IComparisonCardProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful comparison unit
   */

  import type { IComparisonCardProps } from '$stylist/design-system/props/information/comparison-card';
  import { ComparisonCardStyleManager } from '$stylist/design-system/styles/information/comparison-card';

  // Define component props using the interface
  let {
    before,
    after,
    title = 'Before vs After',
    class: className = ''
  }: IComparisonCardProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(ComparisonCardStyleManager.getBaseClasses(className));
  let headerClasses = $derived(ComparisonCardStyleManager.getHeaderClasses());
  let titleClasses = $derived(ComparisonCardStyleManager.getTitleClasses());
  let comparisonContainerClasses = $derived(ComparisonCardStyleManager.getComparisonContainerClasses());
  let sectionClasses = $derived(ComparisonCardStyleManager.getSectionClasses());
  let sectionTitleClasses = $derived(ComparisonCardStyleManager.getSectionTitleClasses());
  let comparisonListClasses = $derived(ComparisonCardStyleManager.getComparisonListClasses());
  let comparisonItemClasses = $derived(ComparisonCardStyleManager.getComparisonItemClasses());
  let comparisonLabelClasses = $derived(ComparisonCardStyleManager.getComparisonLabelClasses());
  let comparisonValueClasses = $derived(ComparisonCardStyleManager.getComparisonValueClasses());
  let beforeTitleClasses = $derived(ComparisonCardStyleManager.getBeforeTitleClasses());
  let afterTitleClasses = $derived(ComparisonCardStyleManager.getAfterTitleClasses());
</script>

<div class={`c-comparison-card ${classes}`}>
  <div class={headerClasses}>
    <h2 class={titleClasses}>{title}</h2>
  </div>

  <div class={comparisonContainerClasses}>
    <!-- Before section -->
    <div class={sectionClasses}>
      <h3 class={beforeTitleClasses}>{before.title}</h3>
      <div class={comparisonListClasses}>
        {#each before.items as item}
          <div class={comparisonItemClasses}>
            <span class={comparisonLabelClasses}>{item.label}</span>
            <span class={comparisonValueClasses}>{item.value}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- After section -->
    <div class={sectionClasses}>
      <h3 class={afterTitleClasses}>{after.title}</h3>
      <div class={comparisonListClasses}>
        {#each after.items as item}
          <div class={comparisonItemClasses}>
            <span class={comparisonLabelClasses}>{item.label}</span>
            <span class={comparisonValueClasses}>{item.value}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

