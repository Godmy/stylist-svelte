<script lang="ts">
  import HighContrastToggle from './HighContrastToggle.svelte';

  let enabled: boolean = false;
  let theme: 'light' | 'dark' = 'light';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">HighContrastToggle Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive HighContrastToggle</h2>
    <div class="flex flex-col items-start gap-4">
      <HighContrastToggle 
        {enabled}
        {theme}
        onToggle={(newEnabled) => {
          enabled = newEnabled;
          console.log('High contrast mode:', newEnabled ? 'enabled' : 'disabled');
        }}
      />
      
      <div class="mt-4 p-4 border rounded bg-gray-50">
        <p class="text-sm">
          Current state: 
          <span class="font-medium ml-2">
            {enabled ? 'High Contrast Mode Enabled' : 'High Contrast Mode Disabled'}
          </span>
        </p>
        <p class="text-xs text-gray-500 mt-1">
          The toggle button changes appearance based on the current contrast mode and theme.
        </p>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="hc-enabled" class="flex items-center gap-1">
          <input id="hc-enabled" type="checkbox" bind:checked={enabled} />
          Enabled
        </label>
      </div>

      <div>
        <label for="hc-theme" class="block text-sm mb-1">Theme:</label>
        <select
          id="hc-theme"
          bind:value={theme}
          class="border rounded p-1"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">HighContrastToggle Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Dark Theme</h3>
        <HighContrastToggle 
          enabled={false}
          theme="dark"
          onToggle={(enabled) => console.log('Dark theme toggle:', enabled)}
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Enabled State</h3>
        <HighContrastToggle 
          enabled={true}
          theme="light"
          onToggle={(enabled) => console.log('Enabled state toggle:', enabled)}
        />
      </div>
    </div>
  </div>
</div>