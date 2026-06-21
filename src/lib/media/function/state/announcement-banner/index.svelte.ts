import type { RecipeAnnouncementBanner as AnnouncementBannerContract } from '$stylist/media/interface/recipe/announcement-banner';

export function createAnnouncementBannerState(props: AnnouncementBannerContract) {
	const containerClasses = $derived(
		[
			'announcement-banner__announcement-banner-container',
			props.class ? `announcement-banner__announcement-banner-container--selected` : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const flexClasses = $derived('announcement-banner__announcement-banner-flex-container');
	const iconClasses = $derived('announcement-banner__announcement-banner-icon');
	const contentClasses = $derived('announcement-banner__announcement-banner-content');
	const titleClasses = $derived('announcement-banner__announcement-banner-title');
	const descriptionClasses = $derived('announcement-banner__announcement-banner-description');
	const childrenClasses = $derived('announcement-banner__announcement-banner-children-container');

	return {
		get containerClasses() {
			return containerClasses;
		},
		get flexClasses() {
			return flexClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get childrenClasses() {
			return childrenClasses;
		}
	};
}
