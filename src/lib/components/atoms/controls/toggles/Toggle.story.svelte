<script lang="ts">
  import Toggle from './Toggle.svelte';
  import { onMount } from 'svelte';

  let toggle1 = $state(false);
  let toggle2 = $state(true);
  let toggle3 = $state(false);
</script>

<div class="p-4 space-y-6">
  <h1 class="text-xl font-bold mb-4">Toggle Component</h1>
  
  <div class="space-y-4">
    <div>
      <h2 class="font-semibold mb-2">Small</h2>
      <div class="flex items-center space-x-3">
        <Toggle bind:checked={toggle1} size="sm" />
        <span>Значение: {toggle1 ? 'Включено' : 'Выключено'}</span>
      </div>
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Medium (default)</h2>
      <div class="flex items-center space-x-3">
        <Toggle bind:checked={toggle2} size="md" />
        <span>Значение: {toggle2 ? 'Включено' : 'Выключено'}</span>
      </div>
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Large</h2>
      <div class="flex items-center space-x-3">
        <Toggle bind:checked={toggle3} size="lg" />
        <span>Значение: {toggle3 ? 'Включено' : 'Выключено'}</span>
      </div>
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Disabled</h2>
      <div class="flex items-center space-x-3">
        <Toggle disabled size="md" />
        <span>Отключено</span>
      </div>
    </div>
  </div>
</div>