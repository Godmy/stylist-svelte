<script>
    import GraphvizDirectedEdge from './GraphvizDirectedEdge.svelte';
</script>

<div class="p-4">
    <h1>GraphvizDirectedEdge Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Default GraphvizDirectedEdge</h2>
        <GraphvizDirectedEdge
            id="edge1"
            sourceX={50}
            sourceY={50}
            targetX={150}
            targetY={100}
            label="Connection"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>GraphvizDirectedEdge with Custom Color</h2>
        <GraphvizDirectedEdge
            id="edge2"
            sourceX={75}
            sourceY={75}
            targetX={175}
            targetY={125}
            label="Flow"
            color="green"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Thick GraphvizDirectedEdge</h2>
        <GraphvizDirectedEdge
            id="edge3"
            sourceX={25}
            sourceY={125}
            targetX={125}
            targetY={175}
            label="Thick Edge"
            width={4}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Styled GraphvizDirectedEdge</h2>
        <GraphvizDirectedEdge
            id="edge4"
            sourceX={100}
            sourceY={25}
            targetX={200}
            targetY={75}
            label="Dashed Edge"
            style="dashed"
        />
    </div>
</div>