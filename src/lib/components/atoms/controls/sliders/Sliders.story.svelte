<script lang="ts">
  import { RangeSlider, SliderTick } from '$lib';
  import type { Meta } from '@storybook/svelte';

  const meta: Meta = {
    title: 'Atoms/Controls/Sliders',
    tags: ['autodocs'],
    argTypes: {
      min: { control: { type: 'number' } },
      max: { control: { type: 'number' } },
      step: { control: { type: 'number' } },
      disabled: { control: { type: 'boolean' } }
    }
  };

  export default meta;
</script>

# Sliders

## RangeSlider

<ComponentStory>
  <script>
    let min = 0;
    let max = 100;
    let step = 1;
    let value = 50;
    let disabled = false;
    
    function handleValueChange(e: CustomEvent<{ value: number }>) {
      console.log('Slider value changed:', e.detail.value);
      value = e.detail.value;
    }
  </script>
  
  <div class="space-y-6">
    <RangeSlider 
      {min} 
      {max} 
      {step} 
      {value}
      {disabled}
      on:valueChange={handleValueChange}
    />
    
    <div class="w-full">
      <p>Значение: {value}</p>
    </div>
    
    <div class="space-y-4">
      <div class="space-x-4">
        <label>
          <input type="checkbox" bind:checked={disabled} /> Disabled
        </label>
      </div>
      
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label>Min: <input type="number" bind:value={min} /></label>
        </div>
        <div>
          <label>Max: <input type="number" bind:value={max} /></label>
        </div>
        <div>
          <label>Step: <input type="number" bind:value={step} /></label>
        </div>
      </div>
    </div>
  </div>
</ComponentStory>

## SliderTick

<ComponentStory>
  <script>
    import { RangeSlider } from '$lib';
    
    let min = 0;
    let max = 100;
    let step = 25;
    let value = 50;
    
    function handleValueChange(e: CustomEvent<{ value: number }>) {
      console.log('Slider value changed:', e.detail.value);
      value = e.detail.value;
    }
  </script>
  
  <div class="space-y-6">
    <RangeSlider 
      {min} 
      {max} 
      {step} 
      {value}
      showTicks={true}
      on:valueChange={handleValueChange}
    />
    
    <div class="w-full">
      <p>Значение: {value}</p>
    </div>
    
    <div class="grid grid-cols-3 gap-4">
      <div>
        <label>Min: <input type="number" bind:value={min} /></label>
      </div>
      <div>
        <label>Max: <input type="number" bind:value={max} /></label>
      </div>
      <div>
        <label>Step: <input type="number" bind:value={step} /></label>
      </div>
    </div>
  </div>
</ComponentStory>