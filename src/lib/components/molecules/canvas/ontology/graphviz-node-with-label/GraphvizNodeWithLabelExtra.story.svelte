<script>
    import GraphvizNodeWithLabel from '../graphviz-node/GraphvizNodeWithLabel.svelte';

    // Additional examples for GraphvizNodeWithLabel
    const interactiveNode = {
        id: 'interactive',
        label: 'Interactive Node',
        x: 100,
        y: 50,
        type: 'interactive',
        interactive: true
    };
    
    const nodeWithMultipleLabels = {
        id: 'multi-label',
        label: 'Main Label',
        x: 200,
        y: 150,
        type: 'multi',
        subLabel: 'Sub Label',
        description: 'Additional description'
    };
</script>

<div class="p-4">
    <h1>Additional GraphvizNodeWithLabel Stories</h1>
    
    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>Interactive GraphvizNodeWithLabel</h2>
        <GraphvizNodeWithLabel 
            {...interactiveNode}
        />
    </div>
    
    <div class="my-4 p-4 border rounded" style="height: 300px; position: relative;">
        <h2>GraphvizNodeWithLabel with Multiple Labels</h2>
        <GraphvizNodeWithLabel 
            {...nodeWithMultipleLabels}
        />
    </div>
</div>