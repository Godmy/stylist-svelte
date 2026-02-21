<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import GraphvizDirectedEdge from './index.svelte';
</script>

<Story id="molecules-graphviz-directed-edge" title="Molecules / Ontology / Graphviz Directed Edge" component={GraphvizDirectedEdge} category="Molecules/Ontology">
  {#snippet children()}
    <div class="p-4 border rounded" style="height: 220px; position: relative;">
      <GraphvizDirectedEdge id="edge-a" sourceX={40} sourceY={40} targetX={190} targetY={130} label="Edge" style="dashed" color="#2563eb" />
    </div>
  {/snippet}
</Story>
