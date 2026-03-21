<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';


  type Props = {
    title?: string;
    description?: string;
    collapsible?: boolean;
    initiallyCollapsed?: boolean;
    required?: boolean;
    border?: boolean;
    padding?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    children: Snippet;
  } & InteractionHTMLAttributes<HTMLElement>;

  let {
    title,
    description,
    collapsible = false,
    initiallyCollapsed = false,
    required = false,
    border = false,
    padding = false,
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  let isCollapsed = $state(initiallyCollapsed);

  function toggleCollapsed() {
    if (collapsible) {
      isCollapsed = !isCollapsed;
    }
  }

  let sectionClasses = $derived(`
    form-section
    ${border ? 'border border-[var(--color-border-primary)] rounded-lg' : ''}
    ${padding ? 'p-6' : 'p-0'}
    ${className}
  `);

  let showHeader = $derived(!!title || collapsible);
</script>

<section class={sectionClasses} {...restProps}>
  {#if showHeader}
    <header
      class="section-header flex items-start justify-between pb-4 {collapsible ? 'cursor-pointer' : ''}"
      onclick={collapsible ? toggleCollapsed : undefined}
      role={collapsible ? 'button' : undefined}
      aria-expanded={collapsible ? !isCollapsed : undefined}
    >
      <div class="header-content flex items-start gap-3">
        <h2 class="text-lg font-medium text-[var(--color-text-primary)] flex items-center">
          {title}
          {#if required}
            <span class="text-[var(--color-danger-500)] ml-1" aria-label="required section">*</span>
          {/if}
        </h2>
      </div>

      {#if collapsible}
        <button
          class="mt-1 flex items-center justify-center w-6 h-6 rounded-full hover:bg-[var(--color-background-secondary)] focus:outline-none"
          aria-label={isCollapsed ? `Expand ${title} section` : `Collapse ${title} section`}
          onclick={(e) => {
            e.stopPropagation();
            toggleCollapsed();
          }}
        >
          <BaseIcon name={ChevronDown}
            class="w-4 h-4 transform transition-transform text-[var(--color-text-secondary)] {isCollapsed ? 'rotate-180' : ''}"
          />
        </button>
      {/if}
    </header>
  {/if}

  {#if description}
    <p class="section-description text-sm text-[var(--color-text-secondary)] mb-4">
      {description}
    </p>
  {/if}

  {#if !isCollapsed || !collapsible}
    <div class="section-content">
      {@render children()}
    </div>
  {/if}
</section>

<style>
  .form-section {
    width: 100%;
    background-color: white;
  }

  .section-header {
    width: 100%;
  }

  .section-content {
    width: 100%;
  }

  .section-description {
    width: 100%;
  }
</style>




