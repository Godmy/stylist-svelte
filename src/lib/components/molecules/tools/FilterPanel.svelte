<script lang="ts">
  import Button from '../../atoms/controls/Button.svelte';
  import Checkbox from '../../atoms/controls/Checkbox.svelte';
  import Select from '../../atoms/controls/Select.svelte';
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    showObjects = true,
    showInterfaces = true,
    showUnions = true,
    showEnums = true,
    showScalars = true,
    showInputs = true,
    layout = 'force-directed'
  }: {
    showObjects?: boolean;
    showInterfaces?: boolean;
    showUnions?: boolean;
    showEnums?: boolean;
    showScalars?: boolean;
    showInputs?: boolean;
    layout?: 'force-directed' | 'hierarchical' | 'circular' | 'grid';
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    filterChange: {
      showObjects: boolean;
      showInterfaces: boolean;
      showUnions: boolean;
      showEnums: boolean;
      showScalars: boolean;
      showInputs: boolean;
      layout: string;
    };
    reset: {};
  }>();

  // Local state
  let objectsVisible = $state(showObjects);
  let interfacesVisible = $state(showInterfaces);
  let unionsVisible = $state(showUnions);
  let enumsVisible = $state(showEnums);
  let scalarsVisible = $state(showScalars);
  let inputsVisible = $state(showInputs);
  let currentLayout = $state(layout);

  // Handle filter changes
  function handleFilterChange() {
    dispatch('filterChange', {
      showObjects: objectsVisible,
      showInterfaces: interfacesVisible,
      showUnions: unionsVisible,
      showEnums: enumsVisible,
      showScalars: scalarsVisible,
      showInputs: inputsVisible,
      layout: currentLayout
    });
  }

  // Handle layout change
  function handleLayoutChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    currentLayout = target.value as any;
    handleFilterChange();
  }

  // Handle reset
  function handleReset() {
    objectsVisible = true;
    interfacesVisible = true;
    unionsVisible = true;
    enumsVisible = true;
    scalarsVisible = true;
    inputsVisible = true;
    currentLayout = 'force-directed';
    handleFilterChange();
    dispatch('reset', {});
  }

  // Initialize
  $effect(() => {
    handleFilterChange();
  });
</script>

<style>
  .filter-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
  }

  .filter-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .filter-header {
    font-weight: 600;
    font-size: 0.875rem;
    color: #1e293b;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .filter-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .layout-controls {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }


</style>

<div class="filter-panel">
  <div class="filter-section">
    <div class="filter-header">Node Types</div>
    <div class="filter-options">
      <div class="filter-item">
        <Checkbox 
          id="showObjects"
          label="Show Objects"
          bind:checked={objectsVisible} 
          onchange={handleFilterChange}
        />
      </div>
      <div class="filter-item">
        <Checkbox 
          id="showInterfaces"
          label="Show Interfaces"
          bind:checked={interfacesVisible} 
          onchange={handleFilterChange}
        />
      </div>
      <div class="filter-item">
        <Checkbox 
          id="showUnions"
          label="Show Unions"
          bind:checked={unionsVisible} 
          onchange={handleFilterChange}
        />
      </div>
      <div class="filter-item">
        <Checkbox 
          id="showEnums"
          label="Show Enums"
          bind:checked={enumsVisible} 
          onchange={handleFilterChange}
        />
      </div>
      <div class="filter-item">
        <Checkbox 
          id="showScalars"
          label="Show Scalars"
          bind:checked={scalarsVisible} 
          onchange={handleFilterChange}
        />
      </div>
      <div class="filter-item">
        <Checkbox 
          id="showInputs"
          label="Show Inputs"
          bind:checked={inputsVisible} 
          onchange={handleFilterChange}
        />
      </div>
    </div>
  </div>
  
  <div class="filter-section">
    <div class="filter-header">Layout</div>
    <div class="layout-controls">
      <Select 
        id="layout-select"
        label="Select Layout"
        bind:value={currentLayout} 
        oninput={handleLayoutChange}
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
    style="align-self: flex-start; margin-top: 0.5rem;"
    onclick={handleReset}
  >
    Reset Filters
  </Button>
</div>