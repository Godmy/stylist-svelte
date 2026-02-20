<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ImageWithCaption from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'src', type: 'text', defaultValue: 'https://placehold.co/640x360' },
    { name: 'alt', type: 'text', defaultValue: 'Example image' },
    { name: 'caption', type: 'text', defaultValue: 'Example caption' },
    { name: 'rounded', type: 'boolean', defaultValue: false },
    { name: 'bordered', type: 'boolean', defaultValue: true },
    { name: 'shadow', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-image-with-caption"
  title="Image With Caption"
  component={ImageWithCaption}
  category="Atoms"
  description="An image component with caption and styling options."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Image With Caption Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">An image component with caption and styling options.</p>

        <div class="mt-6 flex items-center justify-center">
          <ImageWithCaption
            src={values.src}
            alt={values.alt}
            caption={values.caption}
            rounded={values.rounded}
            bordered={values.bordered}
            shadow={values.shadow}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Image With Caption Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different image with caption configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Rounded Corners</p>
            <ImageWithCaption
              src="https://placehold.co/640x360/3b82f6/ffffff?text=Rounded"
              alt="Rounded image"
              caption="Image with rounded corners"
              rounded={true}
              bordered={true}
              shadow={true}
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Border</p>
            <ImageWithCaption
              src="https://placehold.co/640x360/ef4444/ffffff?text=No+Border"
              alt="No border image"
              caption="Image without border"
              rounded={false}
              bordered={false}
              shadow={true}
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Shadow</p>
            <ImageWithCaption
              src="https://placehold.co/640x360/10b981/ffffff?text=No+Shadow"
              alt="No shadow image"
              caption="Image without shadow"
              rounded={true}
              bordered={true}
              shadow={false}
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
