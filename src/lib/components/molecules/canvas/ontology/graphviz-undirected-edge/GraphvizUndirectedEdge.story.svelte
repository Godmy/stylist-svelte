<script>
    import GraphvizUndirectedEdge from './GraphvizUndirectedEdge.svelte';
</script>

<div class="p-4">
    <h1>GraphvizUndirectedEdge Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Default GraphvizUndirectedEdge</h2>
        <GraphvizUndirectedEdge
            id="edge1"
            source="node1"
            target="node2"
            sourceX={50}
            sourceY={50}
            targetX={150}
            targetY={100}
            label="Relationship"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>GraphvizUndirectedEdge with Custom Color</h2>
        <GraphvizUndirectedEdge
            id="edge2"
            source="nodeA"
            target="nodeB"
            sourceX={75}
            sourceY={75}
            targetX={175}
            targetY={125}
            label="Association"
            color="teal"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Thick GraphvizUndirectedEdge</h2>
        <GraphvizUndirectedEdge
            id="edge3"
            source="nodeX"
            target="nodeY"
            sourceX={25}
            sourceY={125}
            targetX={125}
            targetY={175}
            label="Thick Edge"
            width={4}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Dashed GraphvizUndirectedEdge</h2>
        <GraphvizUndirectedEdge
            id="edge4"
            source="nodeP"
            target="nodeQ"
            sourceX={100}
            sourceY={25}
            targetX={200}
            targetY={75}
            label="Dashed Edge"
            style="dashed"
        />
    </div>
</div>