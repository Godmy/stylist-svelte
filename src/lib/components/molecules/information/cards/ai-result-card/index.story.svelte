<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import AiResultCard from './index.svelte';

  type Props = {
    title: string;
    description: string;
    icon: string;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'AI Analysis Result' },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'This is the result of the AI analysis performed on your data.'
    },
    {
      name: 'icon',
      type: 'text',
      defaultValue: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/brain.svg'
    }
  ];
</script>

<Story
  id="molecules-ai-result-card"
  title="AiResultCard"
  component={AiResultCard}
  category="Molecules"
  description="Present AI-generated insights with iconography, copy, and custom content."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-[--color-text-primary] mb-4">Inline preview</h2>
        <AiResultCard
          title={props.title}
          description={props.description}
          icon={props.icon}
        >
          <ul class="mt-4 text-sm text-gray-700 space-y-2">
            <li>вЂў Confidence score: 92%</li>
            <li>вЂў Anomalies detected in 3 regions</li>
            <li>вЂў Suggested follow-up: rerun pipeline nightly</li>
          </ul>
        </AiResultCard>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Usage tips</h3>
        <p class="text-sm text-[--color-text-secondary] mt-2">
          Pair the card with dashboards or review flows to summarize AI reasoning.
        </p>
        <ul class="mt-4 space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Surface input metadata (dataset, timeframe) inside the custom slot.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Swap the icon for context-specific glyphs or avatars.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Highlight risk or confidence using tone-coded copy.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>




