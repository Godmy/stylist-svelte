<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Radio from './Radio.svelte';

  type RadioStoryProps = {
    name: string;
    value: string;
    label: string;
    checked: boolean;
    disabled: boolean;
    required: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'name',
      type: 'text',
      defaultValue: 'radio-group'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: 'option1'
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Radio Option'
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
    }
  ];
</script>

<Story
  id="atoms-radio"
  title="Radio"
  component={Radio}
  category="Atoms"
  description="A single radio button (radio switch) component."
  tags={['forms', 'input', 'radio', 'selection']}
  controls={controls}
>
  {#snippet children(props: RadioStoryProps)}
    <div class="p-4">
      <Radio
        id="radio-demo"
        name={props.name}
        value={props.value}
        label={props.label}
        checked={props.checked}
        disabled={props.disabled}
        required={props.required}
      />
    </div>
  {/snippet}
</Story>