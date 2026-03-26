<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import FormFieldGroup from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'label',
      type: 'text' as TokenControllerType,
      defaultValue: 'Email Address',
      description: 'Label for the form field'
    },
    {
      name: 'description',
      type: 'text' as TokenControllerType,
      defaultValue: 'We\'ll never share your email with anyone else.',
      description: 'Description for the form field'
    },
    {
      name: 'required',
      type: 'boolean' as TokenControllerType,
      defaultValue: false,
      description: 'Whether the field is required'
    },
    {
      name: 'error',
      type: 'text' as TokenControllerType,
      defaultValue: '',
      description: 'Error message to display'
    }
  ];
</script>

<Story
  {controls}
  title="FormFieldGroup Component"
  description="Form field group component with label, description, and error support"
 
>
  {#snippet children(controlValues: any)}
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
        class="mt-1 block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-indigo-500 sm:text-sm p-2 border"
      />
    </FormFieldGroup>
  </div>

  {/snippet}
</Story>




