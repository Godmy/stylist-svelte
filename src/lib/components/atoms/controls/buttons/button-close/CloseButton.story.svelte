<script lang="ts">
  import { Story } from '$lib/playground';
  import CloseButton from './CloseButton.svelte';
  import type { ControlConfig } from '$lib/playground';

  // Define CloseButtonProps type locally
  type CloseButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'outline' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
  };

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'variant', type: 'select', options: ['solid', 'outline', 'ghost'], defaultValue: 'ghost' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'loading', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id: string;
    title: string;
    description: string;
    controls: ControlConfig[];
  }>();
</script>

<Story
  {id}
  {title}
  {description}
  component={CloseButton}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props: CloseButtonProps)}
    <CloseButton
      size={props.size}
      variant={props.variant}
      disabled={props.disabled}
      loading={props.loading}
      aria-label="Close"
    />
  {/snippet}
</Story>