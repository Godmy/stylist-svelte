<script lang="ts">
  import { FeatureToggleStyleManager } from '$stylist/design-system/styles/interaction/feature-toggle';
  import type { FeatureToggleProps } from '$stylist/design-system/contracts/interaction/feature-toggle';
  let { label='Feature toggle', description='Enable optional capability', checked=false, disabled=false, class: className='', onChange, ...restProps }: FeatureToggleProps = $props();
  let isChecked=$state(checked);
</script>
<div class={FeatureToggleStyleManager.root(className)} {...restProps}>
  <div class="flex items-start justify-between gap-4">
    <div><div class="font-medium">{label}</div><div class="text-sm text-[var(--color-text-secondary)]">{description}</div></div>
    <button type="button" aria-label={label} class={`relative h-7 w-12 rounded-full ${isChecked?'bg-[var(--color-primary-600)]':'bg-[var(--color-background-tertiary)]'} ${disabled?'opacity-[var(--opacity-50)] cursor-not-allowed':''}`} disabled={disabled} onclick={() => { isChecked=!isChecked; onChange?.(isChecked); }}>
      <span class={`absolute top-1 h-5 w-5 rounded-full bg-[var(--color-background-primary)] transition-all ${isChecked?'left-6':'left-1'}`}></span>
    </button>
  </div>
</div>



