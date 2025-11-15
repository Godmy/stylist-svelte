<script lang="ts">
  import FormErrorMessage from './FormErrorMessage.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let text = $state('Email is required.');
  let visible = $state(true);
  let customSlot = $state(false);

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'Email is required.' },
    { name: 'visible', type: 'boolean', defaultValue: true },
    { name: 'customSlot', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-form-error-message"
  title="FormErrorMessage"
  component={FormErrorMessage}
  category="Atoms"
  description="Displays validation errors under form fields."
  tags={['form', 'error', 'helper']}
  controls={controls}
>
  {#snippet children()}
    {#snippet slotContent()}
      <span class="font-semibold text-[--color-danger-600]">⚠ {text}</span>
    {/snippet}

    <div class="space-y-3 p-6">
      <label class="flex flex-col gap-2 text-sm">
        Email
        <input
          type="email"
          placeholder="name@example.com"
          class={`rounded border px-3 py-2 focus:outline-none focus:ring-2 ${
            visible ? 'border-[--color-danger-400] focus:ring-[--color-danger-400]' : 'border-gray-300 focus:ring-blue-500'
          }`}
        />
      </label>
      <FormErrorMessage text={text} visible={visible} content={customSlot ? slotContent : undefined} />

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={visible} />
          Visible
        </label>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={customSlot} />
          Use custom slot
        </label>
        <label class="flex flex-col gap-1 text-sm sm:col-span-2">
          Message
          <input
            type="text"
            bind:value={text}
            class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>
    </div>
  {/snippet}
</Story>
