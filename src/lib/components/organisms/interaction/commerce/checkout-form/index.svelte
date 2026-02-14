<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, MapPin, User, Mail, Phone, Lock, Package, Truck, Wallet, Building2, Home, Landmark, Globe, Check, CheckCircle } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { cn } from '$stylist/utils';

  type CheckoutStep = 'cart' | 'information' | 'shipping' | 'payment' | 'review' | 'confirmation';

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail?: string;
  };

  type Address = {
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
  };

  type PaymentMethod = {
    id: string;
    type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
    lastFour?: string;
    expiry?: string;
  };

  type ShippingOption = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
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
  };

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

  let {
    cartItems = [],
    subtotal = 0,
    tax = 0,
    shipping = 0,
    total = 0,
    class: hostClass = '',
    step = 'information',
    onStepChange,
    onComplete,
    onError,
    countries = [
      { value: 'US', label: 'United States' },
      { value: 'CA', label: 'Canada' },
      { value: 'GB', label: 'United Kingdom' },
      { value: 'DE', label: 'Germany' },
      { value: 'FR', label: 'France' }
    ],
    states = [
      { value: 'AL', label: 'Alabama' },
      { value: 'AK', label: 'Alaska' },
      { value: 'AZ', label: 'Arizona' },
      // Add more states as needed
    ],
    shippingOptions = [
      { id: 'standard', name: 'Standard Shipping', description: '5-7 business days', price: 5.99, estimatedDays: 7 },
      { id: 'express', name: 'Express Shipping', description: '2-3 business days', price: 12.99, estimatedDays: 3 },
      { id: 'overnight', name: 'Overnight Shipping', description: 'Next business day', price: 24.99, estimatedDays: 1 }
    ],
    defaultAddress,
    defaultPaymentMethod,
    showProgress = true,
    allowGuestCheckout = true,
    requireAccount = false,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let currentStep: CheckoutStep = $state(step);
  let billingAddress = $state<Address>(createAddressState(defaultAddress));
  let shippingAddress = $state<Address>(createAddressState(defaultAddress));
  let selectedShippingOption = $state(shippingOptions[0]?.id || '');
  let selectedShippingDetails = $derived(
    shippingOptions.find((option) => option.id === selectedShippingOption)
  );
  let sameAsBilling = $state(false);
  let paymentMethod = $state<PaymentMethod>({
    id: 'credit_card',
    type: 'credit_card'
  });
  let cardInfo = $state({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  let createAccount = $state(false);
  let termsAccepted = $state(false);
  let errors = $state<Record<string, string>>({});

  $effect(() => {
    currentStep = step;
  });

  $effect(() => {
    if (sameAsBilling) {
      shippingAddress = { ...billingAddress };
    }
  });

  function handleInputChange(field: keyof Address, value: string, isShipping: boolean = false) {
    if (isShipping) {
      shippingAddress = { ...shippingAddress, [field]: value };
    } else {
      billingAddress = { ...billingAddress, [field]: value };
    }
  }

  function handleCardChange(field: keyof typeof cardInfo, value: string) {
    cardInfo = { ...cardInfo, [field]: value };
  }

  function handlePaymentMethodChange(type: PaymentMethod['type']) {
    paymentMethod = { ...paymentMethod, type };
  }

  function validateStep(step: CheckoutStep): boolean {
    let newErrors: Record<string, string> = {};

    switch (step) {
      case 'information':
        if (!billingAddress.firstName) newErrors.firstName = 'First name is required';
        if (!billingAddress.lastName) newErrors.lastName = 'Last name is required';
        if (!billingAddress.address1) newErrors.address1 = 'Address is required';
        if (!billingAddress.city) newErrors.city = 'City is required';
        if (!billingAddress.state) newErrors.state = 'State is required';
        if (!billingAddress.zipCode) newErrors.zipCode = 'ZIP code is required';
        if (!billingAddress.country) newErrors.country = 'Country is required';
        break;

      case 'shipping':
        // Validation for shipping step if needed
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

  function goToNextStep() {
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
          // Here you would typically submit the order
          onComplete?.();
          break;
      }
    }
  }

  function goToPreviousStep() {
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

  function setCurrentStep(step: CheckoutStep) {
    currentStep = step;
    onStepChange?.(step);
  }

  const orderedSteps: CheckoutStep[] = ['information', 'shipping', 'payment', 'review', 'confirmation'];
  const stepTitleMap: Record<CheckoutStep, string> = {
    cart: 'Cart',
    information: 'Information',
    shipping: 'Shipping',
    payment: 'Payment',
    review: 'Review',
    confirmation: 'Confirmation'
  };

  type StepStatus = 'complete' | 'current' | 'upcoming';

  function getStepIndex(step: CheckoutStep | string) {
    const idx = orderedSteps.indexOf(step as CheckoutStep);
    return idx === -1 ? 0 : idx;
  }

  function getStepStatus(step: CheckoutStep | string): StepStatus {
    const currentIndex = getStepIndex(currentStep);
    const targetIndex = getStepIndex(step);

    if (targetIndex < currentIndex) {
      return 'complete';
    }

    if (targetIndex === currentIndex) {
      return 'current';
    }

    return 'upcoming';
  }

  function formatStepTitle(step: CheckoutStep | string) {
    return stepTitleMap[step as CheckoutStep] ?? step;
  }

  function getNextStepTitle(step: CheckoutStep | string) {
    const nextIndex = Math.min(getStepIndex(step) + 1, orderedSteps.length - 1);
    return formatStepTitle(orderedSteps[nextIndex]);
  }

  function getPreviousStepTitle(step: CheckoutStep | string) {
    const previousIndex = Math.max(getStepIndex(step) - 1, 0);
    return formatStepTitle(orderedSteps[previousIndex]);
  }

  function formatCardNumber(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    const groups = digits.match(/.{1,4}/g) ?? [];
    return groups.join(' ');
  }

  function formatExpiryDate(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) {
      return digits;
    }

    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  function getCountryName(code: string) {
    return countries.find((country) => country.value === code)?.label ?? code;
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  let formattedSubtotal = $derived(formatCurrency(subtotal));
  let formattedTax = $derived(formatCurrency(tax));
  let formattedShipping = $derived(formatCurrency(shipping));
  let formattedTotal = $derived(formatCurrency(total));
</script>

<div class={cn('c-checkout-form', hostClass)} {...restProps}>
  {#if showProgress}
    <!-- Progress indicator -->
    <div class="mb-8">
      <nav aria-label="Checkout progress" class="flex justify-between">
        {#each ['information', 'shipping', 'payment', 'review'] as step, i}
          <div class={`flex flex-col items-center ${i < 3 ? 'flex-1' : ''}`}>
            <div class="flex items-center">
              <div class={`w-8 h-8 rounded-full flex items-center justify-center ${
                getStepStatus(step) === 'complete' ? 'bg-blue-600 text-white' :
                getStepStatus(step) === 'current' ? 'bg-white border-2 border-blue-600 text-blue-600' :
                'bg-gray-200 text-gray-500'
              }`}>
                {#if getStepStatus(step) === 'complete'}
                  <Check class="h-4 w-4" />
                {:else if getStepStatus(step) === 'current'}
                  {i + 1}
                {:else}
                  {i + 1}
                {/if}
              </div>
              {#if i < 3}
                <div class={`flex-auto border-t-2 ${
                  i < getStepIndex(currentStep) ? 'border-blue-600' : 'border-gray-300'
                }`}></div>
              {/if}
            </div>
            <div class={`mt-2 text-xs font-medium ${
              getStepStatus(step) === 'current' ? 'text-blue-600' : 'text-gray-500'
            }`}>
              {formatStepTitle(step)}
            </div>
          </div>
        {/each}
      </nav>
    </div>
  {/if}

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Main content -->
    <div class="lg:col-span-2">
      <!-- Step 1: Information -->
      {#if currentStep === 'information'}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6 flex items-center">
            <User class="h-5 w-5 mr-2" />
            Contact Information
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-[--color-text-primary] mb-1">First name</label>
              <input
                id="firstName"
                type="text"
                placeholder="John"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={billingAddress.firstName}
                oninput={(e: Event) => handleInputChange('firstName', (e.target as HTMLInputElement).value)}
              />
              {#if errors.firstName}
                <p class="mt-1 text-sm text-red-600">{errors.firstName}</p>
              {/if}
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-[--color-text-primary] mb-1">Last name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={billingAddress.lastName}
                oninput={(e: Event) => handleInputChange('lastName', (e.target as HTMLInputElement).value)}
              />
              {#if errors.lastName}
                <p class="mt-1 text-sm text-red-600">{errors.lastName}</p>
              {/if}
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-[--color-text-primary] mb-1">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={billingAddress.email}
                oninput={(e: Event) => handleInputChange('email', (e.target as HTMLInputElement).value)}
              />
              {#if errors.email}
                <p class="mt-1 text-sm text-red-600">{errors.email}</p>
              {/if}
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm font-medium text-[--color-text-primary] mb-1">Phone number</label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={billingAddress.phone}
                oninput={(e: Event) => handleInputChange('phone', (e.target as HTMLInputElement).value)}
              />
              {#if errors.phone}
                <p class="mt-1 text-sm text-red-600">{errors.phone}</p>
              {/if}
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <MapPin class="h-5 w-5 mr-2" />
              Shipping Address
            </h3>

            <div class="grid grid-cols-1 gap-4">
              <div class="flex items-center">
                <input
                  id="same-as-billing"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={sameAsBilling}
                  onchange={(e: Event) => sameAsBilling = (e.target as HTMLInputElement).checked}
                />
                <label for="same-as-billing" class="ml-2 block text-sm text-[--color-text-primary]">
                  Same as billing address
                </label>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="sm:col-span-2">
                  <label for="address1" class="block text-sm font-medium text-[--color-text-primary] mb-1">Address</label>
                  <input
                    id="address1"
                    type="text"
                    placeholder="1234 Main St"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.address1}
                    disabled={sameAsBilling}
                    oninput={(e: Event) => handleInputChange('address1', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if errors.address1}
                    <p class="mt-1 text-sm text-red-600">{errors.address1}</p>
                  {/if}
                </div>

                <div class="sm:col-span-2">
                  <label for="address2" class="block text-sm font-medium text-[--color-text-primary] mb-1">Apartment, suite, etc. (optional)</label>
                  <input
                    id="address2"
                    type="text"
                    placeholder="Apt 1B"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.address2}
                    disabled={sameAsBilling}
                    oninput={(e: Event) => handleInputChange('address2', (e.target as HTMLInputElement).value, true)}
                  />
                </div>

                <div>
                  <label for="city" class="block text-sm font-medium text-[--color-text-primary] mb-1">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.city}
                    disabled={sameAsBilling}
                    oninput={(e: Event) => handleInputChange('city', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if errors.city}
                    <p class="mt-1 text-sm text-red-600">{errors.city}</p>
                  {/if}
                </div>

                <div>
                  <label for="state" class="block text-sm font-medium text-[--color-text-primary] mb-1">State</label>
                  <select
                    id="state"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.state}
                    disabled={sameAsBilling}
                    onchange={(e: Event) => handleInputChange('state', (e.target as HTMLSelectElement).value, true)}
                  >
                    <option value="" disabled>Select state</option>
                    {#each states as state}
                      <option value={state.value}>{state.label}</option>
                    {/each}
                  </select>
                  {#if errors.state}
                    <p class="mt-1 text-sm text-red-600">{errors.state}</p>
                  {/if}
                </div>

                <div>
                  <label for="zipCode" class="block text-sm font-medium text-[--color-text-primary] mb-1">ZIP / Postal code</label>
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="10001"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.zipCode}
                    disabled={sameAsBilling}
                    oninput={(e: Event) => handleInputChange('zipCode', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if errors.zipCode}
                    <p class="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                  {/if}
                </div>

                <div>
                  <label for="country" class="block text-sm font-medium text-[--color-text-primary] mb-1">Country</label>
                  <select
                    id="country"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={shippingAddress.country}
                    disabled={sameAsBilling}
                    onchange={(e: Event) => handleInputChange('country', (e.target as HTMLSelectElement).value, true)}
                  >
                    {#each countries as country}
                      <option value={country.value}>{country.label}</option>
                    {/each}
                  </select>
                  {#if errors.country}
                    <p class="mt-1 text-sm text-red-600">{errors.country}</p>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 2: Shipping -->
      {#if currentStep === 'shipping'}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6 flex items-center">
            <Truck class="h-5 w-5 mr-2" />
            Shipping Method
          </h2>

          <div role="radiogroup" aria-label="Shipping method">
            {#each shippingOptions as option}
              <div class={`border rounded-lg p-4 flex justify-between items-start ${
                selectedShippingOption === option.id ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
              }`}>
                <div>
                  <div class="flex items-center">
                    <input
                      id={`shipping-option-${option.id}`}
                      type="radio"
                      name="shipping-method"
                      value={option.id}
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      checked={selectedShippingOption === option.id}
                      onchange={(e: Event) => selectedShippingOption = (e.target as HTMLInputElement).value}
                    />
                    <label for={`shipping-option-${option.id}`} class="ml-3 block text-sm font-medium text-gray-900">
                      {option.name}
                    </label>
                  </div>
                  <p class="ml-7 text-sm text-gray-500">{option.description}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-medium text-gray-900">{formatCurrency(option.price)}</p>
                  <p class="text-sm text-gray-500">{option.estimatedDays} days</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Step 3: Payment -->
      {#if currentStep === 'payment'}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6 flex items-center">
            <CreditCard class="h-5 w-5 mr-2" />
            Payment Method
          </h2>

          <div class="space-y-4">
            <div class="border rounded-lg p-4">
              <div class="flex items-center">
                <input
                  id="payment-credit"
                  type="radio"
                  name="payment-method"
                  value="credit_card"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={paymentMethod.type === 'credit_card'}
                  onchange={() => handlePaymentMethodChange('credit_card')}
                />
                <label for="payment-credit" class="ml-3 block text-sm font-medium text-gray-700">
                  Credit Card
                </label>
              </div>

              {#if paymentMethod.type === 'credit_card'}
                <div class="mt-4 space-y-4 ml-7">
                  <div>
                    <label for="card-number" class="block text-sm font-medium text-[--color-text-primary] mb-1">Card number</label>
                    <input
                      id="card-number"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                      value={cardInfo.number}
                      maxlength={19}
                      oninput={(e: Event) => handleCardChange('number', formatCardNumber((e.target as HTMLInputElement).value))}
                    />
                    {#if errors.cardNumber}
                      <p class="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
                    {/if}
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="expiry" class="block text-sm font-medium text-[--color-text-primary] mb-1">Expiration date</label>
                      <input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                        value={cardInfo.expiry}
                        maxlength={5}
                        oninput={(e: Event) => handleCardChange('expiry', formatExpiryDate((e.target as HTMLInputElement).value))}
                      />
                      {#if errors.expiry}
                        <p class="mt-1 text-sm text-red-600">{errors.expiry}</p>
                      {/if}
                    </div>

                    <div>
                      <label for="cvv" class="block text-sm font-medium text-[--color-text-primary] mb-1">CVV</label>
                      <input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                        value={cardInfo.cvv}
                        maxlength={4}
                        oninput={(e: Event) => handleCardChange('cvv', (e.target as HTMLInputElement).value)}
                      />
                      {#if errors.cvv}
                        <p class="mt-1 text-sm text-red-600">{errors.cvv}</p>
                      {/if}
                    </div>
                  </div>

                  <div>
                    <label for="card-name" class="block text-sm font-medium text-[--color-text-primary] mb-1">Name on card</label>
                    <input
                      id="card-name"
                      type="text"
                      placeholder="John Doe"
                      class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                      value={cardInfo.name}
                      oninput={(e: Event) => handleCardChange('name', (e.target as HTMLInputElement).value)}
                    />
                    {#if errors.cardName}
                      <p class="mt-1 text-sm text-red-600">{errors.cardName}</p>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <div class="border rounded-lg p-4">
              <div class="flex items-center">
                <input
                  id="payment-paypal"
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={paymentMethod.type === 'paypal'}
                  onchange={() => handlePaymentMethodChange('paypal')}
                />
                <label for="payment-paypal" class="ml-3 block text-sm font-medium text-gray-700">
                  PayPal
                </label>
              </div>
            </div>

            <div class="border rounded-lg p-4">
              <div class="flex items-center">
                <input
                  id="payment-digital"
                  type="radio"
                  name="payment-method"
                  value="digital_wallet"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={paymentMethod.type === 'digital_wallet'}
                  onchange={() => handlePaymentMethodChange('digital_wallet')}
                />
                <label for="payment-digital" class="ml-3 block text-sm font-medium text-gray-700">
                  Digital Wallet (Apple Pay, Google Pay, etc.)
                </label>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 4: Review -->
      {#if currentStep === 'review'}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6 flex items-center">
            <Package class="h-5 w-5 mr-2" />
            Review Your Order
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-md font-medium text-gray-900 mb-4">Contact Information</h3>
              <p class="text-gray-700">{billingAddress.firstName} {billingAddress.lastName}</p>
              <p class="text-gray-700">{billingAddress.email}</p>
              <p class="text-gray-700">{billingAddress.phone}</p>
            </div>

            <div>
              <h3 class="text-md font-medium text-gray-900 mb-4">Shipping Address</h3>
              <p class="text-gray-700">{shippingAddress.firstName} {shippingAddress.lastName}</p>
              <p class="text-gray-700">{shippingAddress.address1}</p>
              {#if shippingAddress.address2}
                <p class="text-gray-700">{shippingAddress.address2}</p>
              {/if}
              <p class="text-gray-700">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
              <p class="text-gray-700">{getCountryName(shippingAddress.country)}</p>
            </div>

            <div>
              <h3 class="text-md font-medium text-gray-900 mb-4">Shipping Method</h3>
              <p class="text-gray-700">{selectedShippingDetails?.name}</p>
              <p class="text-gray-700 text-sm">
                {selectedShippingDetails?.description} - {formatCurrency(selectedShippingDetails?.price ?? 0)}
              </p>
            </div>

            <div>
              <h3 class="text-md font-medium text-gray-900 mb-4">Payment Method</h3>
              <p class="text-gray-700 capitalize">{paymentMethod.type}</p>
              {#if paymentMethod.type === 'credit_card' && cardInfo.number}
                <p class="text-gray-700 text-sm">
                  **** **** **** {cardInfo.number.replace(/\s/g, '').slice(-4)}
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 5: Confirmation -->
      {#if currentStep === 'confirmation'}
        <div class="bg-white shadow rounded-lg p-6">
          <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle class="h-6 w-6 text-green-600" />
            </div>
            <h2 class="mt-4 text-lg font-medium text-gray-900">Thank you for your order!</h2>
            <p class="mt-2 text-gray-600">
              Your order number is <span class="font-medium">#123456</span>. We've emailed your receipt to {billingAddress.email}.
            </p>
            <div class="mt-6">
              <Button
                variant="primary"
                onclick={() => window.print()}
              >
                Print Receipt
              </Button>
            </div>
          </div>
        </div>
      {/if}

      <!-- Navigation buttons -->
      <div class="mt-8 flex flex-col sm:flex-row sm:justify-between sm:space-x-4">
        {#if currentStep !== 'information' && currentStep !== 'confirmation'}
          <Button
            variant="ghost"
            onclick={goToPreviousStep}
          >
            ← Return to {getPreviousStepTitle(currentStep)}
          </Button>
        {/if}

        <div class="{currentStep === 'information' ? 'sm:col-span-2' : ''}">
          <Button
            variant="primary"
            class="w-full sm:w-auto"
            onclick={goToNextStep}
          >
            {currentStep === 'review' ? 'Place Order →' :
             currentStep === 'confirmation' ? 'Continue Shopping →' :
             `Continue to ${getNextStepTitle(currentStep)} →`}
          </Button>
        </div>
      </div>
    </div>

    <!-- Order summary sidebar -->
    <div class="bg-white shadow rounded-lg p-6 h-fit sticky top-6">
      <h2 class="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

      <div class="flow-root">
        <ul class="-my-6 divide-y divide-gray-200">
          {#each cartItems as item}
            <li class="py-6 flex">
              {#if item.thumbnail}
                <div class="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    class="w-full h-full object-cover"
                  />
                </div>
              {/if}

              <div class="ml-4 flex-1 flex flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p class="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>

      <div class="mt-6 border-t border-gray-200 pt-4">
        <div class="space-y-3">
          <div class="flex justify-between text-sm text-gray-600">
            <dt>Subtotal</dt>
            <dd>{formattedSubtotal}</dd>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <dt>Shipping</dt>
            <dd>{formattedShipping}</dd>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <dt>Tax</dt>
            <dd>{formattedTax}</dd>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <dt>Discount</dt>
            <dd>- $0.00</dd>
          </div>
          <div class="flex justify-between text-base font-medium text-gray-900 border-t border-gray-200 pt-3">
            <dt>Order total</dt>
            <dd>{formattedTotal}</dd>
          </div>
        </div>
      </div>

      {#if currentStep !== 'confirmation'}
        <div class="mt-6 space-y-2">
          <div class="flex items-start">
            <input
              id="terms"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={termsAccepted}
              onchange={(e: Event) => termsAccepted = (e.target as HTMLInputElement).checked}
            />
            <label for="terms" class="ml-2 block text-sm text-[--color-text-primary]">
              I agree to the terms and conditions
            </label>
          </div>
          {#if !termsAccepted && currentStep === 'review'}
            <p class="mt-1 text-sm text-red-600">You must agree to the terms and conditions to continue.</p>
          {/if}
          <p class="text-sm text-gray-700">
            Read our <a href="/terms" class="text-blue-600 hover:text-blue-500">terms and conditions</a>
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
