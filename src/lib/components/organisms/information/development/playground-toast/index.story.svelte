<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import PlaygroundToast from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'message', type: 'text', defaultValue: 'Screenshot saved successfully' },
    { name: 'duration', type: 'number', defaultValue: 3000, min: 500, max: 10000, step: 500 }
  ];
</script>

<Story
  component={PlaygroundToast}
  title="Playground Toast"
  description="Simple success toast used in playground workflows."
  {controls}
>
  {#snippet children(values: any)}
    <div class="relative h-28">
      <PlaygroundToast message={values.message} duration={values.duration} onClose={() => {}} />
    </div>
  {/snippet}
</Story>
