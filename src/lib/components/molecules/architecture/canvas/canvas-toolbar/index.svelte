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
      strokeColor: '#000000',
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
    gap: 12px;
    padding: 16px;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
  }

  .tool-selector {
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }

  .tool-btn {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
  }

  .tool-btn:hover {
    background-color: #e9ecef;
  }

  .tool-btn.active {
    background-color: #2563eb;
    color: white;
    border-color: #2563eb;
  }

  .action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .action-btn {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
  }

  .action-btn:hover {
    background-color: #e9ecef;
  }

  .tool-specific-options {
    margin-top: 12px;
  }
  
  .option-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
  }
  
  .option-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: #495057;
  }
  
  .option-input {
    width: 100%;
    margin-top: 4px;
  }
  
  .option-value {
    font-size: 0.75rem;
    color: #6c757d;
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
