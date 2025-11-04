<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Switch from './Switch.svelte';

  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type SwitchStoryProps = {
    label: string;
    description: string;
    checked: boolean;
    disabled: boolean;
    size: (typeof sizeOptions)[number];
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
      defaultValue: 'Receive product updates by email.'
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: true
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
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    }
  ];
</script>

<Story
  id="atoms-switch"
  title="Switch"
  component={Switch}
  category="Atoms"
  description="Компонент-переключатель с поддержкой размера, required и подсказки."
  tags={['toggle', 'form', 'settings']}
  controls={controls}
>
  {#snippet children(props: SwitchStoryProps)}
    <div class="space-y-4">
      <Switch
        id="switch-story"
        label={props.label}
        description={props.description}
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
        required={props.required}
      />

      <p class="text-sm text-gray-600">
        Значение: <span class="font-semibold">{props.checked ? 'включено' : 'выключено'}</span>
      </p>
    </div>
  {/snippet}
</Story>
