<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SliderWithInput from './SliderWithInput.svelte';

    type Props = {
        min?: number;
        max?: number;
        step?: number;
        value?: number;
        disabled?: boolean;
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
        },
        {
            name: 'value',
            type: 'number',
            defaultValue: 50
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-slider-with-input"
    title="SliderWithInput"
    component={SliderWithInput}
    category="Molecules"
    description="Slider with input component for value selection"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SliderWithInput
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                disabled={props.disabled}
            />
        </div>
    {/snippet}
</Story>