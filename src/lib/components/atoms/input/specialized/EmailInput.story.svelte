<script lang="ts">
  import EmailInput from './EmailInput.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let email = $state('team@stylist.ui');
  let disabled = $state(false);
  let required = $state(true);
  let error = $state(false);
  let helper = $state('Use your work email.');

  const controls: ControlConfig[] = [
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'required', type: 'boolean', defaultValue: true },
    { name: 'error', type: 'boolean', defaultValue: false },
    { name: 'helper', type: 'text', defaultValue: 'Use your work email.' }
  ];

</script>

<Story
  id="atoms-email-input"
  title="EmailInput"
  component={EmailInput}
  category="Atoms"
  description="Email field with validation styles and helper messages."
  tags={['input', 'form', 'email']}
  controls={controls}
>
  {#snippet children()}
    <div class="space-y-4 p-6">
      <EmailInput
        bind:value={email}
        disabled={disabled}
        required={required}
        error={error}
        helpText={helper}
      />
      <div class="grid gap-3 text-sm md:grid-cols-2">
        <label class="flex flex-col gap-1">
          Email
          <input
            type="text"
            bind:value={email}
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
