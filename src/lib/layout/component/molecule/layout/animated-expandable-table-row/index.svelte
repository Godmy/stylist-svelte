<script lang="ts">
  import { createAnimatedExpandableTableRowState } from '$stylist/layout/function/state/animated-expandable-table-row';
  import type { AnimatedExpandableTableRowProps } from '$stylist/layout/type/struct/animated-expandable-table-row';
  import { Icon as BaseIcon } from '$stylist';
  import { TOKEN_LAYOUT_ICON } from '$stylist/layout/const/enum/icon';

  let props: AnimatedExpandableTableRowProps = $props();
  const state = createAnimatedExpandableTableRowState(props);
</script>

<!-- Parent table row -->
<tr {...state.restProps} class="parent-row {state.className}">
  <!-- Cell for expand icon -->
  {#if state.expandable}
    <td class="expand-cell px-6 py-4 whitespace-nowrap text-sm text-[var(--color-text-secondary)] w-12">
      <button
        class="expand-toggle focus:outline-none"
        onclick={state.toggle}
        aria-expanded={state.isExpanded}
        aria-label={state.isExpanded ? 'Collapse' : 'Expand'}
      >
        {#if state.isExpanded}
          {#if state.collapseIcon}
            {@html state.collapseIcon}
          {:else}
            <BaseIcon name={TOKEN_LAYOUT_ICON.find((icon) => icon === 'chevron-up') ?? 'chevron-up'} class="h-5 w-5 text-[var(--color-text-secondary)]" />
          {/if}
        {:else}
          {#if state.expandIcon}
            {@html state.expandIcon}
          {:else}
            <BaseIcon name={TOKEN_LAYOUT_ICON.find((icon) => icon === 'chevron-down') ?? 'chevron-down'} class="h-5 w-5 text-[var(--color-text-secondary)]" />
          {/if}
        {/if}
      </button>
    </td>
  {/if}

  <!-- Child slot for main row cells -->
  {#if state.children}{@render state.children()}{/if}
</tr>

<!-- Expanded row with details -->
{#if state.isExpanded}
  <tr class="expanded-row">
    <td
      colspan={state.expandable ? state.colspan : state.colspan - 1}
      class="expanded-cell px-6 py-4 bg-[var(--color-background-secondary)] text-sm text-[var(--color-text-primary)]"
    >
      <div class="details-content p-4">
        {@render state.details()}
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
