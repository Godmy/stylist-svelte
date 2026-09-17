<script lang="ts">
	import BookingBar from '$stylist/booking/component/molecule/booking-bar/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

	type Props = {
		progress?: number;
		value?: BookingDraft;
		onSearch?: (value: BookingDraft) => void;
	};

	let {
		progress = 0,
		value = {
			pickup: 'Галле',
			date: '',
			adults: 2,
			seniors: 0,
			childrenTeen: 0,
			children: 0,
			childrenUnder2: 0,
			adventures: []
		},
		onSearch
	}: Props = $props();
	const compact = $derived(progress > 0.45);
</script>

<div class="tc-booking-bridge" data-compact={compact || undefined}>
	<BookingBar {value} {compact} {onSearch} />
</div>

<style>
	.tc-booking-bridge {
		position: sticky;
		top: 12px;
		z-index: 20;
		padding: 0 0 18px;
		transition: transform 420ms ease;
	}
	.tc-booking-bridge[data-compact] {
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-booking-bridge {
			transition: none;
		}
	}
</style>
