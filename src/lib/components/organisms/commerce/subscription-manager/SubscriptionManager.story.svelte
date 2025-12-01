<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SubscriptionManager from './SubscriptionManager.svelte';

    type Props = {
        showActions?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'showActions',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-subscription-manager"
    title="SubscriptionManager"
    component={SubscriptionManager}
    category="Molecules"
    description="Subscription manager component for managing user subscriptions"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SubscriptionManager
                subscription={{
                    id: '1',
                    plan: {
                        id: 'basic',
                        name: 'Basic Plan',
                        description: 'Perfect for getting started',
                        price: 9.99,
                        period: 'month',
                        currency: 'USD',
                        features: [
                            'Up to 5 projects',
                            '3GB storage',
                            'Basic support'
                        ]
                    },
                    startDate: new Date('2023-01-01'),
                    nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                    status: 'active',
                    paymentMethod: 'Visa ending in 1234',
                    autoRenew: false
                }}
                showActions={props.showActions}
            />
        </div>
    {/snippet}
</Story>