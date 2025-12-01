<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ActionButton from './ActionButton.svelte';

  type ActionButtonStoryProps = {
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
  };

  const variants = ['primary', 'secondary', 'success', 'warning', 'danger', 'default'] as const;
  const sizes = ['sm', 'md', 'lg'] as const;

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: [...variants]
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizes]
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-action-button"
  title="ActionButton"
  component={ActionButton}
  category="Molecules"
  description="An action button component with different variants and sizes."
  tags={['button', 'action', 'interactive']}
  controls={controls}
>
  {#snippet children(props: ActionButtonStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ActionButton Story</h2>
      <ActionButton
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
      >
        Click Me
      </ActionButton>
    </div>
  {/snippet}
</Story>