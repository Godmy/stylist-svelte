import { MapMarkerStyleManager } from '$stylist/geo/class/style-manager/map-marker';
import type { IMapMarkerProps } from '$stylist/geo/interface/component/map-marker/other';

export interface MapMarkerStateProps extends IMapMarkerProps {
	class?: string;
}

export function createMapMarkerState(props: MapMarkerStateProps) {
	// Props with defaults
	const coordinates = $derived(props.coordinates);
	const title = $derived(props.title);
	const description = $derived(props.description);
	const type = $derived(props.type ?? 'place');
	const color = $derived(props.color ?? '');
	const size = $derived(props.size ?? 'md');
	const showPopup = $derived(props.showPopup ?? false);
	const pinStyle = $derived(props.pinStyle ?? 'vector');
	const rating = $derived(props.rating);
	const contactInfo = $derived(props.contactInfo);
	const distance = $derived(props.distance);
	const selected = $derived(props.selected ?? false);

	// State
	let isPopupOpen = $state(props.showPopup ?? false);

	// Sync with showPopup prop
	$effect(() => {
		isPopupOpen = props.showPopup ?? false;
	});

	// Computed
	const CategoryIcon = $derived(getIconForType(type as 'person' | 'place' | 'business'));

	// Classes
	const hostClasses = $derived(MapMarkerStyleManager.getBaseClasses(selected, props.class ?? ''));
	const markerContainerClasses = $derived(MapMarkerStyleManager.getMarkerContainerClasses(props.iconClass ?? ''));
	const colorClass = $derived(MapMarkerStyleManager.getColorClass(color, type));
	const pinStyleClasses = $derived(MapMarkerStyleManager.getPinStyleClasses(size, colorClass, selected, pinStyle));
	const distanceLabelClasses = $derived(MapMarkerStyleManager.getDistanceLabelClasses());
	const popupClasses = $derived(MapMarkerStyleManager.getPopupClasses(props.popupClass ?? ''));
	const titleClasses = $derived(MapMarkerStyleManager.getTitleClasses(''));
	const descriptionClasses = $derived(MapMarkerStyleManager.getDescriptionClasses());
	const ratingContainerClasses = $derived(MapMarkerStyleManager.getRatingContainerClasses());
	const closeButtonClasses = $derived(MapMarkerStyleManager.getCloseButtonClasses());
	const contactInfoContainerClasses = $derived(MapMarkerStyleManager.getContactInfoContainerClasses());
	const contactItemClasses = $derived(MapMarkerStyleManager.getContactItemClasses());
	const contactLinkClasses = $derived(MapMarkerStyleManager.getContactLinkClasses());
	const customContentClasses = $derived(MapMarkerStyleManager.getCustomContentClasses(props.contentClass ?? ''));
	const actionButtonsContainerClasses = $derived(MapMarkerStyleManager.getActionButtonsContainerClasses());
	const flagClasses = $derived(MapMarkerStyleManager.getFlagClasses(colorClass, size));
	const flagTopClasses = $derived(MapMarkerStyleManager.getFlagTopClasses(colorClass, size));

	// Methods
	function handleClick(): void {
		props.onMarkerClick?.(coordinates);
		isPopupOpen = !isPopupOpen;
	}

	function handleInfoClick(): void {
		props.onInfoClick?.(coordinates);
	}

	function handleNavigateClick(): void {
		props.onNavigateClick?.(coordinates);
	}

	function getIconForType(markerType: 'person' | 'place' | 'business'): string {
		const typeIcons: Record<'person' | 'place' | 'business', string> = {
			person: 'map-pin',
			place: 'building',
			business: 'shopping-bag'
		};
		return typeIcons[markerType] ?? 'map-pin';
	}

	function getStarClasses(isFilled: boolean, isHalf: boolean = false): string {
		return MapMarkerStyleManager.getStarClasses(isFilled, isHalf);
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			coordinates: _coordinates,
			title: _title,
			description: _description,
			snippet: _snippet,
			type: _type,
			color: _color,
			size: _size,
			showPopup: _showPopup,
			popupContent: _popupContent,
			pinStyle: _pinStyle,
			rating: _rating,
			contactInfo: _contactInfo,
			distance: _distance,
			selected: _selected,
			onMarkerClick: _onMarkerClick,
			onInfoClick: _onInfoClick,
			onNavigateClick: _onNavigateClick,
			iconClass: _iconClass,
			popupClass: _popupClass,
			contentClass: _contentClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get coordinates() {
			return coordinates;
		},
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get type() {
			return type;
		},
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get pinStyle() {
			return pinStyle;
		},
		get rating() {
			return rating;
		},
		get contactInfo() {
			return contactInfo;
		},
		get distance() {
			return distance;
		},
		get selected() {
			return selected;
		},
		get isPopupOpen() {
			return isPopupOpen;
		},
		get CategoryIcon() {
			return CategoryIcon;
		},
		get hostClasses() {
			return hostClasses;
		},
		get markerContainerClasses() {
			return markerContainerClasses;
		},
		get colorClass() {
			return colorClass;
		},
		get pinStyleClasses() {
			return pinStyleClasses;
		},
		get distanceLabelClasses() {
			return distanceLabelClasses;
		},
		get popupClasses() {
			return popupClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get ratingContainerClasses() {
			return ratingContainerClasses;
		},
		get closeButtonClasses() {
			return closeButtonClasses;
		},
		get contactInfoContainerClasses() {
			return contactInfoContainerClasses;
		},
		get contactItemClasses() {
			return contactItemClasses;
		},
		get contactLinkClasses() {
			return contactLinkClasses;
		},
		get customContentClasses() {
			return customContentClasses;
		},
		get actionButtonsContainerClasses() {
			return actionButtonsContainerClasses;
		},
		get flagClasses() {
			return flagClasses;
		},
		get flagTopClasses() {
			return flagTopClasses;
		},
		get restProps() {
			return restProps;
		},
		handleClick,
		handleInfoClick,
		handleNavigateClick,
		getIconForType,
		getStarClasses
	};
}

export default createMapMarkerState;
