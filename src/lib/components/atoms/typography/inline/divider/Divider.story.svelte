<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Divider from '../Divider.svelte';

  type DividerStoryProps = {
    orientation: 'horizontal' | 'vertical';
    label: string;
    align: 'start' | 'center' | 'end';
    dashed: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'orientation',
      type: 'select',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical']
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Section'
    },
    {
      name: 'align',
      type: 'select',
      defaultValue: 'center',
      options: ['start', 'center', 'end']
    },
    {
      name: 'dashed',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-divider"
  title="Divider"
  component={Divider}
  category="Atoms"
  description="Разделитель секций, поддерживает подпись и вертикальный режим."
  tags={['layout', 'separator']}
  controls={controls}
>
  {#snippet children(props: DividerStoryProps)}
    <div class="space-y-6">
      {#if props.orientation === 'horizontal'}
        <div class="space-y-4">
          <p class="text-sm text-gray-600">
            Разделитель с подписью и выравниванием <strong>{props.align}</strong>.
          </p>
          <Divider
            orientation="horizontal"
            label={props.label}
            align={props.align}
            dashed={props.dashed}
          />
          <p class="text-sm text-gray-500">
            Текст над разделителем
          </p>
          <Divider orientation="horizontal" dashed />
          <p class="text-sm text-gray-500">
            Текст под разделителем
          </p>
        </div>
      {:else}
        <div class="flex h-32 items-center justify-center gap-8">
          <div class="text-sm text-gray-600 w-32 text-right">
            Левая колонка
          </div>
          <Divider orientation="vertical" dashed={props.dashed} class="h-full" />
          <div class="text-sm text-gray-600 w-32">
            Правая колонка
          </div>
        </div>
      {/if}
    </div>
  {/snippet}
</Story>
