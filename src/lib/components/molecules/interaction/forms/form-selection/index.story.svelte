<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FormSection from './FormSection.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'title',
      type: 'text' as ControlType,
      defaultValue: 'Personal Information',
      description: 'Title of the form section'
    },
    {
      name: 'description',
      type: 'text' as ControlType,
      defaultValue: 'Please provide your personal details.',
      description: 'Description of the form section'
    },
    {
      name: 'collapsible',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether the section is collapsible'
    }
  ];
</script>

<Story
  {controls}
  title="FormSection Component"
  description="Form section component with optional collapsible functionality"
  let:controlValues
>
  <div class="p-8">
    <FormSection
      title={controlValues.title}
      description={controlValues.description}
      collapsible={controlValues.collapsible}
      initiallyCollapsed={false}
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
  </div>
</Story>