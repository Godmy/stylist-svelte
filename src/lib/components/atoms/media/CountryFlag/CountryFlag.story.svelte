<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CountryFlag from './CountryFlag.svelte';

  type CountryFlagStoryProps = {
    countryCode: string;
    size: number;
  };

  const controls: ControlConfig[] = [
    { name: 'countryCode', type: 'text', defaultValue: 'US' },
    { name: 'size', type: 'number', min: 16, max: 96, step: 4, defaultValue: 32 }
  ];

  const featuredCountries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'JP', name: 'Japan' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'BR', name: 'Brazil' }
  ];
</script>

<Story
  id="atoms-country-flag"
  title="CountryFlag"
  component={CountryFlag}
  category="Atoms/Media"
  description="Renders regional flag emoji for a two letter country code with graceful fallback UI."
  tags={['locale', 'flag', 'international']}
  controls={controls}
>
  {#snippet children(props: CountryFlagStoryProps)}
    <div class="space-y-6">
      <div class="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
        <CountryFlag
          countryCode={props.countryCode}
          size={props.size}
        />

        <div class="text-sm">
          <p class="font-semibold text-gray-900 dark:text-white">
            {props.countryCode?.toUpperCase() || '—'}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Size: {props.size}px
          </p>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {#each featuredCountries as country}
          <div class="flex items-center gap-3 rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
            <CountryFlag countryCode={country.code} size={24} />
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

