<script lang="ts">
  // Define local types to avoid dependency on global types
  type DrawingTool = 'pen' | 'eraser' | 'select' | 'text' | 'shape';

  interface DrawingOptions {
    lineWidth: number;
    strokeColor: string;
    tool: DrawingTool;
    mode: 'draw' | 'erase';
  }

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{
    'tool-change': { tool: DrawingTool; options: DrawingOptions };
    'clear-canvas': undefined;
    undo: undefined;
    redo: undefined;
    save: undefined;
  }>();

  type Props = {
    selectedTool?: DrawingTool;
    drawingOptions?: DrawingOptions;
  };

  let {
    selectedTool = 'pen' as DrawingTool,
    drawingOptions = {
      lineWidth: 2,
      strokeColor: 'black',
      tool: 'pen',
      mode: 'draw'
    } as DrawingOptions
  } = $props() as Props;

  let currentTool = $state<DrawingTool>(selectedTool);
  let currentOptions = $state<DrawingOptions>({ ...drawingOptions });

  $effect(() => {
    currentTool = selectedTool;
    currentOptions = { ...drawingOptions };
  });

  const selectTool = (tool: DrawingTool) => {
    currentTool = tool;
    currentOptions = { ...currentOptions, tool, mode: tool === 'eraser' ? 'erase' : 'draw' };
    dispatch('tool-change', { tool: currentTool, options: currentOptions });
  };

  const handleOptionsUpdate = (options: DrawingOptions) => {
    currentOptions = { ...options };
    dispatch('tool-change', { tool: currentTool, options: currentOptions });
  };

  export const clearCanvas = () => {
    dispatch('clear-canvas', undefined);
  };
  export const undo = () => {
    dispatch('undo', undefined);
  };
  export const redo = () => {
    dispatch('redo', undefined);
  };
  export const save = () => {
    dispatch('save', undefined);
  };
</script>

<style>
  .canvas-toolbar {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: var(--spacing-4);
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-custom36);
    width: 250px;
  }

  .tool-selector {
    display: flex;
    gap: var(--spacing-2);
    justify-content: space-between;
  }

  .tool-btn {
    flex: 1;
    padding: var(--spacing-2) var(--spacing-3);
    border: 1px solid var(--color-border-secondary);
    border-radius: var(--border-radius-base);
    background-color: var(--color-background-primary);
    cursor: pointer;
    transition: all var(--duration-200);
    font-size: var(--font-size-3);
  }

  .tool-btn:hover {
    background-color: var(--color-background-tertiary);
  }

  .tool-btn.active {
    background-color: var(--color-primary-600);
    color: var(--color-text-inverse);
    border-color: var(--color-primary-600);
  }

  .action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-2);
  }

  .action-btn {
    padding: var(--spacing-2);
    border: 1px solid var(--color-border-secondary);
    border-radius: var(--border-radius-base);
    background-color: var(--color-background-primary);
    cursor: pointer;
    transition: all var(--duration-200);
    font-size: var(--font-size-3);
  }

  .action-btn:hover {
    background-color: var(--color-background-tertiary);
  }

  .tool-specific-options {
    margin-top: var(--spacing-3);
  }
  
  .option-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    margin-bottom: var(--spacing-3);
  }
  
  .option-label {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
  }
  
  .option-input {
    width: 100%;
    margin-top: var(--spacing-1);
  }
  
  .option-value {
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
    text-align: center;
  }
</style>

<div class="canvas-toolbar">
  <div class="tool-selector">
    <button
      class="tool-btn {currentTool === 'pen' ? 'active' : ''}"
      onclick={() => selectTool('pen')}
      type="button"
    >
      Pen
    </button>
    <button
      class="tool-btn {currentTool === 'eraser' ? 'active' : ''}"
      onclick={() => selectTool('eraser')}
      type="button"
    >
      Eraser
    </button>
  </div>

  <div class="tool-specific-options">
    <div class="option-group">
      <label for="line-width" class="option-label">Line width:</label>
      <input 
        id="line-width"
        type="range" 
        min="1" 
        max="20" 
        bind:value={currentOptions.lineWidth} 
        oninput={() => handleOptionsUpdate(currentOptions)}
        class="option-input"
      />
      <span class="option-value">{currentOptions.lineWidth}px</span>
    </div>
    
    <div class="option-group">
      <label for="color-picker" class="option-label">Color:</label>
      <input 
        id="color-picker"
        type="color" 
        bind:value={currentOptions.strokeColor} 
        oninput={() => handleOptionsUpdate(currentOptions)}
        class="option-input"
      />
    </div>
  </div>

  <div class="action-buttons">
    <button class="action-btn" onclick={() => clearCanvas()} type="button">
      Clear
    </button>
    <button class="action-btn" onclick={() => save()} type="button">
      Save
    </button>
    <button class="action-btn" onclick={() => undo()} type="button" disabled>
      Undo
    </button>
    <button class="action-btn" onclick={() => redo()} type="button" disabled>
      Redo
    </button>
  </div>
</div>

