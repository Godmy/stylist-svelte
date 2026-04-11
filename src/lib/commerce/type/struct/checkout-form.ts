import type { HTMLAttributes } from 'svelte/elements';

export type CheckoutStep = 'cart' | 'information' | 'shipping' | 'payment' | 'review' | 'confirmation';

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	thumbnail?: string;
}

export interface Address {
	firstName: string;
	lastName: string;
	company?: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	phone?: string;
	email?: string;
}

export interface PaymentMethod {
	id: string;
	type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
	lastFour?: string;
	expiry?: string;
}

export interface ShippingOption {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
}

export interface CardInfo {
	number: string;
	expiry: string;
	cvv: string;
	name: string;
}

export type StepStatus = 'completed' | 'current' | 'upcoming';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
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
