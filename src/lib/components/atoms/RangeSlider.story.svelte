<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import RangeSlider from './RangeSlider.svelte';

  type RangeSliderStoryProps = {
    label: string;
    min: number;
    max: number;
    value: number;
    step: number;
    showValue: boolean;
    disabled: boolean;
    description: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Уровень громкости'
    },
    {
      name: 'min',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 90,
      step: 5
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
      min: 10,
      max: 200,
      step: 10
    },
    {
      name: 'value',
      type: 'number',
      defaultValue: 60,
      min: 0,
      max: 100,
      step: 5
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20,
      step: 1
    },
    {
      name: 'showValue',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Двигая бегунок, выберите комфортный уровень.'
    }
  ];
</script>

<Story
  id="atoms-range-slider"
  title="RangeSlider"
  component={RangeSlider}
  category="Atoms"
  description="Одиночный слайдер для выбора числовых значений с подсказкой."
  tags={['slider', 'input', 'control']}
  controls={controls}
>
  {#snippet children(props: RangeSliderStoryProps)}
    <div class="space-y-6 max-w-md">
      <RangeSlider
        id="range-slider-story"
        label={props.label}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        showValue={props.showValue}
        description={props.description}
        disabled={props.disabled}
      />

      <div class="space-y-2">
        <p class="text-sm text-gray-600">
          Текущее значение: <span class="font-semibold">{props.value}</span>
        </p>
        <div class="h-2 rounded-full bg-gray-200">
          <div
            class="h-2 rounded-full bg-indigo-500 transition-all duration-200"
            style={`width: ${((props.value - props.min) / (props.max - props.min)) * 100}%`}
          ></div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>
