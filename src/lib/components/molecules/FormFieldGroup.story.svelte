<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import FormFieldGroup from './FormFieldGroup.svelte';
  import Input from '../atoms/Input.svelte';

  type FormFieldGroupStoryProps = {
    label: string;
    description: string;
    hint: string;
    required: boolean;
    orientation: 'horizontal' | 'vertical';
    disabled: boolean;
    showError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Email address'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'We will never share your email.'
    },
    {
      name: 'hint',
      type: 'text',
      defaultValue: 'Use a work email if possible'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'orientation',
      type: 'select',
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showError',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let value = $state('john@example.com');
</script>

<Story
  id="molecules-form-field-group"
  title="FormFieldGroup"
  component={FormFieldGroup}
  category="Molecules"
  description="Pairs a label, description, and input with consistent spacing."
  tags={['form', 'layout']}
  controls={controls}
>
  {#snippet children(props: FormFieldGroupStoryProps)}
    <div class="space-y-6">
      <FormFieldGroup
        id="form-field-story"
        label={props.label}
        description={props.description}
        hint={props.hint}
        required={props.required}
        orientation={props.orientation}
        disabled={props.disabled}
        error={props.showError ? 'Please provide a valid email address' : ''}
      >
        {#snippet children()}
          <Input
            id="form-field-story"
            label=""
            bind:value
            placeholder="you@example.com"
            disabled={props.disabled}
            errors={props.showError ? ['Please provide a valid email address'] : []}
          />
        {/snippet}
      </FormFieldGroup>

      <p class="text-sm text-gray-600">
        Current value: <span class="font-medium">{value}</span>
      </p>
    </div>
  {/snippet}
</Story>
