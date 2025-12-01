<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NumberInput from './NumberInput.svelte';

  type Props = {
    min: number;
    max: number;
    step: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'min',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 1
    }
  ];
</script>

<Story
  id="molecules-number-input"
  title="NumberInput"
  component={NumberInput}
  category="Molecules"
  description="An input component specifically for numeric values."
  tags={['input', 'number', 'form']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">Number Input</h2>
      <div class="space-y-6">
        <NumberInput
          min={props.min}
          max={props.max}
          step={props.step}
        />
      </div>
    </div>
  {/snippet}
</Story>