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
            defaultValue: '14:30'
        },
        {
            name: 'showSeconds',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleTimeChange(time: string) {
        console.log('Time changed to:', time);
    }
</script>

<Story
    id="molecules-time-picker"
    title="TimePicker"
    component={TimePicker}
    category="Molecules"
    description="Time picker component with customizable options"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TimePicker
                value={props.value || '14:30'}
                showSeconds={props.showSeconds}
                disabled={props.disabled}
                on:change={(e: CustomEvent<{time: string}>) => {
                    if (e.detail && e.detail.time) {
                        handleTimeChange(e.detail.time);
                    }
                }}
            />
        </div>
    {/snippet}
</Story>