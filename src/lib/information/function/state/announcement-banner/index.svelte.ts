import type { AnnouncementBannerProps } from '$stylist/media/interface/component/image/other';
import { MediaStyleManager } from '$stylist/media/class/style-manager/media';

export function createAnnouncementBannerState(props: AnnouncementBannerProps) {
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
















