<script>
    import GraphvizUndirectedEdge from './GraphvizUndirectedEdge.svelte';
</script>

<div class="p-4">
    <h1>Additional GraphvizUndirectedEdge Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Dotted GraphvizUndirectedEdge</h2>
        <GraphvizUndirectedEdge
            id="dotted-edge"
            source="nodeA"
            target="nodeB"
            sourceX={50}
            sourceY={50}
            targetX={150}
            targetY={100}
            label="Dotted Edge"
            style="dotted"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Bold GraphvizUndirectedEdge</h2>
        <GraphvizUndirectedEdge
            id="bold-edge"
            source="nodeC"
            target="nodeD"
            sourceX={75}
            sourceY={75}
            targetX={175}
            targetY={125}
            label="Bold Edge"
            style="bold"
            width={5}
        />
    </div>
</div>