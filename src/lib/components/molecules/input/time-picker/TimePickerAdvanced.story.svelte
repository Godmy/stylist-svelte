<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TimePicker from './TimePicker.svelte';

    type Props = {
        value?: string;
        disabled?: boolean;
        class?: string;
        dropdownClass?: string;
        showSeconds?: boolean;
        onChange?: (time: string) => void; // Added for story's on:change
    };

    const controls: ControlConfig[] = [
        {
            name: 'value',
            type: 'text',
            defaultValue: '12:00'
        },
        {
            name: 'showSeconds',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleTimeChange(time: string) {
        console.log('Time changed to:', time);
    }
</script>

<Story
    id="molecules-time-picker-advanced"
    title="TimePickerAdvanced"
    component={TimePicker}
    category="Molecules"
    description="Advanced TimePicker with additional options"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TimePicker
                value={props.value || '12:00'}
                showSeconds={props.showSeconds}
            />
        </div>
    {/snippet}
</Story>