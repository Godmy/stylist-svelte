<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ImageGallery from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showThumbnails', type: 'boolean', defaultValue: true },
      { name: 'autoPlay', type: 'boolean', defaultValue: false },
      { name: 'showCaptions', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type ImageItem = {
    id: string;
    src: string;
    alt: string;
    caption: string;
  };

  const images: ImageItem[] = [
    {
      id: '1',
      src: 'https://placehold.co/800x600/3b82f6/white?text=Image+1',
      alt: 'First image',
      caption: 'Beautiful landscape image'
    },
    {
      id: '2',
      src: 'https://placehold.co/800x600/ef4444/white?text=Image+2',
      alt: 'Second image',
      caption: 'Colorful sunset'
    },
    {
      id: '3',
      src: 'https://placehold.co/800x600/10b981/white?text=Image+3',
      alt: 'Third image',
      caption: 'Mountain view'
    },
    {
      id: '4',
      src: 'https://placehold.co/800x600/f59e0b/white?text=Image+4',
      alt: 'Fourth image',
      caption: 'Ocean waves'
    },
    {
      id: '5',
      src: 'https://placehold.co/800x600/8b5cf6/white?text=Image+5',
      alt: 'Fifth image',
      caption: 'Forest trail'
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={ImageGallery}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-image-gallery grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Image Gallery Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive image gallery with customizable options.</p>

        <div class="mt-6">
          <ImageGallery
            {images}
            showThumbnails={values.showThumbnails}
            autoPlay={values.autoPlay}
            showCaptions={values.showCaptions}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Image Gallery Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different image gallery configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Thumbnails</p>
            <div>
              <ImageGallery
                {images}
                showThumbnails={false}
                showCaptions={true}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Captions</p>
            <div>
              <ImageGallery
                {images}
                showThumbnails={true}
                showCaptions={false}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
