<script lang="ts">
  interface DrawingOptions {
    color?: string;
    lineWidth: number;
    tool: string;
    strokeColor: string;
    mode: string;
  }

  // Props
  let { 
    options = {
      lineWidth: 10,
      strokeColor: '#FFFFFF',
      tool: 'eraser',
      mode: 'erase'
    } as DrawingOptions,
    onChange = (newOptions: DrawingOptions) => {}
  } = $props();
  
  // Local state
  let currentOptions = $state({ ...options });
  
  // Update local state when options prop changes
  $effect(() => {
    currentOptions = { ...options };
  });
  
  function handleChange() {
    onChange(currentOptions);
  }
</script>

<style>
  .eraser-tool {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background-color: #f8f9fa;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .tool-controls {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  
  .control-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
  }
  
  input[type="range"] {
    width: 100%;
  }
</style>

<div class="eraser-tool">
  <div class="tool-controls">
    <div class="control-group">
      <label for="eraser-size">Размер ластика: {currentOptions.lineWidth}px</label>
      <input 
        id="eraser-size"
        type="range" 
        min="5" 
        max="100" 
        bind:value={currentOptions.lineWidth} 
        oninput={handleChange}
      />
    </div>
  </div>
</div>