import type { AnnouncementBannerContract } from '$stylist/media/interface/component/announcement-banner/contract';
import { MediaStyleManager } from '$stylist/media/class/style-manager/media';

export function createAnnouncementBannerState(props: AnnouncementBannerContract) {
	const containerClasses = $derived(MediaStyleManager.getAnnouncementBannerContainerClasses(props.class));
	const flexClasses = $derived(MediaStyleManager.getAnnouncementBannerFlexContainerClasses());
	const iconClasses = $derived(MediaStyleManager.getAnnouncementBannerIconClasses());
	const contentClasses = $derived(MediaStyleManager.getAnnouncementBannerContentClasses());
	const titleClasses = $derived(MediaStyleManager.getAnnouncementBannerTitleClasses());
	const descriptionClasses = $derived(MediaStyleManager.getAnnouncementBannerDescriptionClasses());
	const childrenClasses = $derived(MediaStyleManager.getAnnouncementBannerChildrenContainerClasses());

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

export default createAnnouncementBannerState;
