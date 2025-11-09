<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

  type Props = {
    position?: TooltipPosition;
    visible?: boolean;
    content?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    position = 'top',
    visible = false,
    content = '',
    ...restProps
  }: Props = $props();

  let internalVisible = $state(visible);

  // Handle visibility prop changes
  $effect(() => {
    internalVisible = visible;
  });

  let positionClasses = $derived(() => {
    const classesMap = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      right: 'top-1/2 left-full transform -translate-y-1/2 ml-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'top-1/2 right-full transform -translate-y-1/2 mr-2'
    };
    return classesMap[position];
  });

  let arrowClasses = $derived(() => {
    const classesMap = {
      top: 'absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800',
      right: 'absolute top-1/2 left-0 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800',
      bottom: 'absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800',
      left: 'absolute top-1/2 right-0 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800'
    };
    return classesMap[position];
  });
</script>

{#if internalVisible}
  <div class={`absolute z-50 ${positionClasses} bg-gray-800 text-white text-xs rounded py-1 px-2 w-max max-w-xs break-words`} {...restProps}>
    {content}
    <div class={arrowClasses}></div>
  </div>
{/if}