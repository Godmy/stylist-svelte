<script>
  import ResponseViewer from './ResponseViewer.svelte';

  const sampleData = {
    status: 'success',
    data: {
      id: 1,
      name: 'Sample Item',
      value: 42,
      nested: {
        property: 'example',
        list: [1, 2, 3]
      }
    },
    timestamp: new Date().toISOString()
  };
</script>

<div class="p-4">
  <h1>ResponseViewer Story</h1>
  <ResponseViewer
    data={sampleData}
    class="my-2"
  />
</div>