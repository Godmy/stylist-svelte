<script lang="ts">
  import FormFieldGroup from './FormFieldGroup.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let label = 'Email Address';
  let description = 'We\'ll never share your email with anyone else.';
  let required = false;
  let error = '';

  const controls: ControlConfig[] = [
    { name: 'label', type: 'text', defaultValue: 'Email Address' },
    { name: 'description', type: 'text', defaultValue: 'We\'ll never share your email with anyone else.' },
    { name: 'required', type: 'boolean', defaultValue: false }
  ];
</script>

# FormFieldGroup

<Story title="FormFieldGroup" {controls}>
  <div class="space-y-4 p-8">
    <FormFieldGroup 
      {label} 
      {description} 
      {required}
      {error}
    >
      <input 
        type="email" 
        placeholder="email@example.com"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
      />
    </FormFieldGroup>

    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={required} /> Required
        </label>
      </div>

      <div>
        <label>Label: <input type="text" bind:value={label} /></label>
      </div>

      <div>
        <label>Description: <input type="text" bind:value={description} /></label>
      </div>

      <div>
        <label>Error message: <input type="text" bind:value={error} /></label>
      </div>
    </div>
  </div>
</Story>