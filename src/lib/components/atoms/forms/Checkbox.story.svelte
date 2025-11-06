<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Checkbox from './Checkbox.svelte';

  type CheckboxStoryProps = {
    label: string;
    description: string;
    checked: boolean;
    disabled: boolean;
    required: boolean;
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
      defaultValue: 'You must accept before continuing'
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'withError',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-checkbox"
  title="Checkbox"
  component={Checkbox}
  category="Atoms"
  description="Accessible checkbox with label, description, and error states."
  tags={['form', 'input', 'boolean']}
  controls={controls}
>
  {#snippet children(props: CheckboxStoryProps)}
    <Checkbox
      id="checkbox-demo"
      label={props.label || 'Accept terms and conditions'}
      description={props.description}
      errors={props.withError ? ['This field is required'] : []}
      disabled={props.disabled}
      required={props.required}
      checked={props.checked}
    />
  {/snippet}
</Story>
