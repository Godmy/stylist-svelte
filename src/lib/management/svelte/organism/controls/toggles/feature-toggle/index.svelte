<script lang="ts">
  import { createFeatureToggleState } from '$stylist/management/function/state/feature-toggle';
  import type { FeatureToggleProps } from '$stylist/management/interface/component/feature-toggle/other';

  let props: FeatureToggleProps = $props();
  const state = createFeatureToggleState(props);
</script>
<div class={state.containerClasses} {...state.restProps}>
  <div class="flex items-start justify-between gap-4">
    <div><div class="font-medium">{state.label}</div><div class="text-sm text-[var(--color-text-secondary)]">{state.description}</div></div>
    <button type="button" aria-label={state.label} class={`relative h-7 w-12 rounded-full ${state.isChecked?'bg-[var(--color-primary-600)]':'bg-[var(--color-background-tertiary)]'} ${state.disabled?'opacity-[var(--opacity-50)] cursor-not-allowed':''}`} disabled={state.disabled} onclick={state.handleChange}>
      <span class={`absolute top-1 h-5 w-5 rounded-full bg-[var(--color-background-primary)] transition-all ${state.isChecked?'left-6':'left-1'}`}></span>
    </button>
  </div>
</div>
