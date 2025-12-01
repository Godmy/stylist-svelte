<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SuccessMessage from './SuccessMessage.svelte';

    type Props = {
        message?: string;
        show?: boolean;
        duration?: number;
    };

    const controls: ControlConfig[] = [
        {
            name: 'message',
            type: 'text',
            defaultValue: 'Operation completed successfully!'
        },
        {
            name: 'show',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'duration',
            type: 'number',
            defaultValue: 5000
        }
    ];
</script>

<Story
    id="molecules-success-message"
    title="SuccessMessage"
    component={SuccessMessage}
    category="Molecules"
    description="Success message component for displaying successful operations"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SuccessMessage
                message={props.message}
                show={props.show}
                duration={props.duration}
            />
        </div>
    {/snippet}
</Story>