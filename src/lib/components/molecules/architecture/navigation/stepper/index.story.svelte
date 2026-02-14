<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import Stepper, { type Step, type Props } from './index.svelte';

    const defaultSteps: Step[] = [
        {
            id: 'step-1',
            title: 'Personal Information',
            description: 'Provide your name and contact details',
            status: 'completed'
        },
        {
            id: 'step-2',
            title: 'Shipping Address',
            description: 'Enter your delivery address',
            status: 'current'
        },
        {
            id: 'step-3',
            title: 'Payment Method',
            description: 'Choose how you want to pay',
            status: 'upcoming'
        },
        {
            id: 'step-4',
            title: 'Order Summary',
            description: 'Review and confirm your order',
            status: 'upcoming'
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'orientation',
            type: 'select',
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal'
        }
    ];
</script>

<Story
    id="molecules-stepper"
    title="Stepper"
    component={Stepper}
    category="Molecules"
    description="Stepper component for guiding users through steps"
    controls={controls}
>
    {#snippet children(props: any)}
        <div class="p-4">
            <Stepper
                steps={defaultSteps}
                orientation={props.orientation}
            />
        </div>
    {/snippet}
</Story>


