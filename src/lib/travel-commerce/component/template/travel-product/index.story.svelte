<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TravelProduct from './index.svelte';
	import type { ContentSection } from './index.svelte';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import {
		ELEPHANTS_SIGIRIYA_EXCURSION,
		ELEPHANTS_SIGIRIYA_GALLERY,
		ELEPHANTS_SIGIRIYA_ADDONS,
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

	// Build content sections in blog-style format
	const content: ContentSection[] = [
		{
			type: 'highlights',
			items: ELEPHANTS_SIGIRIYA_HIGHLIGHTS
		},

		// Day 1
		{
			type: 'day',
			dayNumber: 1,
			title: 'Путь через центральную часть острова',
			blocks: [
				{
					text: 'Ранний выезд около 04:00 для максимального использования светового дня. Первая остановка — питомник слонов Пиннавела, где мы наблюдаем за слонами во время купания в реке, можем покормить их и увидеть, как за ними ухаживают.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[1], ELEPHANTS_SIGIRIYA_GALLERY[1]]
				},
				{
					text: 'После питомника посещаем сад специй, где узнаём, как растут корица, кардамон, ваниль, перец и другие специи, а также знакомимся с их использованием в аюрведе. Затем заезжаем на чайную фабрику — посмотрим основные этапы производства цейлонского чая и попробуем готовый напиток.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[5], ELEPHANTS_SIGIRIYA_GALLERY[5]]
				},
				{
					text: 'Завершаем день в Королевском ботаническом саду Перадении с большой коллекцией растений: оранжерея орхидей, пальмовые аллеи, мемориальная аллея с деревьями, посаженными Николаем II и Юрием Гагариным.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[4], ELEPHANTS_SIGIRIYA_GALLERY[4]]
				}
			]
		},

		// Hotel info after Day 1
		{
			type: 'hotel',
			name: 'Ночлег в Канди',
			description: 'Вечером прибываем в Канди, где вас ждёт комфортный отель с ужином и завтраком. Отдохните после насыщенного дня и подготовьтесь к завтрашним приключениям.',
			image: ELEPHANTS_SIGIRIYA_GALLERY[4]
		},

		// Day 2
		{
			type: 'day',
			dayNumber: 2,
			title: 'Культурный треугольник',
			blocks: [
				{
					text: 'Начинаем день с посещения Международного буддийского центра Неллигала — храм на вершине горы с видом на окружающие горы и долины. В ясную погоду виден священный Пик Адама.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[0], ELEPHANTS_SIGIRIYA_GALLERY[2]]
				},
				{
					text: 'Главное событие дня — подъём на Пидурангалу (~1 час) с потрясающим видом на Сигирию. Альтернативно можно выбрать подъём на саму Сигирию за дополнительную плату. Панорамные виды с вершины оставят незабываемые впечатления.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[0], ELEPHANTS_SIGIRIYA_GALLERY[2]]
				},
				{
					text: 'Завершаем путешествие посещением храма Золотого Будды в Дамбулле — 30-метровая статуя Будды, одна из самых узнаваемых достопримечательностей Шри-Ланки.',
					images: [ELEPHANTS_SIGIRIYA_GALLERY[3], ELEPHANTS_SIGIRIYA_GALLERY[3]]
				}
			]
		},

		// Return hotel info
		{
			type: 'hotel',
			name: 'Возвращение в отель',
			description: 'Прибытие в ваш отель ориентировочно около 23:00 с остановками для фото и еды по пути.'
		},

		// What's included / not included
		{
			type: 'included',
			items: ELEPHANTS_SIGIRIYA_INCLUDED,
			excludedItems: ELEPHANTS_SIGIRIYA_EXCLUDED
		},

		// Addons & surcharges
		{
			type: 'addons',
			items: ELEPHANTS_SIGIRIYA_ADDONS
		},

		// What to bring
		{
			type: 'what-to-bring',
			items: ELEPHANTS_SIGIRIYA_WHAT_TO_BRING
		},

		// Important info & schedule
		{
			type: 'important-info',
			items: ELEPHANTS_SIGIRIYA_IMPORTANT_INFO,
			schedule: [{ label: 'Возвращение', value: '~23:00' }]
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
				priceUnit: 'per_person',
				basePriceCents: 16000,
				childPriceCents: 12000,
				seniorDiscountPercent: 10
			}}
		/>
	{/snippet}
</Story>
