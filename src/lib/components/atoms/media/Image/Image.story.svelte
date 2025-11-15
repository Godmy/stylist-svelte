<script lang="ts">
  import Image from './Image.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type ImageStoryProps = {
    src: string;
    fallback: string;
    width: number;
    height: number;
    loading: 'lazy' | 'eager';
    simulateError: boolean;
  };

  const primarySrc = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=960&q=80&auto=format&fit=crop';
  const fallbackSrc = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=640&q=80&auto=format&fit=crop';

  const controls: ControlConfig[] = [
    { name: 'src', type: 'text', defaultValue: primarySrc },
    { name: 'fallback', type: 'text', defaultValue: fallbackSrc },
    { name: 'width', type: 'number', defaultValue: 320, min: 160, max: 640, step: 20 },
    { name: 'height', type: 'number', defaultValue: 200, min: 120, max: 480, step: 20 },
    { name: 'loading', type: 'select', defaultValue: 'lazy', options: ['lazy', 'eager'] },
    { name: 'simulateError', type: 'boolean', defaultValue: false }
  ];

  const gallery = [
    {
      title: 'Product UX',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=80&auto=format&fit=crop'
    },
    {
      title: 'Team culture',
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&q=80&auto=format&fit=crop'
    },
    {
      title: 'Learning lab',
      src: 'https://images.unsplash.com/photo-1521737604893-5ef4c1c02741?w=640&q=80&auto=format&fit=crop'
    }
  ];
</script>

<Story
  id="atoms-image"
  title="Image"
  category="Atoms"
  component={Image}
  description="Progressively loads responsive images with placeholder content and fallback handling."
  tags={['media', 'responsive', 'fallback']}
  controls={controls}
>
  {#snippet children(props: ImageStoryProps)}
    {#snippet shimmer()}
      <div class="h-full w-full animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
    {/snippet}

    <div class="space-y-6">
      <div class="rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-4 shadow-sm dark:from-gray-900 dark:to-gray-800 dark:border-gray-800">
        <Image
          src={props.simulateError ? 'https://invalid-url.example.com/image.png' : props.src}
          fallback={props.fallback}
          alt="Featured visual"
          loading={props.loading}
          width={props.width}
          height={props.height}
          content={shimmer}
          class="rounded-xl"
        />

        <div class="mt-4 grid gap-2 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
          <p>
            Source:
            <span class="font-medium text-gray-900 dark:text-white">
              {props.simulateError ? 'Broken link (fallback demo)' : 'Remote image'}
            </span>
          </p>
          <p>
            Loading strategy:
            <span class="font-medium text-gray-900 dark:text-white">{props.loading}</span>
          </p>
          <p>Dimensions: {props.width} × {props.height}px</p>
          <p>Fallback: {props.fallback ? 'Enabled' : 'Disabled'}</p>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        {#each gallery as card}
          <div class="rounded-xl border border-gray-200/80 bg-white/70 p-3 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
            <Image
              src={card.src}
              alt={card.title}
              width={320}
              height={200}
              loading="lazy"
              content={shimmer}
              class="rounded-lg"
            />
            <p class="mt-3 text-sm font-semibold text-gray-900 dark:text-white">{card.title}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Lazy loaded with shared placeholder</p>
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
</Story>

