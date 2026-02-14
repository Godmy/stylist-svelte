<script lang="ts">
  import type { LoadingBoundaryProps } from '$stylist/design-system/props/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction-feedback';
  let { loading=false, error='', children, class: className='', ...restProps }: LoadingBoundaryProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-loading-boundary border rounded-lg p-4', className)} {...restProps}>
  {#if loading}
    <div class="text-sm">Loading...</div>
  {:else if error}
    <div class="text-sm text-red-600">{error}</div>
  {:else if children}
    {@render children()}
  {:else}
    Ready
  {/if}
</div>
