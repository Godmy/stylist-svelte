<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

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
    <td class="expand-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-12">
      <button
        class="expand-toggle focus:outline-none"
        onclick={toggle}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Collapse' : 'Expand'}
      >
        {#if isExpanded}
          {@html collapseIcon || '<svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>'}
        {:else}
          {@html expandIcon || '<svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>'}
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
      class="expanded-cell px-6 py-4 bg-gray-50 text-sm text-gray-700"
    >
      <div class="details-content p-4">
        {@render details()}
      </div>
    </td>
  </tr>
{/if}

<style>
  .expand-toggle {
    transition: transform 0.2s ease;
  }

  .expand-toggle:active {
    transform: scale(0.95);
  }

  .expanded-cell {
    border-top: none;
  }

  .details-content {
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      max-height: 500px;
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
