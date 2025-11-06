<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Badge from './Badge.svelte';

  const variantOptions = ['default', 'success', 'warning', 'danger', 'info'] as const;
  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type BadgeStoryProps = {
    label: string;
    variant: (typeof variantOptions)[number];
    size: (typeof sizeOptions)[number];
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'New'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      options: [...variantOptions]
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
  id="atoms-badge"
  title="Badge"
  component={Badge}
  category="Atoms"
  description="Pill-shaped badge for quick status indicators."
  tags={['status', 'label']}
  controls={controls}
>
  {#snippet children(props: BadgeStoryProps)}
    {#snippet badgeLabel()}
      {props.label || 'New'}
    {/snippet}

    <div class="flex flex-col gap-4">
      <Badge variant={props.variant} size={props.size} content={badgeLabel} />

      <div class="grid gap-2 text-sm text-gray-600">
        <p>Variants demonstrate different semantic contexts.</p>
        <p>Use size to match surrounding typography.</p>
      </div>
    </div>
  {/snippet}
</Story>
