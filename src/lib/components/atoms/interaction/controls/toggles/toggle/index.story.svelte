<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Toggle from './Toggle.svelte';

  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type ToggleStoryProps = {
    size: (typeof sizeOptions)[number];
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-toggle"
  title="Toggle"
  component={Toggle}
  category="Atoms"
  description="Toggle switch for enabling/disabling a state."
  tags={['form', 'input', 'toggle', 'switch']}
  controls={controls}
>
  {#snippet children(props: ToggleStoryProps)}
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <Toggle
          size={props.size}
          disabled={props.disabled}
        />
        <span>Toggle switch</span>
      </div>
    </div>
  {/snippet}
</Story>
