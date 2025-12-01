<script>
    import GraphEdge from './GraphEdge.svelte';
</script>

<div class="p-4">
    <h1>GraphEdge Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Default GraphEdge</h2>
        <GraphEdge
            fromNodeId="node1"
            toNodeId="node2"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>GraphEdge with Directed Edge</h2>
        <GraphEdge
            fromNodeId="nodeA"
            toNodeId="nodeB"
            directed={true}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>GraphEdge with Different Type</h2>
        <GraphEdge
            fromNodeId="nodeX"
            toNodeId="nodeY"
            type="curve"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>GraphEdge with Custom Style</h2>
        <GraphEdge
            fromNodeId="nodeP"
            toNodeId="nodeQ"
            style={{ stroke: 'blue', strokeWidth: '3px' }}
        />
    </div>
</div>