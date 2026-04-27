<script lang="ts">
  import { createSessionManagerState } from '$stylist/management/function/state/session-manager';
  import type { SlotSessionManager as SessionManagerProps } from '$stylist/form/interface/slot/session-manager';

  let props: SessionManagerProps = $props();
  const state = createSessionManagerState(props);
</script>
<div class={state.containerClasses} {...state.restProps}>
  <div class="font-semibold">Session Manager</div>
  <div class="text-sm text-[var(--color-text-primary)]">Active sessions: {state.activeSessions}</div>
  <div class="text-sm text-[var(--color-text-secondary)]">Expires at: {state.expiresAt}</div>
  <button class="px-3 py-1 border rounded" type="button">Terminate other sessions</button>
</div>
