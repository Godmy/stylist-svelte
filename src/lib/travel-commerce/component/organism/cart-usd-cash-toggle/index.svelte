<script lang="ts">
	type Props = {
		enabled?: boolean;
		amount?: number;
		threshold?: number;
		discountLabel?: string;
		onChange?: (value: { enabled: boolean; amount: number }) => void;
	};

	let { enabled = false, amount = 500, threshold = 500, discountLabel = '3% cash discount', onChange }: Props = $props();

	function emit() {
		onChange?.({ enabled, amount });
	}
</script>

<section class="tc-cart-usd-cash-toggle" data-enabled={enabled || undefined}>
	<label>
		<input
			type="checkbox"
			checked={enabled}
			onchange={(e) => {
				enabled = (e.target as HTMLInputElement).checked;
				emit();
			}}
		/>
		<span>Declare USD cash</span>
	</label>
	<div>
		<input
			type="number"
			min={threshold}
			step="50"
			value={amount}
			disabled={!enabled}
			oninput={(e) => {
				amount = Number((e.target as HTMLInputElement).value);
				emit();
			}}
		/>
		<strong>{discountLabel}</strong>
	</div>
</section>

<style>
	.tc-cart-usd-cash-toggle {
		display: grid;
		gap: 0.75rem;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.12);
		border-radius: 8px;
		background: #fff;
	}
	.tc-cart-usd-cash-toggle[data-enabled] {
		border-color: rgba(43, 124, 93, 0.42);
		background: rgba(43, 124, 93, 0.06);
	}
	.tc-cart-usd-cash-toggle label,
	.tc-cart-usd-cash-toggle div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.tc-cart-usd-cash-toggle span {
		color: #17231f;
		font-weight: 700;
	}
	.tc-cart-usd-cash-toggle input[type='number'] {
		width: 9rem;
		min-height: 2.4rem;
		border: 1px solid rgba(23, 35, 31, 0.14);
		border-radius: 0.5rem;
		padding: 0.4rem 0.6rem;
	}
	.tc-cart-usd-cash-toggle strong {
		color: #245b45;
	}
</style>
