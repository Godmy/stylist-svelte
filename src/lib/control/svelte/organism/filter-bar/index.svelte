<script lang="ts">
  import { Switch, Tag } from '$stylist';
  import type { FilterBarProps } from '$stylist/control/type/struct/filter-bar-props';
  import { createFilterBarState } from '$stylist/control/function/state/filter-bar';

  let props: FilterBarProps = $props();
  const state = createFilterBarState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      toggles: _toggles,
      tags: _tags,
      range: _range,
      onClear: _onClear,
      ...rest
    } = props;
    return rest;
  });
</script>

<section class={`c-filter-bar rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm ${state.className}`}>
  <div class="flex flex-wrap items-center gap-2">
    <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
      Filters
    </h3>
    {#if state.hasActiveFilters}
      <span class="rounded-full bg-[var(--color-primary-50)] px-2 py-0.5 text-xs font-medium text-[var(--color-primary-600)]">
        Active
      </span>
    {/if}
    <button
      type="button"
      class="ml-auto text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
      onclick={state.clearFilters}
    >
      Clear
    </button>
  </div>

  {#if state.toggles.length > 0}
    <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {#each state.toggles as toggle (toggle.id)}
        <div class="rounded-lg border border-[var(--color-border-primary)] px-3 py-2">
          <Switch
            id={`filter-toggle-${toggle.id}`}
            label={toggle.label}
            description={toggle.description}
            checked={state.toggleState[toggle.id]}
            onchange={(e) => {
              const target = e.target as HTMLInputElement;
              state.toggleState = { ...state.toggleState, [toggle.id]: target.checked };
            }}
          />
        </div>
      {/each}
    </div>
  {/if}

  {#if state.tags.length > 0}
    <div class="mt-4 flex flex-wrap gap-2">
      {#each state.tags as tag (tag.id)}
        <button type="button" class="cursor-pointer" onclick={() => state.toggleTag(tag.id)}>
          <Tag
            text={tag.label}
            variant={state.activeTags.has(tag.id) ? 'primary' : 'neutral'}
            closable={false}
          />
        </button>
      {/each}
    </div>
  {/if}

  {#if state.range}
    <div class="mt-4">
      <label for={`filter-range-${state.range.id}`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
        {state.range.label}
      </label>
      <div class="flex items-center gap-3">
        <input
          type="range"
          id={`filter-range-${state.range.id}`}
          class="w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer"
          min={state.range.min}
          max={state.range.max}
          step={state.range.step ?? 1}
          bind:value={state.rangeValue}
        />
        <span class="text-sm text-[var(--color-text-secondary)] min-w-[40px]">{state.rangeValue}{state.range.unit ? ` ${state.range.unit}` : ''}</span>
      </div>
      {#if state.range.unit}
        <p class="mt-1 text-xs text-[var(--color-text-secondary)]">Units: {state.range.unit}</p>
      {/if}
    </div>
  {/if}
</section>






