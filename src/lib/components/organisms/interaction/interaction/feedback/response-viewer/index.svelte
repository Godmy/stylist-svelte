<script lang="ts">
  import type { ResponseViewerProps } from '$stylist/design-system/props/interaction/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction/interaction-feedback';
  let { title='Response', response='{}', status='info', class: className='', ...restProps }: ResponseViewerProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-response-viewer border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold">{title}</div>
  <div class="text-xs text-gray-500 mb-2">Status: {status}</div>
  <pre class="text-xs bg-gray-50 border rounded p-2 overflow-auto">{response}</pre>
</div>
