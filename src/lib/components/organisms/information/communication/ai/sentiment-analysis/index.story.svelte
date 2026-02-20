<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import SentimentAnalysis from './index.svelte';
  import type { SentimentResult } from '$lib/design-system/props/sentiment-analysis';

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'I like this product. It works very well.' },
    { name: 'status', type: 'select', options: ['idle', 'analyzing', 'completed', 'error'], defaultValue: 'completed' }
  ];

  const sampleResult: SentimentResult = {
    score: 0.7,
    label: 'positive',
    confidence: 0.95,
    breakdown: {
      positive: 0.7,
      neutral: 0.2,
      negative: 0.1
    }
  };
</script>

<Story
  id="organisms-sentiment-analysis"
  title="Sentiment Analysis"
  component={SentimentAnalysis}
  category="Organisms"
  description="Analyzes text sentiment and displays confidence with score breakdown."
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-sentiment-analysis grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <SentimentAnalysis
        text={props.text}
        status={props.status}
        result={sampleResult}
      />
    </section>
  {/snippet}
</Story>

