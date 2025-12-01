<script>
    import GraphvizNodeWithLabel from '../graphviz-node/GraphvizNodeWithLabel.svelte';
</script>

<div class="p-4">
    <h1>GraphvizNodeWithLabel Stories</h1>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>Default GraphvizNodeWithLabel</h2>
        <GraphvizNodeWithLabel
            id="node1"
            label="Start Node"
            width={100}
            height={60}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>GraphvizNodeWithLabel with Custom Color</h2>
        <GraphvizNodeWithLabel
            id="node2"
            label="Process Node"
            color="green"
            fillColor="lightgreen"
            width={120}
            height={70}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>GraphvizNodeWithLabel (Selected)</h2>
        <GraphvizNodeWithLabel
            id="node3"
            label="End Node"
            selected={true}
            width={100}
            height={60}
        />
    </div>

    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>GraphvizNodeWithLabel with Highlight</h2>
        <GraphvizNodeWithLabel
            id="node4"
            label="Highlight Node"
            highlight={true}
            fillColor="lightblue"
            width={110}
            height={65}
        />
    </div>
</div>