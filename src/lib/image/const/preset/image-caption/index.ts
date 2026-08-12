import { IMAGE_STORY_GALLERY } from '$stylist/image/const/value/story-gallery';

export const IMAGE_CAPTION_STORY_PRESETS = [
	{
		id: 'consensus-rounded',
		label: 'Consensus — rounded',
		src: IMAGE_STORY_GALLERY.find((asset) => asset.id === '1-hero-consensus-decision-room')?.src ?? '',
		alt: 'Facilitators aligning the room before a consensus vote',
		caption: 'Consensus decision room — rounded, bordered, with shadow',
		rounded: true,
		bordered: true,
		shadow: true
	},
	{
		id: 'about-flush',
		label: 'About — flush',
		src: IMAGE_STORY_GALLERY.find((asset) => asset.id === '2-section-about')?.src ?? '',
		alt: 'About section illustration',
		caption: 'About section — flush edges, no border, no shadow',
		rounded: false,
		bordered: false,
		shadow: false
	},
	{
		id: 'wideband-delphi-bordered',
		label: 'Wideband Delphi — bordered',
		src: IMAGE_STORY_GALLERY.find((asset) => asset.id === '3-section-wideband-delphi')?.src ?? '',
		alt: 'Wideband Delphi estimation session',
		caption: 'Wideband Delphi — square corners, bordered, no shadow',
		rounded: false,
		bordered: true,
		shadow: false
	},
	{
		id: 'history-shadow',
		label: 'History — shadow',
		src: IMAGE_STORY_GALLERY.find((asset) => asset.id === '4-section-history')?.src ?? '',
		alt: 'History section illustration',
		caption: 'History section — rounded, no border, with shadow',
		rounded: true,
		bordered: false,
		shadow: true
	}
];
