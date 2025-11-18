<script lang="ts">
  import PhoneNumberInput from '../PhoneNumberInput.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let phone = $state('79999999999');
  let disabled = $state(false);
  let error = $state(false);
  let helper = $state('Supports Russian format +7 (XXX) XXX-XX-XX.');

  const controls: ControlConfig[] = [
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'error', type: 'boolean', defaultValue: false }
  ];

</script>

<Story
  id="atoms-phone-number-input"
  title="PhoneNumberInput"
  component={PhoneNumberInput}
  category="Atoms"
  description="Guided formatter for Russian-style phone numbers."
  tags={['input', 'phone']}
  controls={controls}
>
  {#snippet children()}
    <div class="space-y-4 p-6">
      <PhoneNumberInput
        value={phone}
        disabled={disabled}
        error={error}
        helpText={helper}
      />

      <div class="grid gap-3 text-sm md:grid-cols-2">
        <label class="flex flex-col gap-1">
          Raw digits
          <input
            type="text"
            bind:value={phone}
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
          <input type="checkbox" bind:checked={error} />
          Error state
        </label>
      </div>
    </div>
  {/snippet}
</Story>
