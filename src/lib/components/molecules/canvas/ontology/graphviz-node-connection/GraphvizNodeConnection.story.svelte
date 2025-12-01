<script>
    import GraphvizNodeConnection from '../graphviz-node/GraphvizNodeConnection.svelte';
</script>

<div class="p-4">
    <h1>GraphvizNodeConnection Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>Default GraphvizNodeConnection</h2>
        <GraphvizNodeConnection
            sourceId="node1"
            sourceLabel="Source Node"
            targetId="node2"
            targetLabel="Target Node"
            edgeId="conn1"
            edgeLabel="Data Flow"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>GraphvizNodeConnection with Custom Color</h2>
        <GraphvizNodeConnection
            sourceId="nodeA"
            sourceLabel="Source A"
            targetId="nodeB"
            targetLabel="Target B"
            edgeId="conn2"
            edgeLabel="Reference"
            edgeColor="orange"
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>Thick GraphvizNodeConnection</h2>
        <GraphvizNodeConnection
            sourceId="node1"
            sourceLabel="Source Node"
            targetId="node2"
            targetLabel="Target Node"
            edgeId="conn3"
            edgeLabel="Data Flow"
            edgeWidth={5}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>Custom GraphvizNodeConnection Style</h2>
        <GraphvizNodeConnection
            sourceId="nodeC"
            sourceLabel="Source C"
            targetId="nodeD"
            targetLabel="Target D"
            edgeId="conn4"
            edgeLabel="Custom Link"
            edgeStyle="dashed"
        />
    </div>
</div>