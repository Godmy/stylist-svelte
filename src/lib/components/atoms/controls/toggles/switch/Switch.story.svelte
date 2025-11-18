<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Switch from './Switch.svelte';

  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type SwitchStoryProps = {
    label: string;
    description: string;
    size: (typeof sizeOptions)[number];
    disabled: boolean;
    required: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Enable notifications'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Receive email notifications'
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
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

  // Generate a random ID for the switch
  const id = `switch-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story
  id="atoms-switch"
  title="Switch"
  component={Switch}
  category="Atoms"
  description="Toggle switch component with different sizes."
  tags={['form', 'input', 'switch', 'toggle']}
  controls={controls}
>
  {#snippet children(props: SwitchStoryProps)}
    <div class="flex flex-col gap-4">
      <Switch
        id={id}
        label={props.label}
        description={props.description}
        size={props.size}
        disabled={props.disabled}
        required={props.required}
      />
    </div>
  {/snippet}
</Story>