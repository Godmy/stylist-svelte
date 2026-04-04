<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
  import type { SessionManagerProps } from '$stylist/form/interface/component/interaction-forms/other';
  let { activeSessions=1, expiresAt='2026-12-31 23:59', class: className='', ...restProps }: SessionManagerProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-session-manager border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <div class="font-semibold">Session Manager</div>
  <div class="text-sm text-[var(--color-text-primary)]">Active sessions: {activeSessions}</div>
  <div class="text-sm text-[var(--color-text-secondary)]">Expires at: {expiresAt}</div>
  <button class="px-3 py-1 border rounded" type="button">Terminate other sessions</button>
</div>







