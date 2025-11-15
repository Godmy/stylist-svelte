<script lang="ts">
  import Favicon from './Favicon.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type FaviconStoryProps = {
    url: string;
    size: number;
    showCustomContent: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'url', type: 'text', defaultValue: 'https://svelte.dev' },
    { name: 'size', type: 'number', min: 16, max: 96, step: 4, defaultValue: 32 },
    { name: 'showCustomContent', type: 'boolean', defaultValue: false }
  ];

  const techSites = [
    { label: 'Svelte', url: 'https://svelte.dev' },
    { label: 'OpenAI', url: 'https://openai.com' },
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'Vercel', url: 'https://vercel.com' },
    { label: 'Netlify', url: 'https://www.netlify.com' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com' }
  ];
</script>

<Story
  id="atoms-favicon"
  title="Favicon"
  category="Atoms"
  component={Favicon}
  description="Generates favicon previews directly from a site URL with optional custom placeholder."
  tags={['favicon', 'branding', 'preview']}
  controls={controls}
>
  {#snippet children(props: FaviconStoryProps)}
    {#snippet placeholderBadge()}
      <span class="text-[10px] font-semibold uppercase tracking-wide text-white">APP</span>
    {/snippet}

    <div class="space-y-6">
      <div class="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
        <Favicon
          url={props.url}
          size={props.size}
          content={props.showCustomContent ? placeholderBadge : undefined}
        />

        <div class="text-sm">
          <p class="font-semibold text-gray-900 dark:text-white">{props.url || 'No URL provided'}</p>
          <p class="text-gray-500 dark:text-gray-400">Rendered at {props.size}px</p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each techSites as site}
          <div class="flex items-center gap-3 rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
            <Favicon url={site.url} size={24} />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">{site.label}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{site.url}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
</Story>

