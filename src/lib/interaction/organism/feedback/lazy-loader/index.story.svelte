<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import LazyLoader from './index.svelte';
  type Props = { loading: boolean };
  const controls: InterfaceControllerSettings[] = [{ name:'loading', type:'boolean', defaultValue:true }];
</script>
<Story id="organisms-lazy-loader" title="Organisms / Interaction / Feedback / Lazy Loader" component={LazyLoader} category="Organisms/Interaction/Feedback" controls={controls}>
  {#snippet children(values: any)}{@const p = values as Props}<div class="sb-organisms-lazy-loader p-4"><LazyLoader loading={p.loading} /></div>{/snippet}
</Story>




