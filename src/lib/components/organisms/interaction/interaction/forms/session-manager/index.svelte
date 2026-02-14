<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { SessionManagerProps } from '$stylist/design-system/props/interaction-forms';
  let { activeSessions=1, expiresAt='2026-12-31 23:59', class: className='', ...restProps }: SessionManagerProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-session-manager border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <div class="font-semibold">Session Manager</div>
  <div class="text-sm text-gray-700">Active sessions: {activeSessions}</div>
  <div class="text-sm text-gray-600">Expires at: {expiresAt}</div>
  <button class="px-3 py-1 border rounded" type="button">Terminate other sessions</button>
</div>
