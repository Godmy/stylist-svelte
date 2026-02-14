<script lang="ts">
  import type { LazyLoaderProps } from '$stylist/design-system/props/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction-feedback';
  let { loading=true, text='Loading content...', class: className='', ...restProps }: LazyLoaderProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-lazy-loader border rounded-lg p-4', className)} {...restProps}>
  {#if loading}<div class="animate-pulse text-sm text-gray-600">{text}</div>{:else}<slot>Loaded content</slot>{/if}
</div>
