<script lang="ts">
  import { Story, type ControlConfig } from '$lib/playground';
  import Icon from './Icon.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'name',
      type: 'select',
      defaultValue: 'box',
      options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box']
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    {
      name: 'strokeWidth',
      type: 'number',
      defaultValue: 1.5,
      min: 0.5,
      max: 3,
      step: 0.5
    }
  ];
</script>

<Story
  id="atoms-icon"
  title="Icon"
  category="Atoms"
  component={Icon}
  description="Компонент для отображения иконок"
  tags={['icon', 'svg', 'ui']}
  controls={controls}
>
  {#snippet children(props: Record<string, any>)}
    <div class="flex items-center space-x-4">
      <Icon {...props} />
    </div>
  {/snippet}
</Story>