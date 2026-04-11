import type { HTMLAttributes } from 'svelte/elements';
import type { CartItem } from '../cart-item';
import type { Address } from '../address';
import type { PaymentMethod } from '../payment-method';
import type { ShippingOption } from '../shipping-option';
import type { CheckoutStep } from '../checkout-step';

export type CheckoutFormProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	cartItems: CartItem[];
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
	shippingOptions?: ShippingOption[];
	defaultAddress?: Address;
	defaultPaymentMethod?: PaymentMethod;
	showProgress?: boolean;
	allowGuestCheckout?: boolean;
	requireAccount?: boolean;
	currency?: string;
	locale?: string;
}
