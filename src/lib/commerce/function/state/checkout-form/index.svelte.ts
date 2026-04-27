import { untrack } from 'svelte';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';
import type { Address } from '$stylist/commerce/type/struct/address';
import type { CardInfo } from '$stylist/commerce/type/struct/card-info';
import type { CheckoutStep } from '$stylist/commerce/type/struct/checkout-step';
import type { SlotShippingOption } from '$stylist/commerce/type/struct/shipping-option';
import type { CheckoutFormProps as Props } from '$stylist/commerce/type/struct/checkout-form-props';
import { CheckoutFormStyleManager } from '$stylist/commerce/class/style-manager/checkout-form';

function createAddressState(source?: Address): Address {
	return {
		firstName: source?.firstName ?? '',
		lastName: source?.lastName ?? '',
		company: source?.company ?? '',
		address1: source?.address1 ?? '',
		address2: source?.address2 ?? '',
		city: source?.city ?? '',
		state: source?.state ?? '',
		zipCode: source?.zipCode ?? '',
		country: source?.country ?? 'US',
		phone: source?.phone ?? '',
		email: source?.email ?? ''
	};
}

export function createCheckoutFormState(props: Props) {
	const countries = $derived(props.countries ?? [
		{ value: 'US', label: 'United States' },
		{ value: 'CA', label: 'Canada' },
		{ value: 'GB', label: 'United Kingdom' },
		{ value: 'DE', label: 'Germany' },
		{ value: 'FR', label: 'France' }
	]);
	const states = $derived(props.states ?? [
		{ value: 'AL', label: 'Alabama' },
		{ value: 'AK', label: 'Alaska' },
		{ value: 'AZ', label: 'Arizona' }
	]);
	const shippingOptions = $derived(props.shippingOptions ?? [
		{ id: 'standard', name: 'Standard Shipping', description: '5-7 business days', price: 5.99, estimatedDays: 7 },
		{ id: 'express', name: 'Express Shipping', description: '2-3 business days', price: 12.99, estimatedDays: 3 },
		{ id: 'overnight', name: 'Overnight Shipping', description: 'Next business day', price: 24.99, estimatedDays: 1 }
	]);

	let currentStep = $state(untrack(() => props.step ?? 'information'));
	let billingAddress = $state<Address>(untrack(() => createAddressState(props.defaultAddress)));
	let shippingAddress = $state<Address>(untrack(() => createAddressState(props.defaultAddress)));
	let selectedShippingOption = $state(untrack(() => shippingOptions[0]?.id ?? ''));
	let selectedShippingDetails = $derived(
		shippingOptions.find((option: SlotShippingOption) => option.id === selectedShippingOption)
	);
	let sameAsBilling = $state(false);
	let paymentMethod = $state<PaymentMethod>({
		id: 'credit_card',
		type: 'credit_card'
	});
	let cardInfo = $state<CardInfo>({
		number: '',
		expiry: '',
		cvv: '',
		name: ''
	});
	let termsAccepted = $state(false);
	let errors = $state<Record<string, string>>({});

	const orderedSteps = $derived(['information', 'shipping', 'payment', 'review', 'confirmation'] as CheckoutStep[]);
	const stepTitleMap = $derived({
		cart: 'Cart',
		information: 'Information',
		shipping: 'Shipping',
		payment: 'Payment',
		review: 'SlotReview',
		confirmation: 'Confirmation'
	} as Record<CheckoutStep, string>);

	const formattedSubtotal = $derived(formatCurrency(props.subtotal, props.currency ?? 'USD', props.locale ?? 'en-US'));
	const formattedTax = $derived(formatCurrency(props.tax, props.currency ?? 'USD', props.locale ?? 'en-US'));
	const formattedShipping = $derived(formatCurrency(props.shipping, props.currency ?? 'USD', props.locale ?? 'en-US'));
	const formattedTotal = $derived(formatCurrency(props.total, props.currency ?? 'USD', props.locale ?? 'en-US'));

	$effect(() => {
		if (props.step !== undefined) {
			currentStep = props.step;
		}
	});

	$effect(() => {
		if (sameAsBilling) {
			shippingAddress = { ...billingAddress };
		}
	});

	function formatCurrency(amount: number, currency: string, locale: string): string {
		return new Intl.NumberFormat(locale, {
			style: 'currency',
			currency
		}).format(amount);
	}

	function formatCardNumber(value: string): string {
		const digits = value.replace(/\D/g, '').slice(0, 16);
		const groups = digits.match(/.{1,4}/g) ?? [];
		return groups.join(' ');
	}

	function formatExpiryDate(value: string): string {
		const digits = value.replace(/\D/g, '').slice(0, 4);
		if (digits.length <= 2) {
			return digits;
		}
		return `${digits.slice(0, 2)}/${digits.slice(2)}`;
	}

	function getCountryName(code: string): string {
		return countries.find((country: { value: string; label: string }) => country.value === code)?.label ?? code;
	}

	function getStepIndex(step: CheckoutStep | string): number {
		const idx = orderedSteps.indexOf(step as CheckoutStep);
		return idx === -1 ? 0 : idx;
	}

	function getStepStatus(step: CheckoutStep | string): 'completed' | 'current' | 'upcoming' {
		const currentIndex = getStepIndex(currentStep);
		const targetIndex = getStepIndex(step);
		if (targetIndex < currentIndex) return 'completed';
		if (targetIndex === currentIndex) return 'current';
		return 'upcoming';
	}

	function formatStepTitle(step: CheckoutStep | string): string {
		return stepTitleMap[step as CheckoutStep] ?? step;
	}

	function getNextStepTitle(step: CheckoutStep | string): string {
		const nextIndex = Math.min(getStepIndex(step) + 1, orderedSteps.length - 1);
		return formatStepTitle(orderedSteps[nextIndex]);
	}

	function getPreviousStepTitle(step: CheckoutStep | string): string {
		const previousIndex = Math.max(getStepIndex(step) - 1, 0);
		return formatStepTitle(orderedSteps[previousIndex]);
	}

	function handleInputChange(field: keyof Address, value: string, isShipping: boolean = false): void {
		if (isShipping) {
			shippingAddress = { ...shippingAddress, [field]: value };
		} else {
			billingAddress = { ...billingAddress, [field]: value };
		}
	}

	function handleCardChange(field: keyof CardInfo, value: string): void {
		cardInfo = { ...cardInfo, [field]: value };
	}

	function handlePaymentMethodChange(type: PaymentMethod['type']): void {
		paymentMethod = { ...paymentMethod, type };
	}

	function validateStep(step: CheckoutStep): boolean {
		const newErrors: Record<string, string> = {};

		switch (step) {
			case 'information':
				if (!billingAddress.firstName) newErrors.firstName = 'First name is required';
				if (!billingAddress.lastName) newErrors.lastName = 'Last name is required';
				if (!billingAddress.address1) newErrors.address1 = 'Address is required';
				if (!billingAddress.city) newErrors.city = 'City is required';
				if (!billingAddress.state) newErrors.state = 'SlotState is required';
				if (!billingAddress.zipCode) newErrors.zipCode = 'ZIP code is required';
				if (!billingAddress.country) newErrors.country = 'SlotCountry is required';
				break;
			case 'payment':
				if (paymentMethod.type === 'credit_card') {
					if (!cardInfo.number || cardInfo.number.length < 13) newErrors.cardNumber = 'Valid card number is required';
					if (!cardInfo.expiry) newErrors.expiry = 'Expiry date is required';
					if (!cardInfo.cvv || cardInfo.cvv.length < 3) newErrors.cvv = 'CVV is required';
					if (!cardInfo.name) newErrors.cardName = 'Cardholder name is required';
				}
				break;
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function goToNextStep(): void {
		if (validateStep(currentStep)) {
			switch (currentStep) {
				case 'information':
					setCurrentStep('shipping');
					break;
				case 'shipping':
					setCurrentStep('payment');
					break;
				case 'payment':
					setCurrentStep('review');
					break;
				case 'review':
					setCurrentStep('confirmation');
					props.onComplete?.();
					break;
			}
		}
	}

	function goToPreviousStep(): void {
		switch (currentStep) {
			case 'shipping':
				setCurrentStep('information');
				break;
			case 'payment':
				setCurrentStep('shipping');
				break;
			case 'review':
				setCurrentStep('payment');
				break;
			case 'confirmation':
				setCurrentStep('review');
				break;
		}
	}

	function setCurrentStep(step: CheckoutStep): void {
		currentStep = step;
		props.onStepChange?.(step);
	}

	return {
		get currentStep() { return currentStep; },
		get billingAddress() { return billingAddress; },
		get shippingAddress() { return shippingAddress; },
		get selectedShippingOption() { return selectedShippingOption; },
		get selectedShippingDetails() { return selectedShippingDetails; },
		get sameAsBilling() { return sameAsBilling; },
		get paymentMethod() { return paymentMethod; },
		get cardInfo() { return cardInfo; },
		get termsAccepted() { return termsAccepted; },
		get errors() { return errors; },
		get countries() { return countries; },
		get states() { return states; },
		get shippingOptions() { return shippingOptions; },
		get formattedSubtotal() { return formattedSubtotal; },
		get formattedTax() { return formattedTax; },
		get formattedShipping() { return formattedShipping; },
		get formattedTotal() { return formattedTotal; },
		get orderedSteps() { return orderedSteps; },
		get stepTitleMap() { return stepTitleMap; },
		set sameAsBilling(value: boolean) { sameAsBilling = value; },
		set termsAccepted(value: boolean) { termsAccepted = value; },
		set selectedShippingOption(value: string) { selectedShippingOption = value; },
		formatCurrency,
		formatCardNumber,
		formatExpiryDate,
		getCountryName,
		getStepIndex,
		getStepStatus,
		formatStepTitle,
		getNextStepTitle,
		getPreviousStepTitle,
		handleInputChange,
		handleCardChange,
		handlePaymentMethodChange,
		goToNextStep,
		goToPreviousStep,
		setCurrentStep
	};
}

export default createCheckoutFormState;
