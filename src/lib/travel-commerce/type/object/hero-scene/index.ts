export type HeroScene = {
	id: string;
	title: string;
	kicker?: string;
	description?: string;
	mediaType: 'image' | 'video';
	src: string;
	poster?: string;
	alt: string;
	accent?: string;
};
