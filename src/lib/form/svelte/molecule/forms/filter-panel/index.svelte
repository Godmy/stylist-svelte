<script lang="ts">
  import { Button } from '$stylist';
  import Checkbox from '$stylist/control/svelte/atom/toggles/checkbox/index.svelte';
  import Select from '$stylist/control/svelte/molecule/selectors/selector/index.svelte';
  import type { FilterPanelProps } from '$stylist/form/type/struct/filter-panel';
  import { createFilterPanelState } from '$stylist/form/function/state/filter-panel';
  import { handleFilterChange } from '$stylist/form/function/script/filter-panel/handle-filter-change';
  import { handleLayoutChange } from '$stylist/form/function/script/filter-panel/handle-layout-change';
  import { handleReset } from '$stylist/form/function/script/filter-panel/handle-reset';

  const { onFilterChange, onReset, ...rest }: FilterPanelProps = $props();
  const state = createFilterPanelState(rest);
</script>

<style>
  .filter-panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-primary);
  }

  .filter-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .filter-header {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-3);
    color: var(--color-text-primary);
    padding-bottom: var(--spacing-1);
    border-bottom: 1px solid var(--color-border-primary);
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .filter-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .layout-controls {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }


</style>

<div class={state.rootClass}>
  <div class={state.filterSectionClass}>
    <div class={state.filterHeaderClass}>Node Types</div>
    <div class={state.filterOptionsClass}>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showObjects"
          label="Show Objects"
          checked={state.objectsVisible}
          onchange={(event) => {
            state.objectsVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showInterfaces"
          label="Show Interfaces"
          checked={state.interfacesVisible}
          onchange={(event) => {
            state.interfacesVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showUnions"
          label="Show Unions"
          checked={state.unionsVisible}
          onchange={(event) => {
            state.unionsVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showEnums"
          label="Show Enums"
          checked={state.enumsVisible}
          onchange={(event) => {
            state.enumsVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showScalars"
          label="Show Scalars"
          checked={state.scalarsVisible}
          onchange={(event) => {
            state.scalarsVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
      <div class={state.filterItemClass}>
        <Checkbox
          id="showInputs"
          label="Show Inputs"
          checked={state.inputsVisible}
          onchange={(event) => {
            state.inputsVisible = (event.target as HTMLInputElement).checked;
            handleFilterChange(state, onFilterChange);
          }}
        />
      </div>
    </div>
  </div>

  <div class={state.filterSectionClass}>
    <div class={state.filterHeaderClass}>Layout</div>
    <div class={state.layoutControlsClass}>
      <Select
        id="layout-select"
        label="Select Layout"
        value={state.currentLayout}
        oninput={(e) => handleLayoutChange(e, state, onFilterChange)}
        options={[
            { value: 'force-directed', label: 'Force Directed' },
            { value: 'hierarchical', label: 'Hierarchical' },
            { value: 'circular', label: 'Circular' },
            { value: 'grid', label: 'Grid' }
        ]}
      />
    </div>
  </div>

  <Button
    variant="ghost"
    size="sm"
    class="reset-btn"
    style="align-self: flex-start; margin-top: var(--spacing-2);"
    onclick={() => handleReset(state, onFilterChange, onReset)}
  >
    Reset Filters
  </Button>
</div>

