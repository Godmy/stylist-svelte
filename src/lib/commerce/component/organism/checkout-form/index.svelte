<script lang="ts">
	import type { CheckoutFormProps as Props } from '$stylist/commerce/type/struct/checkout-form-props';

	import createCheckoutFormState from '$stylist/commerce/function/state/checkout-form/index.svelte';

	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import Button from '$stylist/control/component/atom/button/index.svelte';

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

		<div class="_c1">
			<nav aria-label="Checkout progress" class="_c2">
				{#each ['information', 'shipping', 'payment', 'review'] as step, i}
					<div class={`${i < 3 ? 'flex-1' : ''} _c1`}>
						<div class="_c3">
							<div
								class={`${state.getStepStatus(step) === 'completed' ? 'cf-step--completed' : state.getStepStatus(step) === 'current' ? 'cf-step--current' : 'cf-step--pending'} _c2`}
							>
								{#if state.getStepStatus(step) === 'completed'}
									<BaseIcon name={Check} class="_c4" />
								{:else if state.getStepStatus(step) === 'current'}
									{i + 1}
								{:else}
									{i + 1}
								{/if}
							</div>

							{#if i < 3}
								<div
									class={`${i < state.getStepIndex(state.currentStep) ? 'cf-connector--done' : 'cf-connector--pending'} _c3`}
								></div>
							{/if}
						</div>

						<div
							class={`${state.getStepStatus(step) === 'current' ? 'cf-label--current' : 'cf-label--pending'} _c4`}
						>
							{state.formatStepTitle(step)}
						</div>
					</div>
				{/each}
			</nav>
		</div>
	{/if}

	<div class="_c5">
		<!-- Main content -->

		<div class="_c6">
			<!-- Step 1: Information -->

			{#if state.currentStep === 'information'}
				<div class="_c7">
					<h2 class="_c8">
						<BaseIcon name={User} class="_c9" />

						Contact Information
					</h2>

					<div class="_c10">
						<div>
							<label for="firstName" class="_c11">First name</label>

							<input
								id="firstName"
								type="text"
								placeholder="John"
								class="_c12 _c1"
								value={state.billingAddress.firstName}
								oninput={(e: Event) =>
									state.handleInputChange('firstName', (e.target as HTMLInputElement).value)}
							/>

							{#if state.errors.firstName}
								<p class="_c13">{state.errors.firstName}</p>
							{/if}
						</div>

						<div>
							<label for="lastName" class="_c11">Last name</label>

							<input
								id="lastName"
								type="text"
								placeholder="Doe"
								class="_c12 _c1"
								value={state.billingAddress.lastName}
								oninput={(e: Event) =>
									state.handleInputChange('lastName', (e.target as HTMLInputElement).value)}
							/>

							{#if state.errors.lastName}
								<p class="_c13">{state.errors.lastName}</p>
							{/if}
						</div>

						<div class="_c14">
							<label for="email" class="_c11">Email address</label>

							<input
								id="email"
								type="email"
								placeholder="john@example.com"
								class="_c12 _c1"
								value={state.billingAddress.email}
								oninput={(e: Event) =>
									state.handleInputChange('email', (e.target as HTMLInputElement).value)}
							/>

							{#if state.errors.email}
								<p class="_c13">{state.errors.email}</p>
							{/if}
						</div>

						<div class="_c14">
							<label for="phone" class="_c11">Phone number</label>

							<input
								id="phone"
								type="tel"
								placeholder="(555) 123-4567"
								class="_c12 _c1"
								value={state.billingAddress.phone}
								oninput={(e: Event) =>
									state.handleInputChange('phone', (e.target as HTMLInputElement).value)}
							/>

							{#if state.errors.phone}
								<p class="_c13">{state.errors.phone}</p>
							{/if}
						</div>
					</div>

					<div class="_c15">
						<h3 class="_c16">
							<BaseIcon name={MapPin} class="_c9" />

							Shipping Address
						</h3>

						<div class="_c17">
							<div class="_c3">
								<input
									id="same-as-billing"
									type="checkbox"
									class="_c18 _c2"
									bind:checked={state.sameAsBilling}
								/>

								<label for="same-as-billing" class="_c19"> Same as billing address </label>
							</div>

							<div class="_c20">
								<div class="_c14">
									<label for="address1" class="_c11">Address</label>

									<input
										id="address1"
										type="text"
										placeholder="1234 Main St"
										class="_c12 _c1"
										value={state.shippingAddress.address1}
										disabled={state.sameAsBilling}
										oninput={(e: Event) =>
											state.handleInputChange(
												'address1',

												(e.target as HTMLInputElement).value,

												true
											)}
									/>

									{#if state.errors.address1}
										<p class="_c13">
											{state.errors.address1}
										</p>
									{/if}
								</div>

								<div class="_c14">
									<label for="address2" class="_c11">Apartment, suite, etc. (optional)</label>

									<input
										id="address2"
										type="text"
										placeholder="Apt 1B"
										class="_c12 _c1"
										value={state.shippingAddress.address2}
										disabled={state.sameAsBilling}
										oninput={(e: Event) =>
											state.handleInputChange(
												'address2',

												(e.target as HTMLInputElement).value,

												true
											)}
									/>
								</div>

								<div>
									<label for="city" class="_c11">City</label>

									<input
										id="city"
										type="text"
										placeholder="New York"
										class="_c12 _c1"
										value={state.shippingAddress.city}
										disabled={state.sameAsBilling}
										oninput={(e: Event) =>
											state.handleInputChange('city', (e.target as HTMLInputElement).value, true)}
									/>

									{#if state.errors.city}
										<p class="_c13">{state.errors.city}</p>
									{/if}
								</div>

								<div>
									<label for="state" class="_c11">SlotState</label>

									<select
										id="state"
										class="_c12 _c1"
										value={state.shippingAddress.state}
										disabled={state.sameAsBilling}
										onchange={(e: Event) =>
											state.handleInputChange('state', (e.target as HTMLSelectElement).value, true)}
									>
										<option value="" disabled>Select state</option>

										{#each state.states as s}
											<option value={s.value}>{s.label}</option>
										{/each}
									</select>

									{#if state.errors.state}
										<p class="_c13">{state.errors.state}</p>
									{/if}
								</div>

								<div>
									<label for="zipCode" class="_c11">ZIP / Postal code</label>

									<input
										id="zipCode"
										type="text"
										placeholder="10001"
										class="_c12 _c1"
										value={state.shippingAddress.zipCode}
										disabled={state.sameAsBilling}
										oninput={(e: Event) =>
											state.handleInputChange(
												'zipCode',

												(e.target as HTMLInputElement).value,

												true
											)}
									/>

									{#if state.errors.zipCode}
										<p class="_c13">
											{state.errors.zipCode}
										</p>
									{/if}
								</div>

								<div>
									<label for="country" class="_c11">SlotCountry</label>

									<select
										id="country"
										class="_c12 _c1"
										value={state.shippingAddress.country}
										disabled={state.sameAsBilling}
										onchange={(e: Event) =>
											state.handleInputChange(
												'country',

												(e.target as HTMLSelectElement).value,

												true
											)}
									>
										{#each state.countries as country}
											<option value={country.value}>{country.label}</option>
										{/each}
									</select>

									{#if state.errors.country}
										<p class="_c13">
											{state.errors.country}
										</p>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Step 2: Shipping -->

			{#if state.currentStep === 'shipping'}
				<div class="_c7">
					<h2 class="_c8">
						<BaseIcon name={Truck} class="_c9" />

						Shipping Method
					</h2>

					<div role="radiogroup" aria-label="Shipping method">
						{#each state.shippingOptions as option}
							<div
								class={`${state.selectedShippingOption === option.id ? 'cf-shipping--selected' : 'cf-shipping--default'} _c5`}
							>
								<div>
									<div class="_c3">
										<input
											id={`shipping-option-${option.id}`}
											type="radio"
											name="shipping-method"
											value={option.id}
											class="_c21 _c2"
											checked={state.selectedShippingOption === option.id}
											onchange={() => (state.selectedShippingOption = option.id)}
										/>

										<label for={`shipping-option-${option.id}`} class="_c22">
											{option.name}
										</label>
									</div>

									<p class="_c23">
										{option.description}
									</p>
								</div>

								<div class="_c24">
									<p class="_c25">
										{state.formatCurrency(
											option.price,

											props.currency ?? 'USD',

											props.locale ?? 'en-US'
										)}
									</p>

									<p class="_c26">
										{option.estimatedDays} days
									</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Step 3: Payment -->

			{#if state.currentStep === 'payment'}
				<div class="_c7">
					<h2 class="_c8">
						<BaseIcon name={CreditCard} class="_c9" />

						Payment Method
					</h2>

					<div class="_c27">
						<div class="_c28">
							<div class="_c3">
								<input
									id="payment-credit"
									type="radio"
									name="payment-method"
									value="credit_card"
									class="_c21 _c2"
									checked={state.paymentMethod.type === 'credit_card'}
									onchange={() => state.handlePaymentMethodChange('credit_card')}
								/>

								<label for="payment-credit" class="_c22"> Credit Card </label>
							</div>

							{#if state.paymentMethod.type === 'credit_card'}
								<div class="_c29">
									<div>
										<label for="card-number" class="_c11">Card number</label>

										<input
											id="card-number"
											type="text"
											placeholder="0000 0000 0000 0000"
											class="_c12 _c1"
											value={state.cardInfo.number}
											maxlength={19}
											oninput={(e: Event) =>
												state.handleCardChange(
													'number',

													state.formatCardNumber((e.target as HTMLInputElement).value)
												)}
										/>

										{#if state.errors.cardNumber}
											<p class="_c13">
												{state.errors.cardNumber}
											</p>
										{/if}
									</div>

									<div class="_c30">
										<div>
											<label for="expiry" class="_c11">Expiration date</label>

											<input
												id="expiry"
												type="text"
												placeholder="MM/YY"
												class="_c12 _c1"
												value={state.cardInfo.expiry}
												maxlength={5}
												oninput={(e: Event) =>
													state.handleCardChange(
														'expiry',

														state.formatExpiryDate((e.target as HTMLInputElement).value)
													)}
											/>

											{#if state.errors.expiry}
												<p class="_c13">
													{state.errors.expiry}
												</p>
											{/if}
										</div>

										<div>
											<label for="cvv" class="_c11">CVV</label>

											<input
												id="cvv"
												type="text"
												placeholder="123"
												class="_c12 _c1"
												value={state.cardInfo.cvv}
												maxlength={4}
												oninput={(e: Event) =>
													state.handleCardChange('cvv', (e.target as HTMLInputElement).value)}
											/>

											{#if state.errors.cvv}
												<p class="_c13">
													{state.errors.cvv}
												</p>
											{/if}
										</div>
									</div>

									<div>
										<label for="card-name" class="_c11">Name on card</label>

										<input
											id="card-name"
											type="text"
											placeholder="John Doe"
											class="_c12 _c1"
											value={state.cardInfo.name}
											oninput={(e: Event) =>
												state.handleCardChange('name', (e.target as HTMLInputElement).value)}
										/>

										{#if state.errors.cardName}
											<p class="_c13">
												{state.errors.cardName}
											</p>
										{/if}
									</div>
								</div>
							{/if}
						</div>

						<div class="_c28">
							<div class="_c3">
								<input
									id="payment-paypal"
									type="radio"
									name="payment-method"
									value="paypal"
									class="_c21 _c2"
									checked={state.paymentMethod.type === 'paypal'}
									onchange={() => state.handlePaymentMethodChange('paypal')}
								/>

								<label for="payment-paypal" class="_c22"> PayPal </label>
							</div>
						</div>

						<div class="_c28">
							<div class="_c3">
								<input
									id="payment-digital"
									type="radio"
									name="payment-method"
									value="digital_wallet"
									class="_c21 _c2"
									checked={state.paymentMethod.type === 'digital_wallet'}
									onchange={() => state.handlePaymentMethodChange('digital_wallet')}
								/>

								<label for="payment-digital" class="_c22">
									Digital Wallet (Apple Pay, Google Pay, etc.)
								</label>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Step 4: SlotReview -->

			{#if state.currentStep === 'review'}
				<div class="_c7">
					<h2 class="_c8">
						<BaseIcon name={Package} class="_c9" />

						SlotReview Your SlotOrder
					</h2>

					<div class="_c31">
						<div>
							<h3 class="_c32">Contact Information</h3>

							<p class="_c33">
								{state.billingAddress.firstName}

								{state.billingAddress.lastName}
							</p>

							<p class="_c33">{state.billingAddress.email}</p>

							<p class="_c33">{state.billingAddress.phone}</p>
						</div>

						<div>
							<h3 class="_c32">Shipping Address</h3>

							<p class="_c33">
								{state.shippingAddress.firstName}

								{state.shippingAddress.lastName}
							</p>

							<p class="_c33">{state.shippingAddress.address1}</p>

							{#if state.shippingAddress.address2}
								<p class="_c33">{state.shippingAddress.address2}</p>
							{/if}

							<p class="_c33">
								{state.shippingAddress.city}, {state.shippingAddress.state}

								{state.shippingAddress.zipCode}
							</p>

							<p class="_c33">
								{state.getCountryName(state.shippingAddress.country)}
							</p>
						</div>

						<div>
							<h3 class="_c32">Shipping Method</h3>

							<p class="_c33">{state.selectedShippingDetails?.name}</p>

							<p class="_c34">
								{state.selectedShippingDetails?.description} - {state.formatCurrency(
									state.selectedShippingDetails?.price ?? 0,

									props.currency ?? 'USD',

									props.locale ?? 'en-US'
								)}
							</p>
						</div>

						<div>
							<h3 class="_c32">Payment Method</h3>

							<p class="_c35">{state.paymentMethod.type}</p>

							{#if state.paymentMethod.type === 'credit_card' && state.cardInfo.number}
								<p class="_c34">
									**** **** **** {state.cardInfo.number.replace(/\s/g, '').slice(-4)}
								</p>
							{/if}
						</div>
					</div>
				</div>
			{/if}

			<!-- Step 5: Confirmation -->

			{#if state.currentStep === 'confirmation'}
				<div class="_c7">
					<div class="_c36">
						<div class="_c37">
							<BaseIcon name={CheckCircle} class="_c38" />
						</div>

						<h2 class="_c39">Thank you for your order!</h2>

						<p class="_c40">
							Your order number is <span class="_c41">var(--color-primary-700)</span>. We've emailed
							your receipt to {state.billingAddress.email}.
						</p>

						<div class="_c42">
							<Button variant="primary" onclick={() => window.print()}>Print Receipt</Button>
						</div>
					</div>
				</div>
			{/if}

			<!-- Navigation buttons -->

			<div class="_c43">
				{#if state.currentStep !== 'information' && state.currentStep !== 'confirmation'}
					<Button variant="ghost" onclick={state.goToPreviousStep}>
						← Return to {state.getPreviousStepTitle(state.currentStep)}
					</Button>
				{/if}

				<div class={state.currentStep === 'information' ? 'sm:col-span-2' : ''}>
					<Button variant="primary" class="_c44" onclick={state.goToNextStep}>
						{state.currentStep === 'review'
							? 'Place SlotOrder →'
							: state.currentStep === 'confirmation'
								? 'Continue Shopping →'
								: `Continue to ${state.getNextStepTitle(state.currentStep)} →`}
					</Button>
				</div>
			</div>
		</div>

		<!-- SlotOrder summary sidebar -->

		<div class="_c45">
			<h2 class="_c46">SlotOrder Summary</h2>

			<div class="flow-root">
				<ul class="_c47">
					{#each props.cartItems ?? [] as item}
						<li class="_c48">
							{#if item.thumbnail}
								<div class="_c49">
									<img src={item.thumbnail} alt={item.name} class="_c50" />
								</div>
							{/if}

							<div class="_c51">
								<div>
									<div class="_c52">
										<h3>{item.name}</h3>

										<p class="_c53">
											{state.formatCurrency(
												item.price * item.quantity,

												props.currency ?? 'USD',

												props.locale ?? 'en-US'
											)}
										</p>
									</div>

									<p class="_c54">Qty {item.quantity}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<div class="_c55">
				<div class="_c56">
					<div class="_c57">
						<dt>Subtotal</dt>

						<dd>{state.formattedSubtotal}</dd>
					</div>

					<div class="_c57">
						<dt>Shipping</dt>

						<dd>{state.formattedShipping}</dd>
					</div>

					<div class="_c57">
						<dt>Tax</dt>

						<dd>{state.formattedTax}</dd>
					</div>

					<div class="_c57">
						<dt>Discount</dt>

						<dd>- $0.00</dd>
					</div>

					<div class="_c58">
						<dt>SlotOrder total</dt>

						<dd>{state.formattedTotal}</dd>
					</div>
				</div>
			</div>

			{#if state.currentStep !== 'confirmation'}
				<div class="_c59">
					<div class="_c60">
						<input id="terms" type="checkbox" class="_c18 _c2" bind:checked={state.termsAccepted} />

						<label for="terms" class="_c19"> I agree to the terms and conditions </label>
					</div>

					{#if !state.termsAccepted && state.currentStep === 'review'}
						<p class="_c13">You must agree to the terms and conditions to continue.</p>
					{/if}

					<p class="_c34">
						Read our <a href="/terms" class="_c61 _c3">terms and conditions</a>
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	._c1 {
		margin-bottom: 2rem;
	}

	._c10 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		._c10 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	._c11 {
		margin-bottom: 0.25rem;

		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c12 {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	._c13 {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	@media (min-width: 640px) {
		._c14 {
			grid-column: span 2 / span 2;
		}
	}

	._c15 {
		margin-top: 2rem;
	}

	._c16 {
		margin-bottom: 1rem;

		display: flex;

		align-items: center;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c17 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	._c18 {
		height: 1rem;

		width: 1rem;

		border-radius: 0.25rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	._c19 {
		margin-left: 0.5rem;

		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-primary);
	}

	._c2 {
		display: flex;

		justify-content: space-between;
	}

	._c20 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;

		padding-top: 0.5rem;
	}

	@media (min-width: 640px) {
		._c20 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	._c21 {
		height: 1rem;

		width: 1rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	._c22 {
		margin-left: 0.75rem;

		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c23 {
		margin-left: 1.75rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c24 {
		text-align: right;
	}

	._c25 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c26 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c27 > * + * {
		margin-top: 1rem;
	}

	._c28 {
		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		padding: 1rem;
	}

	._c29 {
		margin-top: 1rem;

		margin-left: 1.75rem;
	}

	._c29 > * + * {
		margin-top: 1rem;
	}

	._c3 {
		display: flex;

		align-items: center;
	}

	._c30 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	@media (min-width: 640px) {
		._c30 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	._c31 > * + * {
		margin-top: 1.5rem;
	}

	._c32 {
		font-size: 1rem;

		line-height: 1.5rem;

		margin-bottom: 1rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c33 {
		color: var(--color-text-primary);
	}

	._c34 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-primary);
	}

	._c35 {
		color: var(--color-text-primary);

		text-transform: capitalize;
	}

	._c36 {
		text-align: center;
	}

	._c37 {
		margin-left: auto;

		margin-right: auto;

		display: flex;

		height: 3rem;

		width: 3rem;

		align-items: center;

		justify-content: center;

		border-radius: 9999px;

		background-color: var(--color-success-100);
	}

	._c38 {
		height: 1.5rem;

		width: 1.5rem;

		color: var(--color-success-600);
	}

	._c39 {
		margin-top: 1rem;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c4 {
		height: 1rem;

		width: 1rem;
	}

	._c40 {
		margin-top: 0.5rem;

		color: var(--color-text-secondary);
	}

	._c41 {
		font-weight: 500;
	}

	._c42 {
		margin-top: 1.5rem;
	}

	._c43 {
		margin-top: 2rem;

		display: flex;

		flex-direction: column;
	}

	@media (min-width: 640px) {
		._c43 {
			flex-direction: row;

			justify-content: space-between;
		}
	}

	._c44 {
		width: 100%;
	}

	@media (min-width: 640px) {
		._c44 {
			width: auto;
		}
	}

	._c45 {
		position: sticky;

		top: 1.5rem;

		height: fit-content;

		border-radius: 0.5rem;

		background-color: var(--color-background-primary);

		padding: 1.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	._c46 {
		margin-bottom: 1rem;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c47 {
		margin-top: -1.5rem;

		margin-bottom: -1.5rem;
	}

	._c47 > * + * {
		border-top-width: 1px;

		border-style: solid;
	}

	._c48 {
		display: flex;

		padding-top: 1.5rem;

		padding-bottom: 1.5rem;
	}

	._c49 {
		height: 6rem;

		width: 6rem;

		flex-shrink: 0;

		overflow: hidden;

		border-radius: 0.375rem;
	}

	._c5 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 2rem;
	}

	@media (min-width: 1024px) {
		._c5 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	._c50 {
		height: 100%;

		width: 100%;

		object-fit: cover;
	}

	._c51 {
		margin-left: 1rem;

		display: flex;

		flex: 1 1 0%;

		flex-direction: column;
	}

	._c52 {
		display: flex;

		justify-content: space-between;

		font-size: 1rem;

		line-height: 1.5rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c53 {
		margin-left: 1rem;
	}

	._c54 {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c55 {
		margin-top: 1.5rem;

		border-top-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding-top: 1rem;
	}

	._c56 > * + * {
		margin-top: 0.75rem;
	}

	._c57 {
		display: flex;

		justify-content: space-between;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c58 {
		display: flex;

		justify-content: space-between;

		border-top-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding-top: 0.75rem;

		font-size: 1rem;

		line-height: 1.5rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c59 {
		margin-top: 1.5rem;
	}

	._c59 > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 1024px) {
		._c6 {
			grid-column: span 2 / span 2;
		}
	}

	._c60 {
		display: flex;

		align-items: flex-start;
	}

	._c61 {
		color: var(--color-primary-600);
	}

	._c7 {
		border-radius: 0.5rem;

		background-color: var(--color-background-primary);

		padding: 1.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	._c8 {
		margin-bottom: 1.5rem;

		display: flex;

		align-items: center;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c9 {
		margin-right: 0.5rem;

		height: 1.25rem;

		width: 1.25rem;
	}

	._c1:focus {
		border-color: var(--color-primary-500);

		box-shadow: 0 0 0 3px var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	._c2:focus {
		box-shadow: 0 0 0 3px var(--color-blue-500);
	}

	._c3:hover {
		color: var(--color-primary-500);
	}

	.checkout-form {
		background-color: var(--color-background-primary);

		border-radius: 0.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.checkout-form__progress-container {
		margin-bottom: 2rem;
	}

	.checkout-form__progress-step {
		display: flex;

		flex-direction: column;

		align-items: center;
	}

	.checkout-form__progress-circle {
		width: 2rem;

		height: 2rem;

		border-radius: 9999px;

		display: flex;

		align-items: center;

		justify-content: center;

		background-color: var(--color-primary-600);

		color: var(--color-text-inverse);
	}

	.checkout-form__progress-label {
		margin-top: 0.5rem;

		font-size: 0.75rem;

		line-height: 1rem;

		font-weight: 500;
	}

	.checkout-form__form-section {
		background-color: var(--color-background-primary);

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);

		border-radius: 0.5rem;

		padding: 1.5rem;
	}

	.checkout-form__section-title {
		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 1.5rem;

		display: flex;

		align-items: center;
	}

	.checkout-form__input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.checkout-form__input:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.checkout-form__label {
		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.25rem;
	}

	.checkout-form__error {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	.checkout-form__form-grid {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.checkout-form__form-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.checkout-form__shipping-option {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;

		display: flex;

		justify-content: space-between;

		align-items: flex-start;
	}

	.checkout-form__payment-method {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;

		display: flex;

		align-items: center;
	}

	.checkout-form__action-button {
		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		border-radius: 0.375rem;

		font-weight: 500;
	}

	.checkout-form__action-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.checkout-form__order-summary {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1.5rem;
	}

	.checkout-form__summary-row {
		display: flex;

		justify-content: space-between;

		font-size: 0.875rem;

		line-height: 1.25rem;
	}

	.checkout-form__checkbox {
		height: 1rem;

		width: 1rem;

		border-radius: 0.25rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	.checkout-form__checkbox:focus {
		box-shadow: 0 0 0 3px var(--color-blue-500);
	}

	/* --- migrated from StyleManager --- */

	.checkout-form {
		background-color: var(--color-background-primary);

		border-radius: 0.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.checkout-form__progress-container {
		margin-bottom: 2rem;
	}

	.checkout-form__progress-step {
		display: flex;

		flex-direction: column;

		align-items: center;
	}

	.checkout-form__progress-circle {
		width: 2rem;

		height: 2rem;

		border-radius: 9999px;

		display: flex;

		align-items: center;

		justify-content: center;

		background-color: var(--color-primary-600);

		color: var(--color-text-inverse);
	}

	.checkout-form__progress-label {
		margin-top: 0.5rem;

		font-size: 0.75rem;

		line-height: 1rem;

		font-weight: 500;
	}

	.checkout-form__form-section {
		background-color: var(--color-background-primary);

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);

		border-radius: 0.5rem;

		padding: 1.5rem;
	}

	.checkout-form__section-title {
		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 1.5rem;

		display: flex;

		align-items: center;
	}

	.checkout-form__input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.checkout-form__input:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.checkout-form__label {
		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.25rem;
	}

	.checkout-form__error {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	.checkout-form__form-grid {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.checkout-form__form-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.checkout-form__shipping-option {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;

		display: flex;

		justify-content: space-between;

		align-items: flex-start;
	}

	.checkout-form__payment-method {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;

		display: flex;

		align-items: center;
	}

	.checkout-form__action-button {
		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		border-radius: 0.375rem;

		font-weight: 500;
	}

	.checkout-form__action-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.checkout-form__order-summary {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1.5rem;
	}

	.checkout-form__summary-row {
		display: flex;

		justify-content: space-between;

		font-size: 0.875rem;

		line-height: 1.25rem;
	}

	.checkout-form__checkbox {
		height: 1rem;

		width: 1rem;

		border-radius: 0.25rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	.checkout-form__checkbox:focus {
		box-shadow: 0 0 0 3px var(--color-blue-500);
	}

	._c1 {
		display: flex;

		flex-direction: column;

		align-items: center;
	}

	._c2 {
		display: flex;

		height: 2rem;

		width: 2rem;

		align-items: center;

		justify-content: center;

		border-radius: 9999px;

		border-color: var(--color-primary-600);

		background-color: var(--color-background-primary);
	}

	._c3 {
		flex: 1 1 auto;
	}

	._c4 {
		margin-top: 0.5rem;

		font-size: 0.75rem;

		line-height: 1rem;

		font-weight: 500;
	}

	._c5 {
		display: flex;

		align-items: flex-start;

		justify-content: space-between;

		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		padding: 1rem;

		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	._c3 {
		border-top-width: 2px;
		border-style: solid;
	}

	.cf-step--completed {
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse, #fff);
	}
	.cf-step--current {
		border: 2px solid;
		color: var(--color-primary-600);
	}
	.cf-step--pending {
		background-color: var(--color-background-tertiary);
		color: var(--color-text-secondary);
	}
	.cf-connector--done {
		border-color: var(--color-primary-600);
	}
	.cf-connector--pending {
		border-color: var(--color-border-primary);
	}
	.cf-label--current {
		color: var(--color-primary-600);
	}
	.cf-label--pending {
		color: var(--color-text-secondary);
	}
	.cf-shipping--selected {
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-blue-500, #3b82f6);
	}
	.cf-shipping--default {
		border-color: var(--color-border-primary);
	}
	._c47 > * + * {
		border-top: 1px solid var(--color-border-primary);
	}
</style>
