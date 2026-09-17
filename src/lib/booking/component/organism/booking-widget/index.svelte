<script lang="ts">
	import BookingBar from '$stylist/booking/component/molecule/booking-bar/index.svelte';
	import BookingAccordion from '$stylist/booking/component/organism/booking-accordion/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		value?: BookingDraft;
		excursions?: Excursion[];
		onSearch?: (value: BookingDraft) => void;
	};

	let {
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
		excursions,
		onSearch
	}: Props = $props();
</script>

<div class="tc-booking-widget">
	<div class="tc-booking-widget__desktop">
		<BookingBar {value} {onSearch} />
	</div>
	<div class="tc-booking-widget__mobile">
		<BookingAccordion {value} {excursions} {onSearch} />
	</div>
</div>

<style>
	.tc-booking-widget__mobile {
		display: none;
	}

	@media (max-width: 640px) {
		.tc-booking-widget__desktop {
			display: none;
		}

		.tc-booking-widget__mobile {
			display: block;
		}
	}
</style>
