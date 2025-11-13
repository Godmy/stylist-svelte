<script lang="ts">
  import { SimpleTooltip } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let content = $state('Это подсказка');
  let position: 'top' | 'right' | 'bottom' | 'left' = $state('top');

  const controls: ControlConfig[] = [
    { name: 'content', type: 'text', defaultValue: 'Это подсказка' },
    { name: 'position', type: 'select', options: ['top', 'right', 'bottom', 'left'], defaultValue: 'top' }
  ];
</script>

# Overlays

## SimpleTooltip

<Story id="simpletooltip-story" title="SimpleTooltip" component={SimpleTooltip} {controls}>
  
  <div class="space-y-4 p-8">
    <div class="flex justify-center items-center h-32">
      <SimpleTooltip content={content} position={position}>
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Наведи на меня
        </button>
      </SimpleTooltip>
    </div>
    
    <div class="space-y-4">
      <div>
        <label>Content: <input type="text" bind:value={content} /></label>
      </div>
      
      <div>
        <label>
          Position: 
          <select bind:value={position}>
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </label>
      </div>
    </div>
  </div>
</Story>