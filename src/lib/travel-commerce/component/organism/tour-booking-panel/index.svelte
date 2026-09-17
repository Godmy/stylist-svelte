<script lang="ts">
	import Stepper from '$stylist/control/component/atom/stepper/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

	type Props = {
		value?: BookingDraft;
		price?: string;
		onBook?: (value: BookingDraft) => void;
	};

	let { value = { pickup: 'Galle', date: '', adults: 2, children: 0 }, price = 'from $145', onBook }: Props = $props();
</script>

<aside class="tc-tour-booking-panel">
	<div>
		<p>Trip total</p>
		<strong>{price}</strong>
	</div>
	<label>
		Pickup
		<input value={value.pickup} oninput={(e) => (value.pickup = (e.target as HTMLInputElement).value)} />
	</label>
	<label>
		Date
		<input type="date" value={value.date} oninput={(e) => (value.date = (e.target as HTMLInputElement).value)} />
	</label>
	<div class="tc-tour-booking-panel__counts">
		<label>
			Adults
			<Stepper value={value.adults} min={1} max={16} onChange={(next) => (value.adults = next)} />
		</label>
		<label>
			Children
			<Stepper value={value.children} min={0} max={12} onChange={(next) => (value.children = next)} />
		</label>
	</div>
	<button type="button" onclick={() => onBook?.(value)}>Add to cart</button>
</aside>

<style>
	.tc-tour-booking-panel {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.12);
		border-radius: 8px;
		background: #fff;
		box-shadow: 0 18px 48px rgba(23, 35, 31, 0.1);
	}
	.tc-tour-booking-panel p,
	.tc-tour-booking-panel strong {
		margin: 0;
	}
	.tc-tour-booking-panel p {
		color: rgba(23, 35, 31, 0.58);
	}
	.tc-tour-booking-panel strong {
		color: #17231f;
		font-size: 1.6rem;
	}
	.tc-tour-booking-panel label {
		display: grid;
		gap: 0.35rem;
		color: rgba(23, 35, 31, 0.7);
		font-size: 0.9rem;
	}
	.tc-tour-booking-panel input {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.5rem;
		border: 1px solid rgba(23, 35, 31, 0.14);
		border-radius: 0.5rem;
		padding: 0.55rem 0.7rem;
		font: inherit;
	}
	.tc-tour-booking-panel__counts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	.tc-tour-booking-panel button {
		min-height: 2.75rem;
		border: 0;
		border-radius: 999px;
		background: #17231f;
		color: #fff;
		font-weight: 700;
		cursor: pointer;
	}
</style>
