import type { HTMLAttributes } from 'svelte/elements';

import type { Address } from '$stylist/commerce/type/object/address';
import type { PaymentMethod } from '$stylist/commerce/type/object/payment-method';
import type { SlotShippingOption } from '$stylist/commerce/type/object/shipping-option';
import type { CheckoutStep } from '$stylist/commerce/type/object/checkout-step';

export type CheckoutFormProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	cartItems: {
	id: string;
	name: string;
	price: number;
	quantity: number;
	thumbnail?: string;
}[];
	subtotal: number;
	tax: number;
	shipping: number;
	total: number;
	class?: string;
	step?: CheckoutStep;
	onStepChange?: (step: CheckoutStep) => void;
	onComplete?: () => void;
	onError?: (error: string) => void;
	countries?: { value: string; label: string }[];
	states?: { value: string; label: string }[];
	shippingOptions?: SlotShippingOption[];
	defaultAddress?: Address;
	defaultPaymentMethod?: PaymentMethod;
	showProgress?: boolean;
	allowGuestCheckout?: boolean;
	requireAccount?: boolean;
	currency?: string;
	locale?: string;
};
