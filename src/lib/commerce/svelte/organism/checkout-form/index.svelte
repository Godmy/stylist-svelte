<script lang="ts">
  import type { CheckoutFormProps as Props } from '$stylist/commerce/type/struct/checkout-form-props';
  import { createCheckoutFormState } from '$stylist/commerce/function/state/checkout-form';
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$stylist';
  import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

  const CreditCard = 'credit-card';
  const MapPin = 'map-pin';
  const User = 'user';
  const Mail = 'mail';
  const Phone = 'phone';
  const Lock = 'lock';
  const Package = 'package';
  const Truck = 'truck';
  const Wallet = 'wallet';
  const Building2 = 'building-2';
  const Home = 'home';
  const Landmark = 'landmark';
  const Globe = 'globe';
  const Check = 'check';
  const CheckCircle = 'check-circle';

  let props: Props = $props();
  const state = createCheckoutFormState(props);
</script>

<div class={mergeClassNames('c-checkout-form', props.class ?? '')} {...props}>
  {#if props.showProgress ?? true}
    <!-- Progress indicator -->
    <div class="mb-8">
      <nav aria-label="Checkout progress" class="flex justify-between">
        {#each ['information', 'shipping', 'payment', 'review'] as step, i}
          <div class={`flex flex-col items-center ${i < 3 ? 'flex-1' : ''}`}>
            <div class="flex items-center">
              <div class={`w-8 h-8 rounded-full flex items-center justify-center ${
                state.getStepStatus(step) === 'completed' ? 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]' :
                state.getStepStatus(step) === 'current' ? 'bg-[var(--color-background-primary)] border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)]' :
                'bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)]'
              }`}>
                {#if state.getStepStatus(step) === 'completed'}
                  <BaseIcon name={Check} class="h-4 w-4" />
                {:else if state.getStepStatus(step) === 'current'}
                  {i + 1}
                {:else}
                  {i + 1}
                {/if}
              </div>
              {#if i < 3}
                <div class={`flex-auto border-t-2 ${
                  i < state.getStepIndex(state.currentStep) ? 'border-[var(--color-primary-600)]' : 'border-[var(--color-border-primary)]'
                }`}></div>
              {/if}
            </div>
            <div class={`mt-2 text-xs font-medium ${
              state.getStepStatus(step) === 'current' ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-text-secondary)]'
            }`}>
              {state.formatStepTitle(step)}
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
      {#if state.currentStep === 'information'}
        <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-[var(--color-text-primary)] mb-6 flex items-center">
            <BaseIcon name={User} class="h-5 w-5 mr-2" />
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
                value={state.billingAddress.firstName}
                oninput={(e: Event) => state.handleInputChange('firstName', (e.target as HTMLInputElement).value)}
              />
              {#if state.errors.firstName}
                <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.firstName}</p>
              {/if}
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-[--color-text-primary] mb-1">Last name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={state.billingAddress.lastName}
                oninput={(e: Event) => state.handleInputChange('lastName', (e.target as HTMLInputElement).value)}
              />
              {#if state.errors.lastName}
                <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.lastName}</p>
              {/if}
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-[--color-text-primary] mb-1">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={state.billingAddress.email}
                oninput={(e: Event) => state.handleInputChange('email', (e.target as HTMLInputElement).value)}
              />
              {#if state.errors.email}
                <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.email}</p>
              {/if}
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm font-medium text-[--color-text-primary] mb-1">Phone number</label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                value={state.billingAddress.phone}
                oninput={(e: Event) => state.handleInputChange('phone', (e.target as HTMLInputElement).value)}
              />
              {#if state.errors.phone}
                <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.phone}</p>
              {/if}
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
              <BaseIcon name={MapPin} class="h-5 w-5 mr-2" />
              Shipping Address
            </h3>

            <div class="grid grid-cols-1 gap-4">
              <div class="flex items-center">
                <input
                  id="same-as-billing"
                  type="checkbox"
                  class="h-4 w-4 rounded border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-blue-500"
                  bind:checked={state.sameAsBilling}
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
                    value={state.shippingAddress.address1}
                    disabled={state.sameAsBilling}
                    oninput={(e: Event) => state.handleInputChange('address1', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if state.errors.address1}
                    <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.address1}</p>
                  {/if}
                </div>

                <div class="sm:col-span-2">
                  <label for="address2" class="block text-sm font-medium text-[--color-text-primary] mb-1">Apartment, suite, etc. (optional)</label>
                  <input
                    id="address2"
                    type="text"
                    placeholder="Apt 1B"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={state.shippingAddress.address2}
                    disabled={state.sameAsBilling}
                    oninput={(e: Event) => state.handleInputChange('address2', (e.target as HTMLInputElement).value, true)}
                  />
                </div>

                <div>
                  <label for="city" class="block text-sm font-medium text-[--color-text-primary] mb-1">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={state.shippingAddress.city}
                    disabled={state.sameAsBilling}
                    oninput={(e: Event) => state.handleInputChange('city', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if state.errors.city}
                    <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.city}</p>
                  {/if}
                </div>

                <div>
                  <label for="state" class="block text-sm font-medium text-[--color-text-primary] mb-1">State</label>
                  <select
                    id="state"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={state.shippingAddress.state}
                    disabled={state.sameAsBilling}
                    onchange={(e: Event) => state.handleInputChange('state', (e.target as HTMLSelectElement).value, true)}
                  >
                    <option value="" disabled>Select state</option>
                    {#each state.states as s}
                      <option value={s.value}>{s.label}</option>
                    {/each}
                  </select>
                  {#if state.errors.state}
                    <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.state}</p>
                  {/if}
                </div>

                <div>
                  <label for="zipCode" class="block text-sm font-medium text-[--color-text-primary] mb-1">ZIP / Postal code</label>
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="10001"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={state.shippingAddress.zipCode}
                    disabled={state.sameAsBilling}
                    oninput={(e: Event) => state.handleInputChange('zipCode', (e.target as HTMLInputElement).value, true)}
                  />
                  {#if state.errors.zipCode}
                    <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.zipCode}</p>
                  {/if}
                </div>

                <div>
                  <label for="country" class="block text-sm font-medium text-[--color-text-primary] mb-1">Country</label>
                  <select
                    id="country"
                    class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                    value={state.shippingAddress.country}
                    disabled={state.sameAsBilling}
                    onchange={(e: Event) => state.handleInputChange('country', (e.target as HTMLSelectElement).value, true)}
                  >
                    {#each state.countries as country}
                      <option value={country.value}>{country.label}</option>
                    {/each}
                  </select>
                  {#if state.errors.country}
                    <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.country}</p>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 2: Shipping -->
      {#if state.currentStep === 'shipping'}
        <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-[var(--color-text-primary)] mb-6 flex items-center">
            <BaseIcon name={Truck} class="h-5 w-5 mr-2" />
            Shipping Method
          </h2>

          <div role="radiogroup" aria-label="Shipping method">
            {#each state.shippingOptions as option}
              <div class={`border rounded-lg p-4 flex justify-between items-start ${
                state.selectedShippingOption === option.id ? 'border-[var(--color-primary-500)] ring-2 ring-blue-500' : 'border-[var(--color-border-primary)]'
              }`}>
                <div>
                  <div class="flex items-center">
                    <input
                      id={`shipping-option-${option.id}`}
                      type="radio"
                      name="shipping-method"
                      value={option.id}
                      class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)]"
                      checked={state.selectedShippingOption === option.id}
                      onchange={() => state.selectedShippingOption = option.id}
                    />
                    <label for={`shipping-option-${option.id}`} class="ml-3 block text-sm font-medium text-[var(--color-text-primary)]">
                      {option.name}
                    </label>
                  </div>
                  <p class="ml-7 text-sm text-[var(--color-text-secondary)]">{option.description}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-medium text-[var(--color-text-primary)]">{state.formatCurrency(option.price, props.currency ?? 'USD', props.locale ?? 'en-US')}</p>
                  <p class="text-sm text-[var(--color-text-secondary)]">{option.estimatedDays} days</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Step 3: Payment -->
      {#if state.currentStep === 'payment'}
        <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-[var(--color-text-primary)] mb-6 flex items-center">
            <BaseIcon name={CreditCard} class="h-5 w-5 mr-2" />
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
                  class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)]"
                  checked={state.paymentMethod.type === 'credit_card'}
                  onchange={() => state.handlePaymentMethodChange('credit_card')}
                />
                <label for="payment-credit" class="ml-3 block text-sm font-medium text-[var(--color-text-primary)]">
                  Credit Card
                </label>
              </div>

              {#if state.paymentMethod.type === 'credit_card'}
                <div class="mt-4 space-y-4 ml-7">
                  <div>
                    <label for="card-number" class="block text-sm font-medium text-[--color-text-primary] mb-1">Card number</label>
                    <input
                      id="card-number"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                      value={state.cardInfo.number}
                      maxlength={19}
                      oninput={(e: Event) => state.handleCardChange('number', state.formatCardNumber((e.target as HTMLInputElement).value))}
                    />
                    {#if state.errors.cardNumber}
                      <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.cardNumber}</p>
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
                        value={state.cardInfo.expiry}
                        maxlength={5}
                        oninput={(e: Event) => state.handleCardChange('expiry', state.formatExpiryDate((e.target as HTMLInputElement).value))}
                      />
                      {#if state.errors.expiry}
                        <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.expiry}</p>
                      {/if}
                    </div>

                    <div>
                      <label for="cvv" class="block text-sm font-medium text-[--color-text-primary] mb-1">CVV</label>
                      <input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
                        value={state.cardInfo.cvv}
                        maxlength={4}
                        oninput={(e: Event) => state.handleCardChange('cvv', (e.target as HTMLInputElement).value)}
                      />
                      {#if state.errors.cvv}
                        <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.cvv}</p>
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
                      value={state.cardInfo.name}
                      oninput={(e: Event) => state.handleCardChange('name', (e.target as HTMLInputElement).value)}
                    />
                    {#if state.errors.cardName}
                      <p class="mt-1 text-sm text-[var(--color-danger-600)]">{state.errors.cardName}</p>
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
                  class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)]"
                  checked={state.paymentMethod.type === 'paypal'}
                  onchange={() => state.handlePaymentMethodChange('paypal')}
                />
                <label for="payment-paypal" class="ml-3 block text-sm font-medium text-[var(--color-text-primary)]">
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
                  class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)]"
                  checked={state.paymentMethod.type === 'digital_wallet'}
                  onchange={() => state.handlePaymentMethodChange('digital_wallet')}
                />
                <label for="payment-digital" class="ml-3 block text-sm font-medium text-[var(--color-text-primary)]">
                  Digital Wallet (Apple Pay, Google Pay, etc.)
                </label>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 4: Review -->
      {#if state.currentStep === 'review'}
        <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-[var(--color-text-primary)] mb-6 flex items-center">
            <BaseIcon name={Package} class="h-5 w-5 mr-2" />
            Review Your Order
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Contact Information</h3>
              <p class="text-[var(--color-text-primary)]">{state.billingAddress.firstName} {state.billingAddress.lastName}</p>
              <p class="text-[var(--color-text-primary)]">{state.billingAddress.email}</p>
              <p class="text-[var(--color-text-primary)]">{state.billingAddress.phone}</p>
            </div>

            <div>
              <h3 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Shipping Address</h3>
              <p class="text-[var(--color-text-primary)]">{state.shippingAddress.firstName} {state.shippingAddress.lastName}</p>
              <p class="text-[var(--color-text-primary)]">{state.shippingAddress.address1}</p>
              {#if state.shippingAddress.address2}
                <p class="text-[var(--color-text-primary)]">{state.shippingAddress.address2}</p>
              {/if}
              <p class="text-[var(--color-text-primary)]">{state.shippingAddress.city}, {state.shippingAddress.state} {state.shippingAddress.zipCode}</p>
              <p class="text-[var(--color-text-primary)]">{state.getCountryName(state.shippingAddress.country)}</p>
            </div>

            <div>
              <h3 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Shipping Method</h3>
              <p class="text-[var(--color-text-primary)]">{state.selectedShippingDetails?.name}</p>
              <p class="text-[var(--color-text-primary)] text-sm">
                {state.selectedShippingDetails?.description} - {state.formatCurrency(state.selectedShippingDetails?.price ?? 0, props.currency ?? 'USD', props.locale ?? 'en-US')}
              </p>
            </div>

            <div>
              <h3 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Payment Method</h3>
              <p class="text-[var(--color-text-primary)] capitalize">{state.paymentMethod.type}</p>
              {#if state.paymentMethod.type === 'credit_card' && state.cardInfo.number}
                <p class="text-[var(--color-text-primary)] text-sm">
                  **** **** **** {state.cardInfo.number.replace(/\s/g, '').slice(-4)}
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      <!-- Step 5: Confirmation -->
      {#if state.currentStep === 'confirmation'}
        <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6">
          <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-success-100)]">
              <BaseIcon name={CheckCircle} class="h-6 w-6 text-[var(--color-success-600)]" />
            </div>
            <h2 class="mt-4 text-lg font-medium text-[var(--color-text-primary)]">Thank you for your order!</h2>
            <p class="mt-2 text-[var(--color-text-secondary)]">
              Your order number is <span class="font-medium">var(--color-primary-700)</span>. We've emailed your receipt to {state.billingAddress.email}.
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
        {#if state.currentStep !== 'information' && state.currentStep !== 'confirmation'}
          <Button
            variant="ghost"
            onclick={state.goToPreviousStep}
          >
            ← Return to {state.getPreviousStepTitle(state.currentStep)}
          </Button>
        {/if}

        <div class="{state.currentStep === 'information' ? 'sm:col-span-2' : ''}">
          <Button
            variant="primary"
            class="w-full sm:w-auto"
            onclick={state.goToNextStep}
          >
            {state.currentStep === 'review' ? 'Place Order →' :
             state.currentStep === 'confirmation' ? 'Continue Shopping →' :
             `Continue to ${state.getNextStepTitle(state.currentStep)} →`}
          </Button>
        </div>
      </div>
    </div>

    <!-- Order summary sidebar -->
    <div class="bg-[var(--color-background-primary)] shadow rounded-lg p-6 h-fit sticky top-6">
      <h2 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Order Summary</h2>

      <div class="flow-root">
        <ul class="-my-6 divide-y divide-gray-200">
          {#each props.cartItems ?? [] as item}
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
                  <div class="flex justify-between text-base font-medium text-[var(--color-text-primary)]">
                    <h3>{item.name}</h3>
                    <p class="ml-4">{state.formatCurrency(item.price * item.quantity, props.currency ?? 'USD', props.locale ?? 'en-US')}</p>
                  </div>
                  <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Qty {item.quantity}</p>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>

      <div class="mt-6 border-t border-[var(--color-border-primary)] pt-4">
        <div class="space-y-3">
          <div class="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <dt>Subtotal</dt>
            <dd>{state.formattedSubtotal}</dd>
          </div>
          <div class="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <dt>Shipping</dt>
            <dd>{state.formattedShipping}</dd>
          </div>
          <div class="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <dt>Tax</dt>
            <dd>{state.formattedTax}</dd>
          </div>
          <div class="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <dt>Discount</dt>
            <dd>- $0.00</dd>
          </div>
          <div class="flex justify-between text-base font-medium text-[var(--color-text-primary)] border-t border-[var(--color-border-primary)] pt-3">
            <dt>Order total</dt>
            <dd>{state.formattedTotal}</dd>
          </div>
        </div>
      </div>

      {#if state.currentStep !== 'confirmation'}
        <div class="mt-6 space-y-2">
          <div class="flex items-start">
            <input
              id="terms"
              type="checkbox"
              class="h-4 w-4 rounded border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-blue-500"
              bind:checked={state.termsAccepted}
            />
            <label for="terms" class="ml-2 block text-sm text-[--color-text-primary]">
              I agree to the terms and conditions
            </label>
          </div>
          {#if !state.termsAccepted && state.currentStep === 'review'}
            <p class="mt-1 text-sm text-[var(--color-danger-600)]">You must agree to the terms and conditions to continue.</p>
          {/if}
          <p class="text-sm text-[var(--color-text-primary)]">
            Read our <a href="/terms" class="text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]">terms and conditions</a>
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
