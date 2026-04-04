<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import ComponentLibraryStats from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'totalComponents', type: 'number', defaultValue: 320, min: 0, max: 1000, step: 1 },
    { name: 'atoms', type: 'number', defaultValue: 180, min: 0, max: 1000, step: 1 },
    { name: 'molecules', type: 'number', defaultValue: 90, min: 0, max: 1000, step: 1 },
    { name: 'organisms', type: 'number', defaultValue: 50, min: 0, max: 1000, step: 1 },
    { name: 'animateOnVisible', type: 'boolean', defaultValue: true },
    { name: 'durationMs', type: 'number', defaultValue: 2000, min: 200, max: 6000, step: 100 }
  ];
</script>

<Story
  component={ComponentLibraryStats}
  title="Component Library Stats"
  description="Animated counters for total components and architecture levels."
  {controls}
>
  {#snippet children(values: any)}
    <ComponentLibraryStats
      stats={{
        totalComponents: values.totalComponents,
        atoms: values.atoms,
        molecules: values.molecules,
        organisms: values.organisms
      }}
      animateOnVisible={values.animateOnVisible}
      durationMs={values.durationMs}
    />
  {/snippet}
</Story>



