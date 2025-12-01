<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TaxCalculator from './TaxCalculator.svelte';

    type Props = {
        locations?: Array<{
            id: string;
            name: string;
            countryCode: string;
            city: string;
            taxRates: Array<{
                id: string;
                name: string;
                rate: number;
                description: string;
            }>;
        }>;
        taxRates?: Array<{
            id: string;
            name: string;
            rate: number;
            description: string;
        }>;
        defaultAmount?: number;
        defaultLocation?: string;
        showLocationSelector?: boolean;
        defaultIncludeTax?: boolean;
        onCalculate?: (result: any) => void;
    };

    const locations = [
        {
            id: 'ca',
            name: 'California',
            countryCode: 'US',
            city: 'Los Angeles',
            taxRates: [
                { id: 'ca_state', name: 'CA State Tax', rate: 6.25, description: 'California State Tax' },
                { id: 'ca_county', name: 'LA County Tax', rate: 1.25, description: 'Los Angeles County Tax' },
                { id: 'ca_special', name: 'LA Special Tax', rate: 0.5, description: 'Special District Tax' }
            ]
        },
        {
            id: 'ny',
            name: 'New York',
            countryCode: 'US',
            city: 'New York City',
            taxRates: [
                { id: 'ny_state', name: 'NY State Tax', rate: 4.0, description: 'New York State Tax' },
                { id: 'ny_city', name: 'NYC Tax', rate: 4.5, description: 'New York City Tax' }
            ]
        }
    ];

    const generalTaxRates = [
        { id: 'federal', name: 'Federal Excise Tax', rate: 1.5, description: 'Federal excise tax on specific items' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'defaultAmount',
            type: 'number',
            defaultValue: 100
        },
        {
            name: 'showLocationSelector',
            type: 'boolean',
            defaultValue: true
        }
    ];

    function handleCalculate(result: any) {
        console.log('Tax calculation result:', result);
    }
</script>

<Story
    id="molecules-tax-calculator"
    title="TaxCalculator"
    component={TaxCalculator}
    category="Molecules"
    description="Calculator for tax computations"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TaxCalculator
                locations={props.locations || locations}
                taxRates={props.taxRates || generalTaxRates}
                defaultAmount={props.defaultAmount || 100}
                showLocationSelector={props.showLocationSelector}
                onCalculate={handleCalculate}
            />
        </div>
    {/snippet}
</Story>