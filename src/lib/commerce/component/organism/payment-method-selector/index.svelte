<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';

	import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';

	import createPaymentMethodSelectorState from '$stylist/commerce/function/state/payment-method-selector/index.svelte';

	let props: PaymentMethodSelectorProps = $props();

	const state = createPaymentMethodSelectorState(props);
</script>

<div class="payment-method-selector">
	<div class="_c1">
		<h3 class="_c2">Payment Methods</h3>

		{#if props.showAddButton !== false}
			<Button size="sm" onclick={props.onMethodAdd}>Add</Button>
		{/if}
	</div>

	<div class="_c3">
		{#each props.methods ?? [] as method}
			<div
				class={`${state.selectedMethodId === method.id ? 'payment-option--selected' : 'payment-option--default'} _c1`}
			>
				<button type="button" class="_c4" onclick={() => state.select(method)}>
					<div class="_c2">{method.nickname || method.name}</div>

					<div class="_c5">
						{method.description || method.details || method.type}
					</div>
				</button>

				<div class="_c6">
					{#if props.showEditButton !== false}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodEdit?.(method)}
							>Edit</Button
						>
					{/if}

					{#if props.showRemoveButton !== false}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodRemove?.(method.id)}
							>Remove</Button
						>
					{/if}

					{#if props.showSetDefaultButton !== false && !method.isDefault}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodSetDefault?.(method.id)}
							>Set Default</Button
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	._c1 {
		margin-bottom: 0.75rem;

		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	._c2 {
		font-weight: 500;
	}

	._c3 > * + * {
		margin-top: 0.5rem;
	}

	._c4 {
		width: 100%;

		text-align: left;
	}

	._c5 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c6 {
		margin-top: 0.5rem;

		display: flex;

		gap: 0.5rem;
	}

	._c1 {
		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		padding: 0.75rem;
	}

	.payment-option--selected {
		border-color: var(--color-primary-500);
		background-color: var(--color-primary-50);
	}
	.payment-option--default {
		border-color: var(--color-border-primary);
	}
</style>
