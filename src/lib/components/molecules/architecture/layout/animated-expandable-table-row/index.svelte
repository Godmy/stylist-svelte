<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';
const ChevronUp = 'chevron-up';


  type Props = {
    expanded?: boolean;
    expandable?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    colspan?: number;
    children: Snippet;
    details: Snippet;
  } & HTMLAttributes<HTMLTableRowElement>;

  let {
    expanded = false,
    expandable = true,
    expandIcon,
    collapseIcon,
    colspan = 2,
    class: className = '',
    children,
    details,
    ...restProps
  }: Props = $props();

  let isExpanded = $state(expanded);

  function toggle() {
    if (expandable) {
      isExpanded = !isExpanded;
    }
  }

  $effect(() => {
    isExpanded = expanded;
  });
</script>

<!-- Parent table row -->
<tr {...restProps} class="parent-row {className}">
  <!-- Cell for expand icon -->
  {#if expandable}
    <td class="expand-cell px-6 py-4 whitespace-nowrap text-sm text-[var(--color-text-secondary)] w-12">
      <button
        class="expand-toggle focus:outline-none"
        onclick={toggle}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Collapse' : 'Expand'}
      >
        {#if isExpanded}
          {#if collapseIcon}
            {@html collapseIcon}
          {:else}
            <BaseIcon name={ChevronUp} class="h-5 w-5 text-[var(--color-text-secondary)]" />
          {/if}
        {:else}
          {#if expandIcon}
            {@html expandIcon}
          {:else}
            <BaseIcon name={ChevronDown} class="h-5 w-5 text-[var(--color-text-secondary)]" />
          {/if}
        {/if}
      </button>
    </td>
  {/if}

  <!-- Child slot for main row cells -->
  {@render children()}
</tr>

<!-- Expanded row with details -->
{#if isExpanded}
  <tr class="expanded-row">
    <td
      colspan={expandable ? colspan : colspan - 1}
      class="expanded-cell px-6 py-4 bg-[var(--color-background-secondary)] text-sm text-[var(--color-text-primary)]"
    >
      <div class="details-content p-4">
        {@render details()}
      </div>
    </td>
  </tr>
{/if}

<style>
  .expand-toggle {
    transition: transform var(--duration-200) var(--animation-ease);
  }

  .expand-toggle:active {
    transform: scale(0.95);
  }

  .expanded-cell {
    border-top: none;
  }

  .details-content {
    animation: slideDown var(--duration-300) var(--animation-ease-out);
  }

  @keyframes slideDown {
    from {
      max-height: var(--size-0);
      opacity: var(--opacity-0);
      transform: translateY(-10px);
    }
    to {
      max-height: 500px;
      opacity: var(--opacity-100);
      transform: translateY(0);
    }
  }
</style>






