<script lang="ts">
  import Icon from '../../../media/Icon/Icon.svelte';
  import type { AccordionIconProps } from './type';
  import { DEFAULT_IS_OPEN, DEFAULT_SIZE, ICON_NAME } from './constant';
  import { getContainerClasses } from './util';

  const {
    isOpen = DEFAULT_IS_OPEN,
    size = DEFAULT_SIZE,
    class: className = ''
  }: AccordionIconProps = $props();

  const containerClass = getContainerClasses(isOpen, className);
</script>

<span class={containerClass}>
	<Icon name={ICON_NAME} size={size} />
</span>