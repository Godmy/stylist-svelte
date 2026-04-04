<script lang="ts">
  import { Button } from '$stylist';
  import { createEventDispatcher } from 'svelte';

  // Events
  const dispatch = createEventDispatcher<{
    export: { format: 'png' | 'jpeg' | 'svg' | 'pdf'; includeLegend: boolean; includeFilters: boolean };
  }>();

  // Local state
  let exportFormat = $state<'png' | 'jpeg' | 'svg' | 'pdf'>('png');
  let includeLegend = $state(true);
  let includeFilters = $state(true);

  // Handle export
  function handleExport() {
    dispatch('export', {
      format: exportFormat,
      includeLegend,
      includeFilters
    });
  }
</script>

<style>
  .c-export-panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    background-color: var(--color-background-primary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-primary);
    min-width: 300px;
  }

  .panel-header {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-4);
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-2);
  }

  .panel-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .section-title {
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
  }

  .format-options {
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
  }

  .format-option {
    flex: 1;
    text-align: center;
    padding: var(--spacing-2);
    border: 1px solid var(--color-border-secondary);
    border-radius: var(--border-radius-base);
    cursor: pointer;
    transition: all var(--duration-200);
  }

  .format-option:hover {
    background-color: var(--color-background-secondary);
  }

  .format-option.active {
    background-color: var(--color-primary-100);
    border-color: var(--color-primary-500);
    color: var(--color-primary-700);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }
</style>

<div class="c-export-panel">
  <div class="panel-header">Export Visualization</div>

  <div class="panel-section">
    <div class="section-title">Export Format</div>
    <div class="format-options">
      <button
        type="button"
        class={`format-option ${exportFormat === 'png' ? 'active' : ''}`}
        onclick={() => exportFormat = 'png'}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            exportFormat = 'png';
          }
        }}
        aria-label="Export as PNG"
      >
        PNG
      </button>
      <button
        type="button"
        class={`format-option ${exportFormat === 'jpeg' ? 'active' : ''}`}
        onclick={() => exportFormat = 'jpeg'}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            exportFormat = 'jpeg';
          }
        }}
        aria-label="Export as JPEG"
      >
        JPEG
      </button>
      <button
        type="button"
        class={`format-option ${exportFormat === 'svg' ? 'active' : ''}`}
        onclick={() => exportFormat = 'svg'}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            exportFormat = 'svg';
          }
        }}
        aria-label="Export as SVG"
      >
        SVG
      </button>
      <button
        type="button"
        class={`format-option ${exportFormat === 'pdf' ? 'active' : ''}`}
        onclick={() => exportFormat = 'pdf'}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            exportFormat = 'pdf';
          }
        }}
        aria-label="Export as PDF"
      >
        PDF
      </button>
    </div>
  </div>

  <div class="panel-section">
    <div class="section-title">Options</div>
    <div class="checkbox-group">
      <input
        type="checkbox"
        id="include-legend"
        bind:checked={includeLegend}
      />
      <label for="include-legend">Include Legend</label>
    </div>
    <div class="checkbox-group">
      <input
        type="checkbox"
        id="include-filters"
        bind:checked={includeFilters}
      />
      <label for="include-filters">Include Filter Information</label>
    </div>
  </div>

  <Button
    variant="primary"
    class="mt-2"
    onclick={handleExport}
  >
    Export {exportFormat.toUpperCase()}
  </Button>
</div>

