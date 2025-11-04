<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Tag from './Tag.svelte';
  import { Check } from 'lucide-svelte';

  const variantOptions = ['neutral', 'primary', 'success', 'warning', 'danger'] as const;
  const sizeOptions = ['sm', 'md'] as const;

  type TagStoryProps = {
    text: string;
    variant: (typeof variantOptions)[number];
    size: (typeof sizeOptions)[number];
    closable: boolean;
    disabled: boolean;
    showIcon: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'text',
      type: 'text',
      defaultValue: 'Design system'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: [...variantOptions]
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'closable',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];

let closedCount = $state(0);

function handleClose() {
  closedCount += 1;
}
</script>

{#snippet checkIcon()}
  <Check class="h-3.5 w-3.5" />
{/snippet}

<Story
  id="atoms-tag"
  title="Tag"
  component={Tag}
  category="Atoms"
  description="Компактный бейдж с цветовой схемой и опциональным крестиком."
  tags={['tag', 'chip', 'badge']}
  controls={controls}
>
  {#snippet children(props: TagStoryProps)}
    <div class="space-y-4">
      <Tag
        text={props.text}
        variant={props.variant}
        size={props.size}
        closable={props.closable}
        disabled={props.disabled}
        icon={props.showIcon ? checkIcon : undefined}
        on:close={handleClose}
      />

      <div class="space-y-2 text-sm text-gray-600">
        <p>
          Последнее действие: {props.closable ? 'можно закрыть' : 'без крестика'}.
        </p>
        <p>
          Кнопка закрытия нажата <span class="font-semibold">{closedCount}</span> раз(а).
        </p>
      </div>

      <div class="flex flex-wrap gap-2 pt-4 border-t border-dashed border-gray-200">
        {#each variantOptions as variant}
          <Tag text={variant} variant={variant} size="sm" />
        {/each}
      </div>
    </div>
  {/snippet}
</Story>
