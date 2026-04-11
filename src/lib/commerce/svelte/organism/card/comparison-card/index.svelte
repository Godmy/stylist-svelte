<script lang="ts">
  import type { Props } from '$stylist/commerce/type/struct/comparison-card';
  import { createComparisonCardState } from '$stylist/commerce/function/state/comparison-card';

  let props: Props = $props();
  const state = createComparisonCardState(props);
</script>

<div class={`c-comparison-card ${state.classes}`}>
  <div class={state.headerClasses}>
    <h2 class={state.titleClasses}>{props.title ?? 'Before vs After'}</h2>
  </div>

  <div class={state.comparisonContainerClasses}>
    <!-- Before section -->
    <div class={state.sectionClasses}>
      <h3 class={state.beforeTitleClasses}>{props.before.title}</h3>
      <div class={state.comparisonListClasses}>
        {#each props.before.items as item}
          <div class={state.comparisonItemClasses}>
            <span class={state.comparisonLabelClasses}>{item.label}</span>
            <span class={state.comparisonValueClasses}>{item.value}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- After section -->
    <div class={state.sectionClasses}>
      <h3 class={state.afterTitleClasses}>{props.after.title}</h3>
      <div class={state.comparisonListClasses}>
        {#each props.after.items as item}
          <div class={state.comparisonItemClasses}>
            <span class={state.comparisonLabelClasses}>{item.label}</span>
            <span class={state.comparisonValueClasses}>{item.value}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>





