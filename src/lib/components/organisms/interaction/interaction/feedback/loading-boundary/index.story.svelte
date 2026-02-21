<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import LoadingBoundary from './index.svelte';
  type Props={loading:boolean; hasError:boolean};
  const controls: ControlConfig[]=[{name:'loading',type:'boolean',defaultValue:false},{name:'hasError',type:'boolean',defaultValue:false}];
</script>
<Story id="organisms-loading-boundary" title="Organisms / Interaction / Feedback / Loading Boundary" component={LoadingBoundary} category="Organisms/Interaction/Feedback" controls={controls}>
  {#snippet children(values: any)}{@const p= values as Props}<div class="sb-organisms-loading-boundary p-4"><LoadingBoundary loading={p.loading} error={p.hasError ? 'Request failed' : ''} /></div>{/snippet}
</Story>

