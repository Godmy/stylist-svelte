<script lang="ts">
	import type { PaymentSelectorProps } from '$stylist/commerce';
	import { createPaymentSelectorState } from '$stylist/commerce/function/state/payment-selector';

	let props: PaymentSelectorProps = $props();
	const state = createPaymentSelectorState(props);
</script>

<div class={state.rootClass}>
	<div class="rounded-lg border border-[var(--color-border-primary)] p-4">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="font-semibold">{props.title ?? 'Payment Methods'}</h3>
				{#if props.subtitle}<p class="text-sm text-[var(--color-text-secondary)]">
						{props.subtitle}
					</p>{/if}
			</div>
			{#if props.showAddButton !== false}
				<button
					class="rounded bg-[var(--color-primary-600)] px-3 py-1 text-[var(--color-text-inverse)]"
					onclick={props.onAdd}>Add</button
				>
			{/if}
		</div>

		<div class="mt-4 space-y-2">
			{#each props.methods ?? [] as method}
				<div
					class={`rounded-md border p-3 ${state.selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}
				>
					<button type="button" class="w-full text-left" onclick={() => state.select(method.id)}>
						<div class="font-medium">{method.name}</div>
						<div class="text-sm text-[var(--color-text-secondary)]">
							{method.details || method.description || method.type}
						</div>
					</button>
					<div class="mt-2 flex gap-2 text-sm">
						{#if props.showSetDefault !== false && !method.isDefault}
							<button onclick={() => props.onSetDefault?.(method.id)}>Set default</button>
						{/if}
						{#if props.showEditButton !== false}
							<button onclick={() => props.onEdit?.(method.id)}>Edit</button>
						{/if}
						{#if props.showDeleteButton !== false}
							<button
								class="text-[var(--color-danger-600)]"
								onclick={() => props.onDelete?.(method.id)}>Delete</button
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
