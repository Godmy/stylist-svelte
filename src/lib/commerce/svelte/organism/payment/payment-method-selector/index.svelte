<script lang="ts">
	import { Button } from '$stylist';
	import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';
	import { createPaymentMethodSelectorState } from '$stylist/commerce/function/state/payment-method-selector';

	let props: PaymentMethodSelectorProps = $props();
	const state = createPaymentMethodSelectorState(props);
</script>

<div class={state.rootClass}>
	<div class="flex items-center justify-between mb-3">
		<h3 class="font-medium">Payment Methods</h3>
		{#if props.showAddButton !== false}
			<Button size="sm" onclick={props.onMethodAdd}>Add</Button>
		{/if}
	</div>

	<div class="space-y-2">
		{#each props.methods ?? [] as method}
			<div class={`border rounded-md p-3 ${state.selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}>
				<button type="button" class="w-full text-left" onclick={() => state.select(method)}>
					<div class="font-medium">{method.nickname || method.name}</div>
					<div class="text-sm text-[var(--color-text-secondary)]">{method.description || method.details || method.type}</div>
				</button>
				<div class="mt-2 flex gap-2">
					{#if props.showEditButton !== false}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodEdit?.(method)}>Edit</Button>
					{/if}
					{#if props.showRemoveButton !== false}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodRemove?.(method.id)}>Remove</Button>
					{/if}
					{#if props.showSetDefaultButton !== false && !method.isDefault}
						<Button variant="ghost" size="sm" onclick={() => props.onMethodSetDefault?.(method.id)}>Set Default</Button>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
