<script lang="ts">
  import CountryFlag from './CountryFlag.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type CountryFlagStoryProps = {
    countryCode: string;
    size: number;
    showFallback: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'countryCode', type: 'text', defaultValue: 'US' },
    { name: 'size', type: 'number', min: 16, max: 96, step: 4, defaultValue: 32 },
    { name: 'showFallback', type: 'boolean', defaultValue: false }
  ];

  const featuredCountries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'JP', name: 'Japan' },
    { code: 'DE', name: 'Germany' },
    { code: 'BR', name: 'Brazil' },
    { code: 'AE', name: 'United Arab Emirates' }
  ];
</script>

<Story
  id="atoms-country-flag"
  title="CountryFlag"
  category="Atoms"
  component={CountryFlag}
  description="Renders regional flag emoji for a two letter country code with graceful fallback UI."
  tags={['locale', 'flag', 'international']}
  controls={controls}
>
  {#snippet children(props: CountryFlagStoryProps)}
    {#snippet fallbackContent()}
      <span class="text-[10px] font-semibold uppercase tracking-wide text-[--color-text-primary]">??</span>
    {/snippet}

    <div class="space-y-6">
      <div class="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
        <CountryFlag
          countryCode={props.showFallback ? '??' : props.countryCode}
          size={props.size}
          content={props.showFallback ? fallbackContent : undefined}
        />

        <div class="text-sm">
          <p class="font-semibold text-gray-900 dark:text-white">
            {props.showFallback ? 'Custom fallback' : props.countryCode?.toUpperCase() || '—'}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Size: {props.size}px
          </p>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {#each featuredCountries as country}
          <div class="flex items-center gap-3 rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
            <CountryFlag countryCode={country.code} size={28} />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">{country.name}</p>
              <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{country.code}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
</Story>

