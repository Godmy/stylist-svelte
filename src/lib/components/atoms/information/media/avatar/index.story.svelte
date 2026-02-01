<script lang="ts">
  import Avatar from './index.svelte';

  let props = $props();

  let src: string = $derived(props.src ?? 'https://via.placeholder.com/150');
  let alt: string = $derived(props.alt ?? 'User avatar');
  let name: string = $derived(props.name ?? 'John Doe');
  let status: 'online' | 'away' | 'offline' | 'typing' | 'idle' | undefined = $derived(props.status ?? undefined);
  let size: 'sm' | 'md' | 'lg' | 'xl' = $derived(props.size ?? 'md');
  let showStatus: boolean = $derived(props.showStatus ?? false);

  export const controls = [
    { name: 'src', type: 'text', defaultValue: 'https://via.placeholder.com/150', group: 'Content' },
    { name: 'alt', type: 'text', defaultValue: 'User avatar', group: 'Content' },
    { name: 'name', type: 'text', defaultValue: 'John Doe', group: 'Content' },
    { name: 'status', type: 'select', options: ['online', 'away', 'offline', 'typing', 'idle', ''], defaultValue: '', group: 'Style' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md', group: 'Layout' },
    { name: 'showStatus', type: 'boolean', defaultValue: false, group: 'Behavior' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Avatar Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Avatar</h2>
    <div class="flex flex-col gap-4">
      <div class="inline-block">
        <Avatar
          src={src}
          alt={alt}
          name={name}
          status={status || undefined}
          size={size}
          showStatus={showStatus}
        />
      </div>
      {#if showStatus && status}
        <p class="text-sm text-gray-500">
          Status indicator is visible: {status}
        </p>
      {/if}
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="avatar-src" class="block text-sm mb-1">Src:</label>
        <input
          id="avatar-src"
          type="text"
          bind:value={src}
          class="border rounded p-1 w-48"
        />
      </div>

      <div>
        <label for="avatar-name" class="block text-sm mb-1">Name:</label>
        <input
          id="avatar-name"
          type="text"
          bind:value={name}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="avatar-alt" class="block text-sm mb-1">Alt:</label>
        <input
          id="avatar-alt"
          type="text"
          bind:value={alt}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="avatar-status" class="block text-sm mb-1">Status:</label>
        <select id="avatar-status" bind:value={status} class="border rounded p-1">
          <option value="">No Status</option>
          <option value="online">Online</option>
          <option value="away">Away</option>
          <option value="offline">Offline</option>
          <option value="typing">Typing</option>
          <option value="idle">Idle</option>
        </select>
      </div>

      <div>
        <label for="avatar-size" class="block text-sm mb-1">Size:</label>
        <select id="avatar-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="avatar-showStatus" class="flex items-center gap-1">
          <input id="avatar-showStatus" type="checkbox" bind:checked={showStatus} />
          Show Status
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <Avatar size="sm" name="SM" />
        <span class="text-xs mt-1">Small</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar size="md" name="MD" />
        <span class="text-xs mt-1">Medium</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar size="lg" name="LG" />
        <span class="text-xs mt-1">Large</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar size="xl" name="XL" />
        <span class="text-xs mt-1">Extra Large</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Statuses</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="flex flex-col items-center">
        <Avatar name="ON" status="online" showStatus />
        <span class="text-xs mt-1">Online</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar name="AW" status="away" showStatus />
        <span class="text-xs mt-1">Away</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar name="OF" status="offline" showStatus />
        <span class="text-xs mt-1">Offline</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar name="TY" status="typing" showStatus />
        <span class="text-xs mt-1">Typing</span>
      </div>
      <div class="flex flex-col items-center">
        <Avatar name="ID" status="idle" showStatus />
        <span class="text-xs mt-1">Idle</span>
      </div>
    </div>
  </div>
</div>