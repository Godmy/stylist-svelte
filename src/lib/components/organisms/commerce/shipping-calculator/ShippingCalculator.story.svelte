<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ShippingCalculator from './ShippingCalculator.svelte';

    type ShippingOption = {
        id: string;
        name: string;
        description: string;
        price: number;
        estimatedDays: number;
        carrier?: string;
        trackingAvailable?: boolean;
    };

    type Country = {
        code: string;
        name: string;
    };

    type Props = {
        shippingOptions?: ShippingOption[];
        countries?: Country[];
        defaultOriginCountry?: string;
        defaultDestinationCountry?: string;
        showWeightInput?: boolean;
        showDimensionsInput?: boolean;
    };

    const defaultShippingOptions: ShippingOption[] = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            price: 9.99,
            description: 'Economical shipping option',
            estimatedDays: 6
        },
        {
            id: 'express',
            name: 'Express Shipping',
            price: 19.99,
            description: 'Faster shipping with priority handling',
            estimatedDays: 2
        },
        {
            id: 'overnight',
            name: 'Overnight Shipping',
            price: 39.99,
            description: 'Guaranteed overnight delivery',
            estimatedDays: 1
        }
    ];

    const defaultCountries: Country[] = [
        {
            code: 'US',
            name: 'United States'
        },
        {
            code: 'CA',
            name: 'Canada'
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'defaultOriginCountry',
            type: 'text',
            defaultValue: 'US'
        },
        {
            name: 'defaultDestinationCountry',
            type: 'text',
            defaultValue: 'US'
        },
        {
            name: 'showWeightInput',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showDimensionsInput',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-shipping-calculator"
    title="ShippingCalculator"
    component={ShippingCalculator}
    category="Molecules"
    description="Calculator for shipping costs and delivery times"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ShippingCalculator
                shippingOptions={props.shippingOptions || defaultShippingOptions}
                countries={props.countries || defaultCountries}
                defaultOriginCountry={props.defaultOriginCountry}
                defaultDestinationCountry={props.defaultDestinationCountry}
                showWeightInput={props.showWeightInput}
                showDimensionsInput={props.showDimensionsInput}
            />
        </div>
    {/snippet}
</Story>