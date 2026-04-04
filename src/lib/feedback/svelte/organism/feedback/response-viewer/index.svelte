<script lang="ts">
  import type { ResponseViewerProps } from '$stylist/feedback/interface/component/interaction-feedback/other';
  import { InteractionFeedbackStyleManager } from '$stylist/feedback/class/style-manager/interaction-feedback';
  let { title='Response', response='{}', status='info', class: className='', ...restProps }: ResponseViewerProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-response-viewer border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold">{title}</div>
  <div class="text-xs text-[var(--color-text-secondary)] mb-2">Status: {status}</div>
  <pre class="text-xs bg-[var(--color-background-secondary)] border rounded p-2 overflow-auto">{response}</pre>
</div>







