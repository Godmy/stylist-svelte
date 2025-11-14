<script lang="ts">
  import IconButton from './IconButton.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import { Search, Settings, Bell } from 'lucide-svelte';

  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';
  type IconChoice = 'search' | 'settings' | 'bell';

  let variant = $state<ButtonVariant>('ghost');
  let size = $state<ButtonSize>('md');
  let icon = $state<IconChoice>('search');
  let disabled = $state(false);
  let loading = $state(false);
  let ariaLabel = $state('Search');

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'ghost' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'icon', type: 'select', options: ['search', 'settings', 'bell'], defaultValue: 'search' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'ariaLabel', type: 'text', defaultValue: 'Search' }
  ];
</script>

<Story
  id="atoms-icon-button"
  title="IconButton"
  component={IconButton}
  category="Atoms"
  description="Circular button optimized for icon-only interactions."
  tags={['button', 'icon', 'action']}
  controls={controls}
>
  {#snippet children()}
    {#snippet searchIcon()}
      <Search class="h-4 w-4" aria-hidden="true" />
    {/snippet}
    {#snippet settingsIcon()}
      <Settings class="h-4 w-4" aria-hidden="true" />
    {/snippet}
    {#snippet bellIcon()}
      <Bell class="h-4 w-4" aria-hidden="true" />
    {/snippet}

    {@const currentIcon = icon === 'settings' ? settingsIcon : icon === 'bell' ? bellIcon : searchIcon}

    <div class="space-y-6 p-6">
      <div class="flex gap-4">
        <IconButton
          variant={variant}
          size={size}
          disabled={disabled}
          loading={loading}
          ariaLabel={ariaLabel}
          icon={currentIcon}
        />
        <div class="text-sm text-gray-500">
          Choose variant, icon and state to preview hover, focus and busy visuals.
        </div>
      </div>

      <div class="grid gap-3 md:grid-cols-2">
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={loading} />
          Loading
        </label>
        <label class="flex flex-col gap-1 text-sm md:col-span-2">
          Aria label
          <input
            type="text"
            bind:value={ariaLabel}
            class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1 text-sm">
          Variant
          <select bind:value={variant} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
            <option value="ghost">Ghost</option>
            <option value="link">Link</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-sm">
          Size
          <select bind:value={size} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-sm md:col-span-2">
          Icon
          <select bind:value={icon} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
            <option value="search">Search</option>
            <option value="settings">Settings</option>
            <option value="bell">Bell</option>
          </select>
        </label>
      </div>
    </div>
  {/snippet}
</Story>
