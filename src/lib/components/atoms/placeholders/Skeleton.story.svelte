<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Skeleton from './Skeleton.svelte';

  type SkeletonStoryProps = {
    variant: 'text' | 'circular' | 'rectangular';
    width: string;
    height: string;
  };

  const variantOptions = ['text', 'circular', 'rectangular'];

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'text',
      options: variantOptions
    },
    {
      name: 'width',
      type: 'text',
      defaultValue: '100%'
    },
    {
      name: 'height',
      type: 'text',
      defaultValue: ''
    }
  ];
</script>

<Story
  id="atoms-skeleton"
  title="Skeleton"
  component={Skeleton}
  category="Atoms"
  description="Skeleton component for showing loading states."
  tags={['skeleton', 'loading', 'placeholder']}
  controls={controls}
>
  {#snippet children(props: SkeletonStoryProps)}
    <div class="space-y-4">
      <Skeleton
        variant={props.variant}
        width={props.width}
        height={props.height}
      />
      <p class="text-sm text-gray-500">This is a skeleton component example.</p>
    </div>
  {/snippet}
</Story>