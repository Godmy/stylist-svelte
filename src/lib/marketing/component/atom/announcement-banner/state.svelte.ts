import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { RecipeAnnouncementBanner } from '$stylist/marketing/interface/recipe/announcement-banner';

const flexClasses = 'announcement-banner__announcement-banner-flex-container';
const iconClasses = 'announcement-banner__announcement-banner-icon';
const contentClasses = 'announcement-banner__announcement-banner-content';
const titleClasses = 'announcement-banner__announcement-banner-title';
const descriptionClasses = 'announcement-banner__announcement-banner-description';
const childrenClasses = 'announcement-banner__announcement-banner-children-container';

export function createAnnouncementBannerState(props: RecipeAnnouncementBanner) {
	const containerClasses = $derived(
		ClassNamesManager.merge('announcement-banner__announcement-banner-container', props.class ?? '')
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			children: _children,
			title: _title,
			description: _description,
			icon: _icon,
			...rest
		} = props;
		return rest;
	});

	return {
		get containerClasses() {
			return containerClasses;
		},
		flexClasses,
		iconClasses,
		contentClasses,
		titleClasses,
		descriptionClasses,
		childrenClasses,
		get restProps() {
			return restProps;
		}
	};
}
