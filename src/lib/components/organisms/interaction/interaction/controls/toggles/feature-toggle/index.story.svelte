<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import FeatureToggle from './index.svelte';
  type Props={checked:boolean;disabled:boolean};
  const controls: ControlConfig[]=[{name:'checked',type:'boolean',defaultValue:true},{name:'disabled',type:'boolean',defaultValue:false}];
</script>
<Story id="organisms-feature-toggle" title="Organisms / Interaction / Controls / Toggles / Feature Toggle" component={FeatureToggle} category="Organisms/Interaction/Controls/Toggles" controls={controls}>
  {#snippet children(props)}
    {@const p = props as Props}
    <div class="sb-organisms-feature-toggle p-4"><FeatureToggle checked={p.checked} disabled={p.disabled} /></div>
  {/snippet}
</Story>

