<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PredictionResult from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Prediction Result' },
    { name: 'status', type: 'select', options: ['success', 'warning', 'error', 'loading'], defaultValue: 'success' },
    { name: 'showChart', type: 'boolean', defaultValue: true }
  ];

  const samplePredictions = [
    { label: 'Class A', value: 0.85, confidence: 0.92 },
    { label: 'Class B', value: 0.12, confidence: 0.65 },
    { label: 'Class C', value: 0.03, confidence: 0.43 }
  ];
</script>

<Story
  id="organisms-prediction-result"
  title="Prediction Result"
  component={PredictionResult}
  category="Organisms"
  description="Displays prediction outcomes with confidence and breakdown."
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-prediction-result grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <PredictionResult
        title={props.title}
        status={props.status}
        showChart={props.showChart}
        predictions={samplePredictions}
        actualValue={0.81}
        predictedValue={0.85}
        confidence={0.92}
        modelUsed="Gradient Boost v2"
        description="Model predicts the likely output class from the latest feature set."
      />
    </section>
  {/snippet}
</Story>

