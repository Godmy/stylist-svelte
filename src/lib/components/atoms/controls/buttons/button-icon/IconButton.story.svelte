<script lang="ts">
  import { Home, Settings, User } from 'lucide-svelte';
  import IconButton from './IconButton.svelte';

  let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' = $state('ghost');
  let size: 'sm' | 'md' | 'lg' = $state('md');
  let disabled = $state(false);
  let loading = $state(false);
  let iconName: 'home' | 'settings' | 'user' = $state('home');
</script>

{#snippet homeIconSnippet()}
  <Home />
{/snippet}

{#snippet settingsIconSnippet()}
  <Settings />
{/snippet}

{#snippet userIconSnippet()}
  <User />
{/snippet}

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">IconButton Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Icon Button</h2>
    <div class="flex gap-4 items-center">
      <IconButton
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        ariaLabel={`Icon button with ${iconName}`}
        icon={iconName === 'home' ? homeIconSnippet : iconName === 'settings' ? settingsIconSnippet : userIconSnippet}
      />
      <span>Icon Button: {iconName}</span>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="variant-select" class="block text-sm mb-1">Variant:</label>
        <select id="variant-select" bind:value={variant} class="border rounded p-1">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </div>

      <div>
        <label for="size-select" class="block text-sm mb-1">Size:</label>
        <select id="size-select" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="iconName-select" class="block text-sm mb-1">Icon:</label>
        <select id="iconName-select" bind:value={iconName} class="border rounded p-1">
          <option value="home">Home</option>
          <option value="settings">Settings</option>
          <option value="user">User</option>
        </select>
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={loading} />
          Loading
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center">
        <IconButton variant="primary" icon={homeIconSnippet} ariaLabel="Primary" />
        <span class="text-xs mt-1">Primary</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="secondary" icon={settingsIconSnippet} ariaLabel="Secondary" />
        <span class="text-xs mt-1">Secondary</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="success" icon={userIconSnippet} ariaLabel="Success" />
        <span class="text-xs mt-1">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="warning" icon={homeIconSnippet} ariaLabel="Warning" />
        <span class="text-xs mt-1">Warning</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="danger" icon={settingsIconSnippet} ariaLabel="Danger" />
        <span class="text-xs mt-1">Danger</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="ghost" icon={userIconSnippet} ariaLabel="Ghost" />
        <span class="text-xs mt-1">Ghost</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="link" icon={homeIconSnippet} ariaLabel="Link" />
        <span class="text-xs mt-1">Link</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <IconButton size="sm" icon={homeIconSnippet} ariaLabel="Small" />
        <span class="text-xs mt-1">Small</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton size="md" icon={settingsIconSnippet} ariaLabel="Medium" />
        <span class="text-xs mt-1">Medium</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton size="lg" icon={userIconSnippet} ariaLabel="Large" />
        <span class="text-xs mt-1">Large</span>
      </div>
    </div>
  </div>
</div>