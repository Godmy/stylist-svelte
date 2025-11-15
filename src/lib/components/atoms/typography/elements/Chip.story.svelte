<script lang="ts">
  import { Story, type ControlConfig } from '$lib/playground';
  import Chip from './Chip.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Пример чипа'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'warning', 'danger']
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    {
      name: 'closable',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-chip"
  title="Chip"
  category="Atoms"
  component={Chip}
  description="Компактный компонент для отображения небольших фрагментов информации"
  tags={['tag', 'label', 'badge', 'chip']}
  controls={controls}
>
  {#snippet children(props: Record<string, any>)}
    <Chip
      label={props.label}
      variant={props.variant}
      size={props.size}
      closable={props.closable}
      disabled={props.disabled}
    />
  {/snippet}
</Story>