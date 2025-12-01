<script lang="ts">
  let {
    settings = [],
    onSave = () => {},
    class: className = ''
  } = $props<{
    settings: Array<{
      id: string;
      label: string;
      description: string;
      enabled: boolean;
    }>;
    onSave?: () => void;
    class?: string;
  }>();

  let localSettings = $state([...settings]);

  $effect(() => {
    localSettings = [...settings];
  });

  const toggleSetting = (id: string) => {
    const index = localSettings.findIndex(s => s.id === id);
    if (index !== -1) {
      localSettings[index] = {
        ...localSettings[index],
        enabled: !localSettings[index].enabled
      };
    }
  };
</script>

<div class={`bg-white rounded-lg shadow p-6 ${className}`}>
  <h2 class="text-xl font-bold mb-4">Privacy Settings</h2>
  <div class="space-y-4">
    {#each localSettings as setting}
      <div class="flex items-start justify-between p-3 border rounded-lg">
        <div>
          <h3 class="font-medium">{setting.label}</h3>
          <p class="text-sm text-gray-600">{setting.description}</p>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="sr-only"
            checked={setting.enabled}
            onchange={() => toggleSetting(setting.id)}
          />
          <div class={`block w-11 h-6 rounded-full ${
            setting.enabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}></div>
          <div class={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
            setting.enabled ? 'transform translate-x-5' : ''
          }`}></div>
        </label>
      </div>
    {/each}
  </div>
  <div class="mt-6">
    <button
      onclick={onSave}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Save Settings
    </button>
  </div>
</div>