<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundToast from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'message', type: 'text', defaultValue: 'Screenshot saved successfully' },
    { name: 'duration', type: 'number', defaultValue: 3000, min: 500, max: 10000, step: 500 }
  ];
</script>

<Story
  component={RecipePlaygroundToast}
  title="Playground Toast"
  description="Simple success toast used in playground workflows."
  {controls}
>
  {#snippet children(values: any)}
    <div class="relative h-28">
      <RecipePlaygroundToast message={values.message} duration={values.duration} onClose={() => {}} />
    </div>
  {/snippet}
</Story>



