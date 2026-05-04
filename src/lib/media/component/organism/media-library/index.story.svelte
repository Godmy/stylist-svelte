<script lang="ts">
  import type { MediaItem } from '$stylist/media';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import MediaLibrary from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'allowUpload', type: 'boolean', defaultValue: true },
    { name: 'allowDownload', type: 'boolean', defaultValue: true },
    { name: 'allowDelete', type: 'boolean', defaultValue: true }
  ];

  const items: MediaItem[] = [
    { id: '1', url: 'https://via.placeholder.com/150', thumbnail: 'https://via.placeholder.com/150', type: 'image', name: 'Image 1', size: 102400, uploadDate: new Date() },
    { id: '2', url: 'https://via.placeholder.com/150', thumbnail: 'https://via.placeholder.com/150', type: 'image', name: 'Image 2', size: 204800, uploadDate: new Date() }
  ];
</script>

<Story component={MediaLibrary} title="Media Library" description="Media library with upload and selection." controls={controls}>
  {#snippet children(values: any)}
    <div class="h-96">
      <MediaLibrary
        {items}
        allowUpload={values.allowUpload as boolean}
        allowDownload={values.allowDownload as boolean}
        allowDelete={values.allowDelete as boolean}
        onItemSelect={(item: MediaItem) => console.log('Item selected:', item)}
        onItemDelete={(id: string) => console.log('Item deleted:', id)}
        onItemDownload={(id: string) => console.log('Item downloaded:', id)}
        onUpload={(files: FileList) => console.log('Files uploaded:', files.length)}
      />
    </div>
  {/snippet}
</Story>
