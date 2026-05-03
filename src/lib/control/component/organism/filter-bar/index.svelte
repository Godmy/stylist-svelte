<script lang="ts">
  import { Switch, Tag } from '$stylist/control';
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

<section class={`c-filter-bar ${state.className}`} {...restProps}>
  <div class="filter-head">
    <h3 class="filter-title">Filters</h3>
    {#if state.hasActiveFilters}
      <span class="filter-badge">Active</span>
    {/if}
    <button type="button" class="filter-clear" onclick={state.clearFilters}>
      Clear
    </button>
  </div>

  {#if state.toggles.length > 0}
    <div class="filter-toggles">
      {#each state.toggles as toggle (toggle.id)}
        <div class="filter-toggle-item">
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
    <div class="filter-tags">
      {#each state.tags as tag (tag.id)}
        <button type="button" class="filter-tag-btn" onclick={() => state.toggleTag(tag.id)}>
          <Tag
            text={tag.label}
            variant={state.activeTags.has(tag.id) ? 'primary' : 'neutral'}
            closable={false}
          />
        </button>
      {/each}
    </div>
  {/if}

  {#if state.range != null}
    <div class="filter-range">
      <label for={`filter-range-${state.range.id}`} class="filter-range-label">
        {state.range.label}
      </label>
      <div class="filter-range-row">
        <input
          type="range"
          id={`filter-range-${state.range.id}`}
          class="filter-range-input"
          min={state.range.min}
          max={state.range.max}
          step={state.range.step ?? 1}
          bind:value={state.rangeValue}
        />
        <span class="filter-range-value">
          {state.rangeValue}{state.range.unit ? ` ${state.range.unit}` : ''}
        </span>
      </div>
    </div>
  {/if}
</section>

<style>
  .c-filter-bar {
    border-radius: 12px;
    border: 1px solid var(--color-border-primary);
    background: var(--color-background-primary);
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .filter-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .filter-title {
    margin: 0;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-secondary);
  }

  .filter-badge {
    border-radius: 999px;
    background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
    color: var(--color-primary-600);
    padding: 0.15rem 0.55rem;
    font-size: 11px;
    font-weight: 500;
  }

  .filter-clear {
    margin-left: auto;
    background: none;
    border: none;
    padding: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-primary-600);
    cursor: pointer;
  }

  .filter-clear:hover {
    color: var(--color-primary-700);
  }

  .filter-clear:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .filter-toggles {
    margin-top: 1rem;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  .filter-toggle-item {
    border-radius: 8px;
    border: 1px solid var(--color-border-primary);
    padding: 0.5rem 0.75rem;
  }

  .filter-tags {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .filter-tag-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .filter-range {
    margin-top: 1rem;
  }

  .filter-range-label {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 0.35rem;
  }

  .filter-range-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .filter-range-input {
    flex: 1;
    height: 4px;
    background: var(--color-background-tertiary);
    border-radius: 999px;
    appearance: none;
    cursor: pointer;
  }

  .filter-range-input::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-primary-500);
    border: 2px solid var(--color-background-primary);
    box-shadow: 0 0 0 1px var(--color-primary-500);
  }

  .filter-range-value {
    font-size: 12px;
    color: var(--color-text-secondary);
    min-width: 40px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
</style>
