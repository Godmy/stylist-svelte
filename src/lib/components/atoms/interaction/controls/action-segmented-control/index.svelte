<script lang="ts">
  import type { ActionSegmentedControlProps } from '$stylist/design-system/interaction/controls/action-segmented-control';
  import { createActionSegmentedControlState } from '../state';

  let props: ActionSegmentedControlProps = $props();

  const controlState = createActionSegmentedControlState(props);
  let localSelectedIndex = $state(controlState.selectedIndex);

  $effect(() => {
    localSelectedIndex = controlState.selectedIndex;
  });

  const handleClick = (index: number) => {
    localSelectedIndex = index;
    props.onChange?.(index);
  };
</script>

<div class={controlState.classes}>
  {#each controlState.items as item, i}
    <button
      class={controlState.getItemClasses(i, localSelectedIndex === i)}
      onclick={() => handleClick(i)}
    >
      {item}
    </button>
  {/each}
</div>
