<script lang="ts">
	import TravelCalculator from './index.svelte';
	import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';

	const pricing: PricingModel = {
		priceUnit: 'per_person',
		basePriceCents: 15000,
		childPriceCents: 10000,
		seniorDiscountPercent: 10,
		pickupSurcharges: [
			{ place: 'Галле', amountCents: 0 },
			{ place: 'Мирисса', amountCents: 0 },
			{ place: 'Бентота', amountCents: 5000 }
		],
		addons: [
			{
				id: 'zipline',
				label: 'Зиплайн',
				description: 'По желанию, в первый день маршрута.',
				price: '+$25 с человека',
				amount: { unit: 'per_person', adultCents: 2500, childCents: 2500, childUnder5Cents: 0 }
			},
			{
				id: 'single-room',
				label: 'Одноместное размещение',
				description: 'Отдельный номер в отеле.',
				price: '+$20 за номер',
				amount: { unit: 'per_booking', amountCents: 2000 }
			},
			{ id: 'guide-choice', label: 'Питомник Миллениум вместо Пиннавелы', description: '', price: 'согласовать с гидом' }
		]
	};

	let booking = $state<BookingDraft>({ pickup: 'Галле', date: '', adults: 3, children: 1, childrenUnder3: 0 });
	let addons = $state<Record<string, AddonQuantity>>({ zipline: { adults: 2 } });
</script>

<div style="max-width:1100px;padding:24px;background:#f7f3ec;">
	<TravelCalculator
		{pricing}
		serviceLabel="Элла, Хапутале, Липтон Сит, поезд и Нувара-Элия"
		bind:bookingValue={booking}
		bind:addons
		included={['Транспорт на всём маршруте', 'Русскоязычный гид', 'Проживание в отеле']}
		excluded={['Личные расходы']}
		pickupOptions={['Галле', 'Мирисса', 'Бентота', 'Тангалле']}
		durationDays={2}
		prepaymentPerPersonDayCents={1000}
		onBook={() => {}}
	/>
</div>
