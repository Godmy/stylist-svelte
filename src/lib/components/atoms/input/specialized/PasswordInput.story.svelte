<script lang="ts">
  import PasswordInput from './PasswordInput.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let password = $state('Secret#123');
  let disabled = $state(false);
  let required = $state(true);
  let error = $state(false);
  let helper = $state('Must contain 8+ characters, number and symbol.');

  const controls: ControlConfig[] = [
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'required', type: 'boolean', defaultValue: true },
    { name: 'error', type: 'boolean', defaultValue: false }
  ];

</script>

<Story
  id="atoms-password-input"
  title="PasswordInput"
  component={PasswordInput}
  category="Atoms"
  description="Password field with show/hide toggle and helper text."
  tags={['input', 'password']}
  controls={controls}
>
  {#snippet children()}
    <div class="space-y-4 p-6">
      <PasswordInput
        value={password}
        disabled={disabled}
        required={required}
        error={error}
        helpText={helper}
      />

      <div class="grid gap-3 text-sm md:grid-cols-2">
        <label class="flex flex-col gap-1">
          Password
          <input
            type="text"
            bind:value={password}
            class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1">
          Helper text
          <input
            type="text"
            bind:value={helper}
            class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" bind:checked={required} />
          Required
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" bind:checked={error} />
          Error state
        </label>
      </div>
    </div>
  {/snippet}
</Story>
