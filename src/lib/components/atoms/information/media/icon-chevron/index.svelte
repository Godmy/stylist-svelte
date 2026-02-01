<script lang="ts">
  import { Icon } from '$stylist/components/atoms';
  import type { IconChevronProps } from '$stylist/design-system/media';
  import { ICON_CHEVRON_DEFAULTS } from '$stylist/design-system/media';
  import { createIconChevronState } from '../state.svelte';

  let props: IconChevronProps = $props();

  const state = createIconChevronState(props);
</script>

<span class={state.classes}>
  <Icon name={ICON_CHEVRON_DEFAULTS.iconName} size={state.size} />
</span>
