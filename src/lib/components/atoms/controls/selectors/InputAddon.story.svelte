<script lang="ts">
  import InputAddon from './InputAddon.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import { Search, DollarSign } from 'lucide-svelte';

  type Position = 'left' | 'right';
  type Variant = 'solid' | 'ghost';

  let position = $state<Position>('left');
  let variant = $state<Variant>('solid');
  let label = $state('USD');
  let useIcon = $state(false);

  const controls: ControlConfig[] = [
    { name: 'position', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
    { name: 'variant', type: 'select', options: ['solid', 'ghost'], defaultValue: 'solid' },
    { name: 'label', type: 'text', defaultValue: 'USD' },
    { name: 'useIcon', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-input-addon"
  title="InputAddon"
  component={InputAddon}
  category="Atoms"
  description="Prefix or suffix element that pairs with inputs for icons, units or tags."
  tags={['input', 'form', 'addon']}
  controls={controls}
>
  {#snippet children()}
    {#snippet iconContent()}
      {#if useIcon}
        {#if position === 'left'}
          <Search class="h-4 w-4 text-gray-500" aria-hidden="true" />
        {:else}
          <DollarSign class="h-4 w-4 text-gray-500" aria-hidden="true" />
        {/if}
      {:else}
        <span class="text-xs font-medium uppercase tracking-wide text-gray-600">{label}</span>
      {/if}
    {/snippet}

    <div class="space-y-6 p-6">
      <label class="space-y-2 text-sm">
        Amount
        <div class="flex rounded-lg border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          {#if position === 'left'}
            <InputAddon position="left" variant={variant} class="rounded-l-lg">
              {@render iconContent()}
            </InputAddon>
          {/if}
          <input
            type="text"
            placeholder="0.00"
            class="flex-1 rounded-none border-0 px-3 py-2 focus:outline-none"
          />
          {#if position === 'right'}
            <InputAddon position="right" variant={variant} class="rounded-r-lg">
              {@render iconContent()}
            </InputAddon>
          {/if}
        </div>
      </label>

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex flex-col gap-1 text-sm">
          Label
          <input
            type="text"
            bind:value={label}
            class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1 text-sm">
          Variant
          <select bind:value={variant} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
            <option value="solid">Solid</option>
            <option value="ghost">Ghost</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-sm">
          Position
          <select bind:value={position} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={useIcon} />
          Show icon instead of text
        </label>
      </div>
    </div>
  {/snippet}
</Story>
