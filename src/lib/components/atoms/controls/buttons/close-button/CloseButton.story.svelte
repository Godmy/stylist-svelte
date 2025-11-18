<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CloseButton from './CloseButton.svelte';

  const sizeOptions = ['sm', 'md', 'lg'] as const;
  const variantOptions = ['solid', 'outline', 'ghost'] as const;

  type CloseButtonStoryProps = {
    size: (typeof sizeOptions)[number];
    variant: (typeof variantOptions)[number];
  };

  const controls: ControlConfig[] = [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'ghost',
      options: [...variantOptions]
    }
  ];
</script>

<Story
  id="atoms-close-button"
  title="CloseButton"
  component={CloseButton}
  category="Atoms"
  description="Standardized close button with X icon."
  tags={['action', 'form', 'close', 'dismiss']}
  controls={controls}
>
  {#snippet children(props: CloseButtonStoryProps)}
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <CloseButton
          size={props.size}
          variant={props.variant}
          aria-label="Close"
        />
        <span>Close Button</span>
      </div>
    </div>
  {/snippet}
</Story>