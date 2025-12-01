<script lang="ts">
  import type { ActionSegmentedControlProps } from './types';
  import { getActionSegmentedControlContainerClasses, getActionSegmentedControlItemClasses } from './styles';

  let {
    items = [],
    selectedIndex = 0,
    onChange = (index: number) => {},
    class: className = ''
  }: ActionSegmentedControlProps = $props();

  let localSelectedIndex = $state(selectedIndex);

  $effect(() => {
    localSelectedIndex = selectedIndex;
  });

  const handleClick = (index: number) => {
    localSelectedIndex = index;
    onChange(index);
  };

  const getContainerClasses = () => getActionSegmentedControlContainerClasses(className);
  const getItemClasses = (i: number) => getActionSegmentedControlItemClasses(i, items.length, localSelectedIndex === i);
</script>

<div class={getContainerClasses()}>
  {#each items as item, i}
    <button
      class={getItemClasses(i)}
      onclick={() => handleClick(i)}
    >
      {item}
    </button>
  {/each}
</div>