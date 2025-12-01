<script lang="ts">
  import MediaLibrary from './MediaLibrary.svelte';

  type MediaItem = {
    id: string;
    url: string;
    type: string;
    name: string;
    size: number;
    uploadDate: Date;
  };

  const items: MediaItem[] = [
    { id: '1', url: 'https://via.placeholder.com/150', type: 'image', name: 'Image 1', size: 102400, uploadDate: new Date() },
    { id: '2', url: 'https://via.placeholder.com/150', type: 'image', name: 'Image 2', size: 204800, uploadDate: new Date() },
    { id: '3', url: 'https://via.placeholder.com/150', type: 'image', name: 'Image 3', size: 153600, uploadDate: new Date() },
    { id: '4', url: 'https://via.placeholder.com/150', type: 'image', name: 'Image 4', size: 256000, uploadDate: new Date() }
  ];

  // Mock handlers for required callbacks
  const onItemSelect = (item: MediaItem) => {
    console.log('Item selected:', item);
  }

  const onItemDelete = (id: string) => {
    console.log('Item deleted:', id);
  }

  const onItemDownload = (id: string) => {
    console.log('Item downloaded:', id);
  }

  const onUpload = (files: FileList) => {
    console.log('Files uploaded:', files);
  }
</script>

<div class="p-4">
  <h1>MediaLibrary Story</h1>
  <MediaLibrary
    {items}
    {onItemSelect}
    {onItemDelete}
    {onItemDownload}
    {onUpload}
    allowUpload={true}
    class="my-2"
  />
</div>