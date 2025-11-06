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
      lineWidth: 2,
      strokeColor: '#000000',
      tool: 'pen',
      mode: 'draw'
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
  .pen-tool {
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
  
  input[type="color"] {
    width: 50px;
    height: 32px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<div class="pen-tool">
  <div class="tool-controls">
    <div class="control-group">
      <label for="line-width">Толщина линии: {currentOptions.lineWidth}px</label>
      <input 
        id="line-width"
        type="range" 
        min="1" 
        max="50" 
        bind:value={currentOptions.lineWidth} 
        oninput={handleChange}
      />
    </div>
    
    <div class="control-group">
      <label for="stroke-color">Цвет кисти:</label>
      <input 
        id="stroke-color"
        type="color" 
        bind:value={currentOptions.strokeColor} 
        oninput={handleChange}
      />
    </div>
  </div>
</div>