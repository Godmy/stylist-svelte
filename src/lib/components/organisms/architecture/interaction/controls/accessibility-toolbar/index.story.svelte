<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AccessibilityToolbar from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();
</script>

<div class="sb-organisms-accessibility-toolbar">
  <Story
    {id}
    {title}
    {description}
    component={AccessibilityToolbar}
    category="Organisms"
    controls={controls}
  >
    {#snippet children(props: {})}
      <AccessibilityToolbar />
    {/snippet}
  </Story>
</div>


