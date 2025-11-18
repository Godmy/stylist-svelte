<script lang="ts">
  import FormHelperText from './FormHelperText.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type Variant = 'default' | 'info' | 'success' | 'warning' | 'danger';

  let text = $state('We will never share your email.');
  let variant = $state<Variant>('default');

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'We will never share your email.' },
    { name: 'variant', type: 'select', options: ['default', 'info', 'success', 'warning', 'danger'], defaultValue: 'default' }
  ];
</script>

<Story
  id="atoms-form-helper-text"
  title="FormHelperText"
  component={FormHelperText}
  category="Atoms"
  description="Secondary helper copy for form fields with semantic variants."
  tags={['form', 'helper']}
  controls={controls}
>
  {#snippet children()}
    <div class="space-y-3 p-6">
      <label class="flex flex-col gap-2 text-sm">
        Password
        <input
          type="password"
          placeholder="********"
          class="rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <FormHelperText text={text} variant={variant} />

      <label class="flex flex-col gap-1 text-sm">
        Variant
        <select bind:value={variant} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
          <option value="default">Default</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </label>
      <label class="flex flex-col gap-1 text-sm">
        Text
        <input
          type="text"
          bind:value={text}
          class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
        />
      </label>
    </div>
  {/snippet}
</Story>
