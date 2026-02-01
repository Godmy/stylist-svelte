<script lang="ts">
  import { Home, Settings, User } from 'lucide-svelte';
  import IconButton from './index.svelte';

  const icons = {
    home: Home,
    settings: Settings,
    user: User
  } as const;

  let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' = 'ghost';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let disabled = false;
  let loading = false;
  let selectedIcon: keyof typeof icons = 'home';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Icon Button</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Icon Button</h2>
    <div class="flex flex-col items-center gap-4">
      <IconButton
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        ariaLabel="Icon button"
        icon={icons[selectedIcon]}
      />
      <p class="text-sm text-gray-500">Use icon-only buttons for compact toolbars and quick actions.</p>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="icon-variant" class="block text-sm mb-1">Variant:</label>
        <select id="icon-variant" bind:value={variant} class="border rounded p-1">
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
        <label for="icon-size" class="block text-sm mb-1">Size:</label>
        <select id="icon-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="icon-select" class="block text-sm mb-1">Icon:</label>
        <select id="icon-select" bind:value={selectedIcon} class="border rounded p-1">
          <option value="home">Home</option>
          <option value="settings">Settings</option>
          <option value="user">User</option>
        </select>
      </div>

      <div class="flex items-end gap-4">
        <label for="icon-disabled" class="flex items-center gap-1">
          <input id="icon-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
        <label for="icon-loading" class="flex items-center gap-1">
          <input id="icon-loading" type="checkbox" bind:checked={loading} />
          Loading
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center">
        <IconButton variant="primary" icon={Home} ariaLabel="Home" />
        <span class="text-xs mt-1">Primary</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="secondary" icon={Settings} ariaLabel="Settings" />
        <span class="text-xs mt-1">Secondary</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="success" icon={User} ariaLabel="Success" />
        <span class="text-xs mt-1">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="warning" icon={Home} ariaLabel="Warning" />
        <span class="text-xs mt-1">Warning</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="danger" icon={Settings} ariaLabel="Danger" />
        <span class="text-xs mt-1">Danger</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="ghost" icon={User} ariaLabel="Ghost" />
        <span class="text-xs mt-1">Ghost</span>
      </div>
      <div class="flex flex-col items-center">
        <IconButton variant="link" icon={Home} ariaLabel="Link" />
        <span class="text-xs mt-1">Link</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <IconButton size="sm" variant="ghost" icon={icons[selectedIcon]} ariaLabel="Small icon" />
      <IconButton size="md" variant="ghost" icon={icons[selectedIcon]} ariaLabel="Medium icon" />
      <IconButton size="lg" variant="ghost" icon={icons[selectedIcon]} ariaLabel="Large icon" />
    </div>
  </div>
</div>
