<script lang="ts">
    import GridLayout from './GridLayout.svelte';

    // Define grid items with string content for better compatibility
    let gridItems = [
        {
            id: 'item1',
            colSpan: 2,
            content: '<div class="p-4 bg-blue-100">Item 1 (2 columns)</div>'
        },
        {
            id: 'item2',
            content: '<div class="p-4 bg-green-100">Item 2</div>'
        },
        {
            id: 'item3',
            content: '<div class="p-4 bg-yellow-100">Item 3</div>'
        },
        {
            id: 'item4',
            colSpan: 1,
            rowSpan: 2,
            content: '<div class="p-4 bg-purple-100">Item 4 (2 rows)</div>'
        },
        {
            id: 'item5',
            content: '<div class="p-4 bg-red-100">Item 5</div>'
        }
    ];
</script>

<div class="p-4">
    <h1>GridLayout Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>Default GridLayout</h2>
        <GridLayout
            items={gridItems}
        />
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GridLayout with Custom Columns</h2>
        <GridLayout
            items={gridItems}
            columns="repeat(4, 1fr)"
        />
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GridLayout with Custom Styling</h2>
        <GridLayout
            items={gridItems}
            class="bg-gray-100"
            gap="2rem"
        />
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GridLayout with Fewer Columns</h2>
        <GridLayout
            items={gridItems}
            columns="repeat(2, 1fr)"
        />
    </div>
</div>