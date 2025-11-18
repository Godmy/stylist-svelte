<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Checkbox from './Checkbox.svelte';

  type CheckboxStoryProps = {
    label: string;
    description: string;
    required: boolean;
    disabled: boolean;
    withError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Accept terms and conditions'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Please read and accept our terms'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'withError',
      type: 'boolean',
      defaultValue: false
    }
  ];

  // Generate a random ID for the checkbox
  const id = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story
  id="atoms-checkbox"
  title="Checkbox"
  component={Checkbox}
  category="Atoms"
  description="Form checkbox element with label and error handling."
  tags={['form', 'input', 'checkbox']}
  controls={controls}
>
  {#snippet children(props: CheckboxStoryProps)}
    <div class="flex flex-col gap-4">
      <Checkbox
        id={id}
        label={props.label}
        description={props.description}
        required={props.required}
        disabled={props.disabled}
        errors={props.withError ? ['This field is required'] : []}
      />
    </div>
  {/snippet}
</Story>