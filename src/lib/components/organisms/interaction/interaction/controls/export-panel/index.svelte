<script lang="ts">
  import { Button } from '$stylist/components/atoms';
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
    gap: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    min-width: 300px;
  }

  .panel-header {
    font-weight: 600;
    font-size: 1.125rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  .panel-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-title {
    font-weight: 500;
    font-size: 0.875rem;
    color: #475569;
  }

  .format-options {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .format-option {
    flex: 1;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .format-option:hover {
    background-color: #f1f5f9;
  }

  .format-option.active {
    background-color: #dbeafe;
    border-color: #3b82f6;
    color: #1d4ed8;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

