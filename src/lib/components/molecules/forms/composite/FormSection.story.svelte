<script lang="ts">
  import FormSection from './FormSection.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let title = $state('Personal Information');
  let description = $state('Please provide your personal details.');
  let collapsed = $state(false);
  let collapsible = $state(true);

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Personal Information' },
    { name: 'description', type: 'text', defaultValue: 'Please provide your personal details.' },
    { name: 'collapsible', type: 'boolean', defaultValue: true }
  ];
</script>

# FormSection

<Story id="formsection-story" title="FormSection" component={FormSection} {controls}>
  <div class="space-y-4 p-8">
    <FormSection 
      {title} 
      {description} 
      {collapsible}
      initiallyCollapsed={collapsed}
    >
      <div class="space-y-4">
        <div>
          <label for="form-name" class="block text-sm font-medium text-gray-700">Name</label>
          <input id="form-name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        
        <div>
          <label for="form-email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="form-email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        
        <div>
          <label for="form-phone" class="block text-sm font-medium text-gray-700">Phone</label>
          <input id="form-phone" type="tel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
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