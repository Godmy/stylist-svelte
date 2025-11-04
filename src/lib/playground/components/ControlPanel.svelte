<script lang="ts">
  import { playgroundStore } from '../stores/playground.svelte';

  let currentStory = $derived(playgroundStore.getCurrentStory());
  let controlValues = $derived(playgroundStore.controlValues);

  function updateValue(name: string, value: any) {
    playgroundStore.updateControl(name, value);
  }
</script>

<div class="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
    <h3 class="text-sm font-semibold">Controls</h3>
    <button
      class="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      onclick={() => playgroundStore.toggleControls()}
      aria-label="Close controls"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <div class="p-4 space-y-4 max-h-80 overflow-y-auto">
    {#if currentStory?.controls && currentStory.controls.length > 0}
      {#each currentStory.controls as control}
        <div class="space-y-2">
          <label class="block text-sm font-medium" for={control.name}>
            {control.name}
            {#if control.description}
              <span class="block text-xs text-gray-500 mt-0.5">{control.description}</span>
            {/if}
          </label>

          {#if control.type === 'text'}
            <input
              type="text"
              id={control.name}
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              value={controlValues[control.name] || ''}
              oninput={(e) => updateValue(control.name, e.currentTarget.value)}
            />
          {:else if control.type === 'number'}
            <input
              type="number"
              id={control.name}
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              value={controlValues[control.name] || 0}
              min={control.min}
              max={control.max}
              step={control.step}
              oninput={(e) => updateValue(control.name, Number(e.currentTarget.value))}
            />
          {:else if control.type === 'boolean'}
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={controlValues[control.name] || false}
                onchange={(e) => updateValue(control.name, e.currentTarget.checked)}
              />
              <span class="text-sm">Enabled</span>
            </label>
          {:else if control.type === 'select'}
            <select
              id={control.name}
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              value={controlValues[control.name]}
              onchange={(e) => updateValue(control.name, e.currentTarget.value)}
            >
              {#if control.options}
                {#each control.options as option}
                  <option value={option}>{option}</option>
                {/each}
              {/if}
            </select>
          {:else if control.type === 'color'}
            <input
              type="color"
              id={control.name}
              class="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              value={controlValues[control.name] || '#000000'}
              oninput={(e) => updateValue(control.name, e.currentTarget.value)}
            />
          {:else if control.type === 'range'}
            <div class="flex items-center gap-3">
              <input
                type="range"
                id={control.name}
                class="flex-1"
                value={controlValues[control.name] || control.min || 0}
                min={control.min}
                max={control.max}
                step={control.step}
                oninput={(e) => updateValue(control.name, Number(e.currentTarget.value))}
              />
              <span class="text-sm font-medium w-12 text-right">{controlValues[control.name]}</span>
            </div>
          {/if}
        </div>
      {/each}
    {:else}
      <div class="flex items-center justify-center h-32 text-gray-500 text-sm">
        <p>No controls available for this story</p>
      </div>
    {/if}
  </div>
</div>
