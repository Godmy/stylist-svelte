<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SimplePaymentSelector from './PaymentSelector.svelte';

    type PaymentMethodType = 'credit_card' | 'debit_card' | 'bank_account' | 'digital_wallet';

    type PaymentMethod = {
        id: string;
        type: PaymentMethodType;
        name: string;
        details: string;
        expiry?: string;
        isDefault: boolean;
        brand?: string;
    };

    type Props = {
        methods?: PaymentMethod[];
        selectedMethod?: string;
        showAddButton?: boolean;
        showEditButton?: boolean;
    };

    const defaultMethods: PaymentMethod[] = [
        {
            id: 'card-1',
            type: 'credit_card',
            name: 'Visa ending in 1234',
            details: 'Credit Card •••• 1234',
            expiry: '12/25',
            isDefault: true,
            brand: 'Visa'
        },
        {
            id: 'card-2',
            type: 'debit_card',
            name: 'Mastercard ending in 5678',
            details: 'Debit Card •••• 5678',
            expiry: '08/26',
            isDefault: false,
            brand: 'Mastercard'
        },
        {
            id: 'paypal-1',
            type: 'digital_wallet',
            name: 'PayPal',
            details: 'john.doe@example.com',
            isDefault: false
        },
        {
            id: 'bank-1',
            type: 'bank_account',
            name: 'Bank Account ending in 9876',
            details: 'Bank Account •••• 9876',
            isDefault: false
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'selectedMethod',
            type: 'text',
            defaultValue: 'card-1'
        },
        {
            name: 'showAddButton',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showEditButton',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-simple-payment-selector"
    title="SimplePaymentSelector"
    component={SimplePaymentSelector}
    category="Molecules"
    description="Simple payment method selector component"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SimplePaymentSelector
                methods={props.methods || defaultMethods}
                selectedMethod={props.selectedMethod || 'card-1'}
                showAddButton={props.showAddButton}
                showEditButton={props.showEditButton}
            />
        </div>
    {/snippet}
</Story>