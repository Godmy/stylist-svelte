<script lang="ts">
	import CloseButton from '$stylist/button/component/atom/close-button/index.svelte';
	import type { RecipeAddonRuleRow } from '$stylist/travel-admin/interface/recipe/addon-rule-row';

	let props: RecipeAddonRuleRow = $props();

	function patch(partial: Partial<typeof props.addon>) {
		props.onChange({ ...props.addon, ...partial });
	}
</script>

<div class="addon-rule-row {props.class ?? ''}">
	<label class="addon-rule-row__field">
		<span>Название</span>
		<input
			type="text"
			value={props.addon.label}
			oninput={(e) => patch({ label: (e.target as HTMLInputElement).value })}
		/>
	</label>
	<label class="addon-rule-row__field">
		<span>Цена, ₽</span>
		<input
			type="number"
			min="0"
			step="1"
			value={props.addon.priceCents / 100}
			oninput={(e) => patch({ priceCents: Math.round(Number((e.target as HTMLInputElement).value) * 100) })}
		/>
	</label>
	<label class="addon-rule-row__field">
		<span>Единица</span>
		<select
			value={props.addon.priceUnit}
			onchange={(e) => patch({ priceUnit: (e.target as HTMLSelectElement).value as typeof props.addon.priceUnit })}
		>
			<option value="flat">за бронь</option>
			<option value="per_person">за человека</option>
			<option value="per_day">за день</option>
		</select>
	</label>
	<CloseButton class="addon-rule-row__remove" size="md" ariaLabel="Удалить услугу" onclick={props.onRemove} />
</div>

<style>
	.addon-rule-row {
		position: relative;
		display: grid;
		grid-template-columns: 2fr 1fr 1fr auto;
		gap: 0.75rem;
		align-items: center;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}
	.addon-rule-row__field {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		min-width: 0;
		font-size: 0.8125rem;
		color: var(--color-text-secondary);
	}
	.addon-rule-row__field input,
	.addon-rule-row__field select {
		box-sizing: border-box;
		width: 100%;
		height: 2.5rem;
		padding: 0 0.65rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
	}
	.addon-rule-row__field select {
		appearance: none;
		padding-right: 2.25rem;
		background-image:
			linear-gradient(45deg, transparent 50%, currentColor 50%),
			linear-gradient(135deg, currentColor 50%, transparent 50%);
		background-position:
			calc(100% - 1.15rem) 50%,
			calc(100% - 0.87rem) 50%;
		background-size: 0.32rem 0.32rem;
		background-repeat: no-repeat;
	}
	:global(.addon-rule-row__remove) {
		align-self: center;
	}
	@container (max-width: 640px) {
		.addon-rule-row {
			grid-template-columns: 1fr;
			/* room at the top for the close button, like a window title bar */
			padding-top: 2.75rem;
		}
		:global(.addon-rule-row__remove) {
			position: absolute;
			top: 0.6rem;
			right: 0.6rem;
			align-self: auto;
		}
	}
</style>
