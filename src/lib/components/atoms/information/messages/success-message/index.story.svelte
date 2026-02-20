<script lang="ts">
    import Story from '$stylist/design-system/playground/Story.svelte';
    import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';
    import SuccessMessage from './index.svelte';

    const controls = [
        {
            name: 'message',
            type: CONTROL_TYPES.TEXT,
            defaultValue: 'Operation completed successfully!'
        },
        {
            name: 'show',
            type: CONTROL_TYPES.BOOLEAN,
            defaultValue: true
        },
        {
            name: 'duration',
            type: CONTROL_TYPES.SELECT,
            options: [1000, 3000, 5000, 10000],
            defaultValue: 5000
        }
    ];
</script>

<Story
    {controls}
    component={SuccessMessage}
    title="SuccessMessage"
    category="Atoms/Information/Messages"
    description="Success message component for displaying successful operations"
    tags={['message', 'success', 'notification', 'feedback']}
>
    {#snippet children(values: any)}
        <div class="p-4">
            <SuccessMessage
                message={values.message}
                show={values.show}
                duration={values.duration}
            />
        </div>
    {/snippet}
</Story>

