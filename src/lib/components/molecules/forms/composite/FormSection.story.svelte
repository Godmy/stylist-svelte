<script lang="ts">
  import FormSection from './FormSection.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let title = 'Personal Information';
  let description = 'Please provide your personal details.';
  let collapsed = false;
  let collapsible = true;

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Personal Information' },
    { name: 'description', type: 'text', defaultValue: 'Please provide your personal details.' },
    { name: 'collapsible', type: 'boolean', defaultValue: true }
  ];
</script>

# FormSection

<Story title="FormSection" {controls}>
  <div class="space-y-4 p-8">
    <FormSection 
      {title} 
      {description} 
      {collapsible}
      bind:collapsed={collapsed}
    >
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
      </div>
    </FormSection>

    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={collapsible} /> Collapsible
        </label>
      </div>

      <div>
        <label>Title: <input type="text" bind:value={title} /></label>
      </div>

      <div>
        <label>Description: <input type="text" bind:value={description} /></label>
      </div>
    </div>
  </div>
</Story>