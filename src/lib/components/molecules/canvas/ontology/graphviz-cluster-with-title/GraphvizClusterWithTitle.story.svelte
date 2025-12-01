<script>
    import GraphvizClusterWithTitle from '../graphviz-cluster/GraphvizClusterWithTitle.svelte';
    
    // Sample cluster data
    const simpleCluster = {
        id: 'cluster1',
        title: 'Main Cluster',
        x: 0,
        y: 0,
        width: 200,
        height: 150,
        nodes: [
            { id: 'node1', label: 'Node 1' },
            { id: 'node2', label: 'Node 2' }
        ]
    };

    const complexCluster = {
        id: 'cluster2',
        title: 'Complex Cluster',
        x: 0,
        y: 0,
        width: 200,
        height: 150,
        nodes: [
            { id: 'node3', label: 'Node A' },
            { id: 'node4', label: 'Node B' },
            { id: 'node5', label: 'Node C' }
        ]
    };
</script>

<div class="p-4">
    <h1>GraphvizClusterWithTitle Stories</h1>
    
    <div class="my-4 p-4 border rounded">
        <h2>Default GraphvizClusterWithTitle</h2>
        <GraphvizClusterWithTitle 
            {...simpleCluster}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>GraphvizClusterWithTitle with Complex Content</h2>
        <GraphvizClusterWithTitle 
            {...complexCluster}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>GraphvizClusterWithTitle with Custom Style</h2>
        <GraphvizClusterWithTitle
            {...simpleCluster}
            style="dashed"
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>GraphvizClusterWithTitle with Custom Style</h2>
        <GraphvizClusterWithTitle
            {...complexCluster}
            style="bold"
        />
    </div>
</div>