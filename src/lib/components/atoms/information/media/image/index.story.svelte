<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Image from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'src', type: 'text', defaultValue: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Main+Image' },
    { name: 'alt', type: 'text', defaultValue: 'Sample image' },
    { name: 'fallback', type: 'text', defaultValue: 'https://via.placeholder.com/600x400/94a3b8/ffffff?text=Fallback+Image' },
    { name: 'loading', type: 'select', options: ['lazy', 'eager'], defaultValue: 'lazy' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    { name: 'width', type: 'text', defaultValue: '' },
    { name: 'height', type: 'text', defaultValue: '' }
  ];
</script>

<Story
  id="atoms-image"
  title="Image"
  component={Image}
  category="Atoms"
  description="An image component with fallback and sizing options."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Image Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">An image component with fallback and sizing options.</p>

        <div class="mt-6 flex items-center justify-center">
          <Image
            src={props.src}
            alt={props.alt}
            fallback={props.fallback}
            loading={props.loading}
            width={props.width || undefined}
            height={props.height || undefined}
            size={props.size}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Image Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different image configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">All Sizes</p>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col items-center">
                <Image
                  src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=SM"
                  size="sm"
                  alt="Small image"
                />
                <span class="mt-1 text-xs">Small</span>
              </div>
              <div class="flex flex-col items-center">
                <Image
                  src="https://via.placeholder.com/400x300/1d4ed8/ffffff?text=MD"
                  size="md"
                  alt="Medium image"
                />
                <span class="mt-1 text-xs">Medium</span>
              </div>
              <div class="flex flex-col items-center">
                <Image
                  src="https://via.placeholder.com/600x400/1e40af/ffffff?text=LG"
                  size="lg"
                  alt="Large image"
                />
                <span class="mt-1 text-xs">Large</span>
              </div>
              <div class="flex flex-col items-center">
                <Image
                  src="https://via.placeholder.com/800x600/1e3a8a/ffffff?text=XL"
                  size="xl"
                  alt="Extra Large image"
                />
                <span class="mt-1 text-xs">Extra Large</span>
              </div>
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Fallback Example</p>
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-center">
                <Image
                  src="https://invalid-url-for-testing.com/image.jpg"
                  fallback="https://via.placeholder.com/300x200/f59e0b/ffffff?text=Fallback"
                  size="md"
                  alt="Image with fallback"
                />
                <span class="mt-1 text-xs">With Fallback</span>
              </div>
              <div class="flex flex-col items-center">
                <Image
                  src="https://via.placeholder.com/300x200/10b981/ffffff?text=Normal"
                  size="md"
                  alt="Normal image"
                />
                <span class="mt-1 text-xs">Normal</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

