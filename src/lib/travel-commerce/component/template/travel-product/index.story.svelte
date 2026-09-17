<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TravelProduct from './index.svelte';
	import type { ContentSection } from './index.svelte';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import {
		ELEPHANTS_SIGIRIYA_EXCURSION,
		ELEPHANTS_SIGIRIYA_GALLERY,
		ELEPHANTS_SIGIRIYA_ROUTE_STOPS,
		ELEPHANTS_SIGIRIYA_HIGHLIGHTS,
		ELEPHANTS_SIGIRIYA_INCLUDED,
		ELEPHANTS_SIGIRIYA_EXCLUDED,
		ELEPHANTS_SIGIRIYA_WHAT_TO_BRING,
		ELEPHANTS_SIGIRIYA_IMPORTANT_INFO
	} from '$stylist/travel-commerce/const/preset/elephants-sigiriya-2day';

	// Override gallery captions with marquee ticker text
	const gallery: TourGalleryImage[] = ELEPHANTS_SIGIRIYA_GALLERY.map((img, index) => {
		const tickerTexts = [
			'2 дня путешествия • Панорамный вид с Пидурангалы',
			'Слоны в Пиннавеле • Купание и кормление',
			'Львиная скала Сигирия • Культурное наследие',
			'Золотой Будда в Дамбулле • 30-метровая статуя',
			'Королевский ботанический сад • Редкие растения',
			'Цейлонский чай • Фабрика и дегустация'
		];
		return {
			...img,
			caption: tickerTexts[index] || img.caption
		};
	});

	// Build content sections from preset data
	const content: ContentSection[] = [
		// Introduction
		{
			type: 'text',
			heading: 'О программе',
			text: ELEPHANTS_SIGIRIYA_EXCURSION.summary
		},

		// Highlights
		{
			type: 'highlights',
			heading: 'Что вас ждёт',
			items: ELEPHANTS_SIGIRIYA_HIGHLIGHTS
		},

		// Day 1 overview with image
		{
			type: 'text-image',
			heading: 'День 1: Путь через центральную часть острова',
			text: 'Ранний выезд около 04:00. Посещение питомника слонов Пиннавела, сада специй, чайной фабрики и Королевского ботанического сада Перадении. Вечером прибытие в Канди, ужин и ночлег в отеле.',
			image: ELEPHANTS_SIGIRIYA_GALLERY[4], // Peradeniya garden
			layout: 'left'
		},

		// Day 2 overview with image
		{
			type: 'text-image',
			heading: 'День 2: Культурный треугольник',
			text: 'Посещение буддийского центра Неллигала, подъём на Пидурангалу (или Сигирию за доплату) с потрясающим видом, и завершение в храме Золотого Будды в Дамбулле. Возвращение в отель около 23:00.',
			image: ELEPHANTS_SIGIRIYA_GALLERY[0], // Pidurangala view
			layout: 'right'
		},

		// Included/Excluded in two-column style
		{
			type: 'text-image',
			heading: 'Что включено',
			text: ELEPHANTS_SIGIRIYA_INCLUDED.map((item) => `• ${item}`).join('\n'),
			layout: 'left'
		},

		{
			type: 'text',
			heading: 'Что не включено',
			text: ELEPHANTS_SIGIRIYA_EXCLUDED.map((item) => `• ${item}`).join('\n')
		},

		// What to bring
		{
			type: 'highlights',
			heading: 'Что взять с собой',
			items: ELEPHANTS_SIGIRIYA_WHAT_TO_BRING
		},

		// Important info
		{
			type: 'highlights',
			heading: 'Важная информация',
			items: ELEPHANTS_SIGIRIYA_IMPORTANT_INFO
		}
	];
</script>

<Story
	title="TravelProduct"
	description="Лендинг экскурсии: MediaSlider галерея, бегущая строка, волна, booking-bridge и контент с изображениями. Пример: 'Слоны, Канди, Пидурангала, Сигирия и Дамбулла'."
>
	{#snippet children()}
		<TravelProduct
			excursion={ELEPHANTS_SIGIRIYA_EXCURSION}
			{gallery}
			{content}
			pricing={{
				adult: '$160',
				child: '$120'
			}}
		/>
	{/snippet}
</Story>
