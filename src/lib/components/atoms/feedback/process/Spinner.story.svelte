<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Spinner from './Spinner.svelte';

  const sizeOptions = ['sm', 'md', 'lg', 'xl'] as const;
  const variantOptions = ['primary', 'white', 'gray'] as const;

  type SpinnerStoryProps = {
    size: (typeof sizeOptions)[number];
    variant: (typeof variantOptions)[number];
    label: string;
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
      defaultValue: 'primary',
      options: [...variantOptions]
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Loading...'
    }
  ];
</script>

<Story
  id="atoms-spinner"
  title="Spinner"
  component={Spinner}
  category="Atoms"
  description="Accessible loading spinner with size and color variants."
  tags={['loading', 'feedback']}
  controls={controls}
>
  {#snippet children(props: SpinnerStoryProps)}
    <div class="flex items-center justify-center gap-6 p-8 rounded-lg border border-dashed border-gray-300 bg-gray-50">
      <Spinner size={props.size} variant={props.variant} label={props.label} />
      <div class="text-sm text-gray-600 max-w-xs">
        <p>Size: {props.size}</p>
        <p>Variant: {props.variant}</p>
        <p>Label: {props.label}</p>
      </div>
    </div>
  {/snippet}
</Story>
