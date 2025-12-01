<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ShippingInfo from './ShippingInfo.svelte';

    type ShippingOption = {
        id: string;
        name: string;
        description: string;
        price: number;
        estimatedDays: number;
        available?: boolean;
        disabled?: boolean;
        cutoffTime?: string;
        carrier?: string;
        trackingAvailable?: boolean;
        signatureRequired?: boolean;
        insurance?: boolean;
        carbonNeutral?: boolean;
    };

    type ShippingRegion = {
        id: string;
        name: string;
        countries: string[];
        additionalFee?: number;
        restrictions?: string[];
    };

    type Props = {
        shippingOptions?: ShippingOption[];
        regions?: ShippingRegion[];
        estimatedDeliveryDate?: Date;
        freeShippingThreshold?: number;
        showOptions?: boolean;
        showRegions?: boolean;
        showDeliveryEstimate?: boolean;
        showFreeShippingInfo?: boolean;
        showRestrictions?: boolean;
        showCarbonNeutralOptions?: boolean;
        showEstimates?: boolean;
        deliveryEstimate?: Date;
        showFreeShipping?: boolean;
    };

    const defaultShippingOptions: ShippingOption[] = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            description: 'Economical shipping option',
            price: 9.99,
            estimatedDays: 5,
            available: true,
            trackingAvailable: true,
            carbonNeutral: false
        },
        {
            id: 'express',
            name: 'Express Shipping',
            description: 'Faster shipping with priority handling',
            price: 19.99,
            estimatedDays: 2,
            available: true,
            trackingAvailable: true,
            signatureRequired: true
        }
    ];

    const defaultRegions: ShippingRegion[] = [
        {
            id: 'us_can',
            name: 'US & Canada',
            countries: ['US', 'CA']
        },
        {
            id: 'europe',
            name: 'Europe',
            countries: ['DE', 'FR', 'GB', 'IT'],
            additionalFee: 5.00
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'estimatedDeliveryDate',
            type: 'date',
            defaultValue: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
        },
        {
            name: 'freeShippingThreshold',
            type: 'number',
            defaultValue: 50
        },
        {
            name: 'showOptions',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showRegions',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showDeliveryEstimate',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showFreeShippingInfo',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showRestrictions',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showCarbonNeutralOptions',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-shipping-info"
    title="ShippingInfo"
    component={ShippingInfo}
    category="Molecules"
    description="Component to display shipping information and tracking"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ShippingInfo
                shippingOptions={props.shippingOptions || defaultShippingOptions}
                regions={props.regions || defaultRegions}
                estimatedDeliveryDate={props.estimatedDeliveryDate}
                freeShippingThreshold={props.freeShippingThreshold}
                showOptions={props.showOptions}
                showRegions={props.showRegions}
                showDeliveryEstimate={props.showDeliveryEstimate}
                showFreeShippingInfo={props.showFreeShippingInfo}
                showRestrictions={props.showRestrictions}
                showCarbonNeutralOptions={props.showCarbonNeutralOptions}
            />
        </div>
    {/snippet}
</Story>