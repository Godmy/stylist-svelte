<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Radio from './Radio.svelte';

  type RadioStoryProps = {
    label: string;
    disabled: boolean;
    required: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Radio option'
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

  // Generate a random ID and name for the radio
  const id = `radio-${Math.random().toString(36).substr(2, 9)}`;
  const name = `radio-group`;
</script>

<Story
  id="atoms-radio"
  title="Radio"
  component={Radio}
  category="Atoms"
  description="Single radio button with optional label."
  tags={['form', 'input', 'radio']}
  controls={controls}
>
  {#snippet children(props: RadioStoryProps)}
    <div class="flex flex-col gap-4">
      <Radio
        id={id}
        name={name}
        value="option1"
        label={props.label}
        disabled={props.disabled}
        required={props.required}
      />
    </div>
  {/snippet}
</Story>