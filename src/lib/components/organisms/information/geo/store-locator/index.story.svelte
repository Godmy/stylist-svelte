<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import StoreLocator, { type Store, type Props } from './index.svelte';

    const defaultStores: Store[] = [
        {
            id: 'store-1',
            name: 'Downtown Electronics',
            address: '123 Main St',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62701',
            country: 'USA',
            phone: '555-123-4567',
            hours: 'Mon-Sat: 9 AM - 8 PM',
            rating: 4.5,
            distance: 5.2,
            latitude: 39.7817,
            longitude: -89.6501,
            services: ['Repairs', 'Installations'],
            pickupAvailable: true
        },
        {
            id: 'store-2',
            name: 'Tech Hub Central',
            address: '456 Oak Ave',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62704',
            country: 'USA',
            phone: '555-987-6543',
            hours: 'Mon-Fri: 10 AM - 7 PM',
            rating: 4.8,
            distance: 8.1,
            latitude: 39.7900,
            longitude: -89.6350,
            services: ['Consultation'],
            pickupAvailable: false
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'radius',
            type: 'number',
            defaultValue: 10
        },
        {
            name: 'showMap',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-store-locator"
    title="StoreLocator"
    component={StoreLocator}
    category="Molecules"
    description="Store locator component for finding nearby stores"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <StoreLocator
                stores={defaultStores}
                radius={props.radius}
                showMap={props.showMap}
            />
        </div>
    {/snippet}
</Story>