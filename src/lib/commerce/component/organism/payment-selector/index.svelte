<script lang="ts">
	import type { PaymentSelectorProps } from '$stylist/commerce/type/struct/payment-selector-props';

	import createPaymentSelectorState from './state.svelte';

	let props: PaymentSelectorProps = $props();

	const state = createPaymentSelectorState(props);
</script>

<div class="payment-selector">
	<div class="_c1">
		<div class="_c2">
			<div>
				<h3 class="_c3">{props.title ?? 'Payment Methods'}</h3>

				{#if props.subtitle}<p class="_c4">
						{props.subtitle}
					</p>{/if}
			</div>

			{#if props.showAddButton !== false}
				<button class="_c5" onclick={props.onAdd}>Add</button>
			{/if}
		</div>

		<div class="_c6">
			{#each props.methods ?? [] as method}
				<div
					class={`${state.selectedMethodId === method.id ? 'payment-option--selected' : 'payment-option--default'} _c1`}
				>
					<button type="button" class="_c7" onclick={() => state.select(method.id)}>
						<div class="_c8">{method.name}</div>

						<div class="_c4">
							{method.details || method.description || method.type}
						</div>
					</button>

					<div class="_c9">
						{#if props.showSetDefault !== false && !method.isDefault}
							<button onclick={() => props.onSetDefault?.(method.id)}>Set default</button>
						{/if}

						{#if props.showEditButton !== false}
							<button onclick={() => props.onEdit?.(method.id)}>Edit</button>
						{/if}

						{#if props.showDeleteButton !== false}
							<button class="_c10" onclick={() => props.onDelete?.(method.id)}>Delete</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	._c1 {
		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1rem;
	}

	._c10 {
		color: var(--color-danger-600);
	}

	._c2 {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	._c3 {
		font-weight: 600;
	}

	._c4 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c5 {
		border-radius: 0.25rem;

		background-color: var(--color-primary-600);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.25rem;

		padding-bottom: 0.25rem;

		color: var(--color-text-inverse);
	}

	._c6 {
		margin-top: 1rem;
	}

	._c6 > * + * {
		margin-top: 0.5rem;
	}

	._c7 {
		width: 100%;

		text-align: left;
	}

	._c8 {
		font-weight: 500;
	}

	._c9 {
		margin-top: 0.5rem;

		display: flex;

		gap: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;
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
