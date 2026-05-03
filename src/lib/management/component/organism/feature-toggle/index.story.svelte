<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import FeatureToggle from './index.svelte';
  type Props={checked:boolean;disabled:boolean};
  const controls: InterfaceControllerSettings[]=[{name:'checked',type:'boolean',defaultValue:true},{name:'disabled',type:'boolean',defaultValue:false}];
</script>
<Story id="organisms-feature-toggle" title="Organisms / Interaction / Controls / Toggles / Feature SlotToggle" component={FeatureToggle} category="Organisms/Interaction/Controls/Toggles" controls={controls}>
  {#snippet children(values: any)}
    {@const p = values as Props}
    <div class="sb-organisms-feature-toggle p-4"><FeatureToggle checked={p.checked} disabled={p.disabled} /></div>
  {/snippet}
</Story>




