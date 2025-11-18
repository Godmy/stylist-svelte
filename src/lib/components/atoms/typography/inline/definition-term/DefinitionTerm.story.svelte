<script lang="ts">
  import DefinitionTerm from '../DefinitionTerm.svelte';
  import DefinitionDescription from '../DefinitionDescription.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type DefinitionTermStoryProps = {
    term: string;
    description: string;
    highlight: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'term', type: 'text', defaultValue: 'North Star Metric' },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Singular KPI that captures the core value delivered to your best customers.'
    },
    { name: 'highlight', type: 'boolean', defaultValue: true }
  ];

  const definitions = [
    {
      term: 'Activation rate',
      description: 'Percentage of new users that reach an aha-moment within the first session.'
    },
    {
      term: 'Time to value',
      description: 'Duration between signup and the first realized outcome.'
    },
    {
      term: 'Feature adoption',
      description: 'Share of active accounts that use a specific feature in the last 30 days.'
    }
  ];
</script>

<Story
  id="atoms-definition-term"
  title="DefinitionTerm"
  component={DefinitionTerm}
  category="Atoms"
  description="Bold heading for definition lists, typically paired with DefinitionDescription."
  tags={['typography', 'glossary']}
  controls={controls}
>
  {#snippet children(props: DefinitionTermStoryProps)}
    <div class="space-y-6">
      <dl class="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/40">
        <DefinitionTerm className={props.highlight ? 'text-indigo-600' : ''}>
          {props.term}
        </DefinitionTerm>
        <DefinitionDescription className="text-sm leading-relaxed">
          {props.description}
        </DefinitionDescription>
      </dl>

      <dl class="space-y-4 rounded-2xl border border-dashed border-gray-200/80 p-5 text-sm dark:border-gray-800">
        {#each definitions as item}
          <div class="space-y-1">
            <DefinitionTerm>{item.term}</DefinitionTerm>
            <DefinitionDescription>{item.description}</DefinitionDescription>
          </div>
        {/each}
      </dl>
    </div>
  {/snippet}
</Story>

