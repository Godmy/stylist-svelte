<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import FeatureToggle from './index.svelte';
  type Props={checked:boolean;disabled:boolean};
  const controls: InterfaceControllerSettings[]=[{name:'checked',type:'boolean',defaultValue:true},{name:'disabled',type:'boolean',defaultValue:false}];
</script>
<Story id="organisms-feature-toggle" title="Organisms / Interaction / Controls / Toggles / Feature Toggle" component={FeatureToggle} category="Organisms/Interaction/Controls/Toggles" controls={controls}>
  {#snippet children(values: any)}
    {@const p = values as Props}
    <div class="sb-organisms-feature-toggle p-4"><FeatureToggle checked={p.checked} disabled={p.disabled} /></div>
  {/snippet}
</Story>




