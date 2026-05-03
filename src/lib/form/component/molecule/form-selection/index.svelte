<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { createFormSelectionState } from '$stylist/form/function/state/form-selection';
  import { toggleCollapsed } from '$stylist/form/function/script/form-selection/toggle-collapsed';
  import type { FormSelectionProps } from '$stylist/form/type/struct/form-selection';

  const props: FormSelectionProps = $props();
  const state = createFormSelectionState(props);
  const ChevronDown = 'chevron-down';
</script>

<section class={state.sectionClasses} {...props}>
  {#if state.showHeader}
    <header
      class="section-header flex items-start justify-between pb-4 {props.collapsible ? 'cursor-pointer' : ''}"
      onclick={() => toggleCollapsed(state, props.collapsible ?? false)}
      role={props.collapsible ? 'button' : undefined}
      aria-expanded={props.collapsible ? !state.isCollapsed : undefined}
    >
      <div class="header-content flex items-start gap-3">
        <h2 class="{state.titleClass} flex items-center">
          {props.title}
          {#if props.required}
            <span class={state.requiredMarkClass} aria-label="required section">*</span>
          {/if}
        </h2>
      </div>

      {#if props.collapsible}
        <button
          class={state.collapseButtonClass}
          aria-label={state.isCollapsed ? `Expand ${props.title} section` : `Collapse ${props.title} section`}
          onclick={(e) => {
            e.stopPropagation();
            toggleCollapsed(state, true);
          }}
        >
          <BaseIcon name={ChevronDown}
            class={state.iconClass}
          />
        </button>
      {/if}
    </header>
  {/if}

  {#if props.description}
    <p class="section-description text-sm text-[var(--color-text-secondary)] mb-4">
      {props.description}
    </p>
  {/if}

  {#if !state.isCollapsed || !props.collapsible}
    <div class="section-content">
      {#if props.children}{@render props.children()}{/if}
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




