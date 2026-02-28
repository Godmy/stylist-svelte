<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import AtomicPrinciplesShowcase from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'atoms', type: 'number', defaultValue: 180, min: 0, max: 1000, step: 1 },
    { name: 'molecules', type: 'number', defaultValue: 90, min: 0, max: 1000, step: 1 },
    { name: 'organisms', type: 'number', defaultValue: 50, min: 0, max: 1000, step: 1 },
    { name: 'title', type: 'text', defaultValue: 'Built on Atomic Principles' },
    { name: 'description', type: 'text', defaultValue: 'Every component follows the proven Atomic Design methodology' }
  ];
</script>

<Story
  component={AtomicPrinciplesShowcase}
  title="Atomic Principles Showcase"
  description="Landing block that presents atomic architecture levels with highlighted counters."
  {controls}
>
  {#snippet children(values: any)}
    <AtomicPrinciplesShowcase
      stats={{ atoms: values.atoms, molecules: values.molecules, organisms: values.organisms }}
      title={values.title}
      description={values.description}
    />
  {/snippet}
</Story>
