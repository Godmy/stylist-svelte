<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FormFieldGroup from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Email Address',
      description: 'Label for the form field'
    },
    {
      name: 'description',
      type: 'text' as ControlType,
      defaultValue: 'We\'ll never share your email with anyone else.',
      description: 'Description for the form field'
    },
    {
      name: 'required',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the field is required'
    },
    {
      name: 'error',
      type: 'text' as ControlType,
      defaultValue: '',
      description: 'Error message to display'
    }
  ];
</script>

<Story
  {controls}
  title="FormFieldGroup Component"
  description="Form field group component with label, description, and error support"
  let:controlValues
>
  <div class="p-8">
    <FormFieldGroup
      label={controlValues.label}
      description={controlValues.description}
      required={controlValues.required}
      error={controlValues.error}
    >
      <input
        type="email"
        placeholder="email@example.com"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
      />
    </FormFieldGroup>
  </div>
</Story>