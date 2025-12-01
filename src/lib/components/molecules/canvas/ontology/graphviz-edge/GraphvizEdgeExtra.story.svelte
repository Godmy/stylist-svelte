<script>
    import GraphvizEdge from './GraphvizEdge.svelte';
    
    // Additional examples for GraphvizEdge
    const bidirectionalEdge = {
        id: 'bidirectional',
        source: 'nodeA',
        target: 'nodeB',
        label: 'Bidirectional',
        bidirectional: true
    };
    
    const annotatedEdge = {
        id: 'annotated',
        source: 'nodeX',
        target: 'nodeY',
        label: 'Annotated Edge',
        annotations: ['critical', 'high-priority']
    };
</script>

<div class="p-4">
    <h1>Additional GraphvizEdge Stories</h1>
    
    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Bidirectional GraphvizEdge</h2>
        <GraphvizEdge 
            {...bidirectionalEdge}
        />
    </div>
    
    <div class="my-4 p-4 border rounded" style="height: 200px; position: relative;">
        <h2>Annotated GraphvizEdge</h2>
        <GraphvizEdge 
            {...annotatedEdge}
        />
    </div>
</div>