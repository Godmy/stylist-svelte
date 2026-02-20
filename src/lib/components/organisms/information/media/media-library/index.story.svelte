<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import MediaLibrary from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showPreview', type: 'boolean', defaultValue: true },
      { name: 'showUpload', type: 'boolean', defaultValue: true },
      { name: 'multiSelect', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

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

  function handleItemSelect(item: MediaItem) {
    console.log('Item selected:', item);
  }

  function handleItemDelete(id: string) {
    console.log('Item deleted:', id);
  }

  function handleItemDownload(id: string) {
    console.log('Item downloaded:', id);
  }

  function handleUpload(files: FileList) {
    console.log('Files uploaded:', files);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={MediaLibrary}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-media-library grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Media Library Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive media library with customizable options.</p>

        <div class="mt-6 h-96">
          <MediaLibrary
            items={items}
            showPreview={props.showPreview}
            showUpload={props.showUpload}
            multiSelect={props.multiSelect}
            onItemSelect={handleItemSelect}
            onItemDelete={handleItemDelete}
            onItemDownload={handleItemDownload}
            onUpload={handleUpload}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Media Library Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different media library configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Preview</p>
            <div class="h-64">
              <MediaLibrary
                items={items}
                showPreview={false}
                onItemSelect={handleItemSelect}
                onItemDelete={handleItemDelete}
                onItemDownload={handleItemDownload}
                onUpload={handleUpload}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Multi Select</p>
            <div class="h-64">
              <MediaLibrary
                items={items}
                multiSelect={true}
                onItemSelect={handleItemSelect}
                onItemDelete={handleItemDelete}
                onItemDownload={handleItemDownload}
                onUpload={handleUpload}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
