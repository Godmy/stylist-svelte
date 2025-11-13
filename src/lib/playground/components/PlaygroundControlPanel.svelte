<script lang="ts">
  import { playgroundStore } from '../stores/playground.svelte';
  import type { ControlConfig } from '../types';
  import { RotateCcw } from 'lucide-svelte';

  // Get current story and its controls
  const currentStory = $derived(playgroundStore.getCurrentStory());
  const controls = $derived(currentStory?.controls || []);
  const controlValues = $derived(playgroundStore.controlValues);

  function handleControlChange(name: string, value: any) {
    playgroundStore.updateControl(name, value);
  }

  function resetToDefaults() {
    const story = playgroundStore.getCurrentStory();
    if (story?.controls) {
      story.controls.forEach(control => {
        playgroundStore.updateControl(control.name, control.defaultValue);
      });
    }
  }
</script>

<div class="controls-panel p-6 h-full overflow-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <div class="flex items-center justify-between mb-6 pb-3 border-b-2 border-gray-200 dark:border-gray-700">
    <h3 class="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
      Controls
    </h3>
    {#if controls.length > 0}
      <button
        onclick={resetToDefaults}
        class="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 dark:hover:from-purple-800/40 dark:hover:to-pink-800/40 text-purple-700 dark:text-purple-300 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
        title="Reset to defaults"
      >
        <RotateCcw class="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
        Reset
      </button>
    {/if}
  </div>

  {#if controls.length === 0}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      No controls available for this component.
    </p>
  {:else}
    <div class="space-y-4">
      {#each controls as control}
        <div class="control-group">
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" for={control.name}>
            {control.name}
            {#if control.description}
              <span class="text-gray-500 dark:text-gray-400 font-normal ml-1">
                - {control.description}
              </span>
            {/if}
          </label>

          {#if control.type === 'text'}
            <input
              type="text"
              id={control.name}
              value={controlValues[control.name] ?? control.defaultValue ?? ''}
              oninput={(e) => handleControlChange(control.name, e.currentTarget.value)}
              class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={String(control.defaultValue || '')}
            />

          {:else if control.type === 'number' || control.type === 'range'}
            <div class="space-y-2">
              <input
                type="range"
                id={control.name}
                value={controlValues[control.name] ?? control.defaultValue ?? 0}
                min={control.min ?? 0}
                max={control.max ?? 100}
                step={control.step ?? 1}
                oninput={(e) => handleControlChange(control.name, Number(e.currentTarget.value))}
                class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{control.min ?? 0}</span>
                <span class="font-mono font-semibold text-gray-900 dark:text-white">
                  {controlValues[control.name] ?? control.defaultValue ?? 0}
                </span>
                <span>{control.max ?? 100}</span>
              </div>
            </div>

          {:else if control.type === 'boolean'}
            <label class="flex items-center gap-2 cursor-pointer" for={control.name}>
              <input
                type="checkbox"
                id={control.name}
                checked={controlValues[control.name] ?? control.defaultValue ?? false}
                onchange={(e) => handleControlChange(control.name, e.currentTarget.checked)}
                class="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 cursor-pointer"
              />
              <span class="text-sm text-gray-700 dark:text-gray-300">
                {controlValues[control.name] ?? control.defaultValue ? 'Enabled' : 'Disabled'}
              </span>
            </label>

          {:else if control.type === 'select'}
            <select
              id={control.name}
              value={controlValues[control.name] ?? control.defaultValue}
              onchange={(e) => handleControlChange(control.name, e.currentTarget.value)}
              class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {#if control.options}
                {#each control.options as option}
                  <option value={option}>
                    {option}
                  </option>
                {/each}
              {/if}
            </select>

          {:else if control.type === 'color'}
            <div class="flex items-center gap-2">
              <input
                type="color"
                id={control.name}
                value={controlValues[control.name] ?? control.defaultValue ?? '#000000'}
                oninput={(e) => handleControlChange(control.name, e.currentTarget.value)}
                class="w-12 h-10 border-2 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={controlValues[control.name] ?? control.defaultValue ?? '#000000'}
                oninput={(e) => handleControlChange(control.name, e.currentTarget.value)}
                class="flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="#000000"
              />
            </div>

          {:else if control.type === 'date'}
            <input
              type="date"
              id={control.name}
              value={controlValues[control.name] ?? control.defaultValue ?? ''}
              oninput={(e) => handleControlChange(control.name, e.currentTarget.value)}
              class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          {:else if control.type === 'object'}
            <textarea
              value={JSON.stringify(controlValues[control.name] ?? control.defaultValue ?? {}, null, 2)}
              oninput={(e) => {
                try {
                  const parsed = JSON.parse(e.currentTarget.value);
                  handleControlChange(control.name, parsed);
                } catch {
                  // Invalid JSON, don't update
                }
              }}
              rows="4"
              class="w-full px-3 py-2 text-xs font-mono border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="{'{}'}"
            ></textarea>

          {:else if control.type === 'array'}
            <textarea
              value={JSON.stringify(controlValues[control.name] ?? control.defaultValue ?? [], null, 2)}
              oninput={(e) => {
                try {
                  const parsed = JSON.parse(e.currentTarget.value);
                  if (Array.isArray(parsed)) {
                    handleControlChange(control.name, parsed);
                  }
                } catch {
                  // Invalid JSON, don't update
                }
              }}
              rows="3"
              class="w-full px-3 py-2 text-xs font-mono border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="{'[]'}"
            ></textarea>

          {:else}
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Control type "{control.type}" not yet supported
            </p>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Custom styling for better UX */
  .control-group {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgb(243 244 246);
  }

  .control-group:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  :global(.dark) .control-group {
    border-bottom-color: rgb(31 41 55);
  }

  /* Better range slider styling */
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background-color: rgb(79 70 229);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    background-color: rgb(67 56 202);
  }

  input[type="range"]::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background-color: rgb(79 70 229);
    cursor: pointer;
    transition: background-color 0.2s;
    border: 0;
  }

  input[type="range"]::-moz-range-thumb:hover {
    background-color: rgb(67 56 202);
  }
</style>
