<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  const tooltipPlacementClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    'top-start': 'bottom-full left-0 mb-2',
    'top-end': 'bottom-full right-0 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    'bottom-start': 'top-full left-0 mt-2',
    'bottom-end': 'top-full right-0 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    'left-start': 'right-full top-0 mr-2',
    'left-end': 'right-full bottom-0 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    'right-start': 'left-full top-0 ml-2',
    'right-end': 'left-full bottom-0 ml-2',
    auto: 'top-full left-1/2 -translate-x-1/2 mt-2',
    'auto-start': 'top-full left-0 mt-2',
    'auto-end': 'top-full right-0 mt-2'
  } as const;

  const arrowPlacementClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
    'top-start': 'top-full left-4 -mt-1',
    'top-end': 'top-full right-4 -mt-1',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 mt-1',
    'bottom-start': 'bottom-full left-4 mt-1',
    'bottom-end': 'bottom-full right-4 mt-1',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
    'left-start': 'left-full top-4 -ml-1',
    'left-end': 'left-full bottom-4 -ml-1',
    right: 'right-full top-1/2 -translate-y-1/2 mr-1',
    'right-start': 'right-full top-4 mr-1',
    'right-end': 'right-full bottom-4 mr-1',
    auto: 'bottom-full left-1/2 -translate-x-1/2 mt-1',
    'auto-start': 'bottom-full left-4 mt-1',
    'auto-end': 'bottom-full right-4 mt-1'
  } as const;

  type Placement = keyof typeof tooltipPlacementClasses;

  type Props = {
    content: string | Snippet;
    placement?: Placement;
    trigger?: 'hover' | 'click' | 'focus';
    show?: boolean;
    class?: string;
    tooltipClass?: string;
    arrowClass?: string;
    disabled?: boolean;
    delay?: number; // Delay in ms before showing the tooltip
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    content,
    placement = 'top',
    trigger = 'hover',
    show = false,
    class: className = '',
    tooltipClass = '',
    arrowClass = '',
    disabled = false,
    delay = 0,
    children,
    ...restProps
  }: Props = $props();

  let isVisible = $state(show);
  let referenceRef = $state<HTMLElement | null>(null);
  let tooltipRef = $state<HTMLElement | null>(null);
  let timeoutId: number | null = null;

  let tooltipPlacementClass = $derived(
    tooltipPlacementClasses[placement] ?? tooltipPlacementClasses.top
  );
  let arrowPlacementClass = $derived(
    arrowPlacementClasses[placement] ?? arrowPlacementClasses.top
  );

  function showTooltip() {
    if (disabled) return;
    
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      isVisible = true;
    }, delay);
  }

  function hideTooltip() {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
    isVisible = false;
  }

  // Handle clicks outside to close the tooltip when trigger is 'click'
  $effect(() => {
    if (trigger === 'click' && isVisible) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          referenceRef &&
          tooltipRef &&
          !referenceRef.contains(event.target as Node) &&
          !tooltipRef.contains(event.target as Node)
        ) {
          hideTooltip();
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<span class={`relative inline-block ${className}`} {...restProps}>
  <span
    bind:this={referenceRef}
    class="cursor-pointer"
    onmouseenter={() => trigger === 'hover' && showTooltip()}
    onmouseleave={() => trigger === 'hover' && hideTooltip()}
    onclick={(e) => {
      if (trigger === 'click') {
        e.stopPropagation();
        isVisible ? hideTooltip() : showTooltip();
      }
    }}
    onfocus={() => trigger === 'focus' && showTooltip()}
    onblur={() => trigger === 'focus' && hideTooltip()}
    onkeydown={(e) => {
      if (trigger === 'click' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        isVisible ? hideTooltip() : showTooltip();
      }
    }}
    role="button"
    tabindex="0"
    aria-haspopup="true"
    aria-expanded={trigger === 'click' ? isVisible : undefined}
    aria-disabled={disabled ? true : undefined}
  >
    {#if children}
      {@render children()}
    {/if}
  </span>

  {#if isVisible}
    <div
      bind:this={tooltipRef}
      role="tooltip"
      class={`absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm ${tooltipClass} ${tooltipPlacementClass}`}
    >
      {#if typeof content === 'string'}
        {content}
      {:else}
        {@render content()}
      {/if}
      <div
        class={`absolute bg-gray-900 w-2 h-2 rotate-45 z-[-1] ${arrowClass} ${arrowPlacementClass}`}
      ></div>
    </div>
  {/if}
</span>
