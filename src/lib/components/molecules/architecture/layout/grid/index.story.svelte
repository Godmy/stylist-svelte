<script>
    import Grid from './index.svelte';
</script>

<div class="p-4">
    <h1>Grid Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>Default Grid (2 columns)</h2>
        <Grid cols={2}>
            <div class="p-4 bg-blue-100 border">Item 1</div>
            <div class="p-4 bg-blue-200 border">Item 2</div>
            <div class="p-4 bg-blue-300 border">Item 3</div>
            <div class="p-4 bg-blue-400 border">Item 4</div>
        </Grid>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>Grid with 3 Columns</h2>
        <Grid cols={3}>
            <div class="p-4 bg-green-100 border">Item 1</div>
            <div class="p-4 bg-green-200 border">Item 2</div>
            <div class="p-4 bg-green-300 border">Item 3</div>
            <div class="p-4 bg-green-400 border">Item 4</div>
            <div class="p-4 bg-green-500 text-white border">Item 5</div>
            <div class="p-4 bg-green-600 text-white border">Item 6</div>
        </Grid>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>Grid with Custom Styling</h2>
        <Grid cols={2} class="bg-gray-100" style="border: 2px solid #ccc;">
            <div class="p-6 bg-yellow-100 border-2 border-yellow-300">Styled Item 1</div>
            <div class="p-6 bg-yellow-200 border-2 border-yellow-300">Styled Item 2</div>
            <div class="p-6 bg-yellow-300 border-2 border-yellow-300">Styled Item 3</div>
            <div class="p-6 bg-yellow-400 border-2 border-yellow-300">Styled Item 4</div>
        </Grid>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>Grid with Large Gap</h2>
        <Grid cols={2} gap="xl">
            <div class="p-4 bg-purple-100 border">Item 1</div>
            <div class="p-4 bg-purple-200 border">Item 2</div>
            <div class="p-4 bg-purple-300 border">Item 3</div>
            <div class="p-4 bg-purple-400 border">Item 4</div>
        </Grid>
    </div>
</div>