<script lang="ts">
  import { Story } from '$lib/playground';
  import Checkbox from './Checkbox.svelte';
  import type { ControlConfig } from '$lib/playground';

  // Define CheckboxProps type locally
  type CheckboxProps = {
    label: string;
    required?: boolean;
    disabled?: boolean;
    description?: string;
  };

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'label', type: 'text', defaultValue: 'Accept terms and conditions' },
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'description', type: 'text', defaultValue: 'Please read and accept our terms' }
    ]
  } = $props<{
    id: string;
    title: string;
    description: string;
    controls: ControlConfig[];
  }>();

  // Generate a random ID for the checkbox
  const checkboxId: string = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story
  {id}
  {title}
  {description}
  component={Checkbox}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props: CheckboxProps)}
    <Checkbox
      id={checkboxId}
      label={props.label}
      required={props.required}
      disabled={props.disabled}
      description={props.description}
    />
  {/snippet}
</Story>
