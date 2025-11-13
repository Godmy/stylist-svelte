<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import { Button } from '$lib/components/atoms';

  const variantOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'] as const;
  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type ButtonStoryProps = {
    label: string;
    variant: (typeof variantOptions)[number];
    size: (typeof sizeOptions)[number];
    disabled: boolean;
    loading: boolean;
    block: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Click me'
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
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'block',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-button"
  title="Button"
  component={Button}
  category="Atoms"
  description="Versatile button component with multiple variants."
  tags={['action', 'form', 'cta']}
  controls={controls}
>
  {#snippet children(props: ButtonStoryProps)}
    {#snippet labelSnippet()}
      {props.label ?? 'Click me'}
    {/snippet}

    <div class="flex flex-col gap-4">
      <Button
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
        block={props.block}
      >
        {labelSnippet}
      </Button>
      {#if props.block}
        <p class="text-sm text-gray-500">
          Block mode stretches the button to full width.
        </p>
      {/if}
    </div>
  {/snippet}
</Story>