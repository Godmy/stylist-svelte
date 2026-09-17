import type { HeroScene } from '$stylist/travel-commerce/type/object/hero-scene';

export const HERO_SCENES: HeroScene[] = [
	{
		id: 'palms',
		kicker: 'Шри-Ланка начинается с воздуха',
		title: 'Пальмы, океан и теплый свет',
		description: 'Листайте вниз: сцены острова постепенно соберутся в вашу экскурсию.',
		mediaType: 'image',
		src: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80',
		alt: 'Пальмы и тропический берег',
		accent: '#1f7f78'
	},
	{
		id: 'ocean',
		kicker: 'Океан',
		title: 'Вода движется медленно',
		description: 'Пляжи, киты, лодки и рассветы южного берега.',
		mediaType: 'video',
		src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
		poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
		alt: 'Видео-сцена океана',
		accent: '#227d91'
	},
	{
		id: 'tea',
		kicker: 'Высокогорье',
		title: 'Чайные плантации и облака',
		description: 'Горы, поезд, водопады и прохладный воздух Цейлона.',
		mediaType: 'image',
		src: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1800&q=80',
		alt: 'Чайные плантации в горах',
		accent: '#3f6f46'
	},
	{
		id: 'wildlife',
		kicker: 'Дикая природа',
		title: 'Сафари, слоны и заповедники',
		description: 'Выберите, какие истории острова должны стать вашими.',
		mediaType: 'image',
		src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=80',
		alt: 'Слон в природном парке',
		accent: '#6f6b34'
	}
];
