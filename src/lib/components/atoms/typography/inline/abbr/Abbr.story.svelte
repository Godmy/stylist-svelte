<script lang="ts">
  import Abbr from './Abbr.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type AbbrStoryProps = {
    label: string;
    title: string;
    emphasize: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'label', type: 'text', defaultValue: 'API' },
    { name: 'title', type: 'text', defaultValue: 'Application Programming Interface' },
    { name: 'emphasize', type: 'boolean', defaultValue: false }
  ];

  const glossary = [
    { label: 'CI/CD', title: 'Continuous Integration & Continuous Delivery' },
    { label: 'DX', title: 'Developer Experience' },
    { label: 'A11y', title: 'Accessibility' }
  ];
</script>

<Story
  id="atoms-abbr"
  title="Abbr"
  component={Abbr}
  category="Atoms"
  description="Accessible abbreviation with dotted underline hinting at hover/click tooltips."
  tags={['typography', 'content', 'a11y']}
  controls={controls}
>
  {#snippet children(props: AbbrStoryProps)}
    <div class="space-y-6">
      <div class="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/40">
        <p class="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
          Build brilliant experiences by connecting your
          <Abbr title={props.title} class={props.emphasize ? 'text-indigo-600 font-semibold' : ''}>
            {props.label}
          </Abbr>
          with product storytelling. Hover or focus the abbreviation to reveal the expansion.
        </p>
      </div>

      <div class="rounded-2xl border border-dashed border-gray-200/80 p-4 dark:border-gray-700">
        <p class="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">Glossary</p>
        <div class="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-200">
          {#each glossary as term}
            <Abbr title={term.title} class="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
              {term.label}
            </Abbr>
          {/each}
        </div>
      </div>
    </div>
  {/snippet}
</Story>

