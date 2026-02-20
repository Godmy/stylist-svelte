<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import LazyLoader from './index.svelte';
  type Props = { loading: boolean };
  const controls: ControlConfig[] = [{ name:'loading', type:'boolean', defaultValue:true }];
</script>
<Story id="organisms-lazy-loader" title="Organisms / Interaction / Feedback / Lazy Loader" component={LazyLoader} category="Organisms/Interaction/Feedback" controls={controls}>
  {#snippet children(values: any)}{@const p = values as Props}<div class="sb-organisms-lazy-loader p-4"><LazyLoader loading={p.loading} /></div>{/snippet}
</Story>

