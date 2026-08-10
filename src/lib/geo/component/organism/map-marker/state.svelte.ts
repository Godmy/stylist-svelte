import type { RecipeMapMarker } from '$stylist/geo/interface/recipe/map-marker';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createMapMarkerState(props: RecipeMapMarker) {
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

	// SlotState
	let isPopupOpen = $state(props.showPopup ?? false);

	// Sync with showPopup prop
	$effect(() => {
		isPopupOpen = props.showPopup ?? false;
	});

	// Computed
	const CategoryIcon = $derived(getIconForType(type as 'person' | 'place' | 'business'));

	// Classes
	const hostClasses = $derived(
		mergeClassNames('c-map-marker', selected && 'c-map-marker--selected', props.class ?? '')
	);
	const markerContainerClasses = $derived(
		mergeClassNames('c-map-marker__container', props.iconClass ?? '')
	);
	const colorClass = $derived(getColorClass(color, type));
	const pinStyleClasses = $derived(
		mergeClassNames(
			'c-map-marker__pin',
			`c-map-marker__pin--${size}`,
			`c-map-marker__pin--${pinStyle}`,
			selected && 'c-map-marker__pin--selected'
		)
	);
	const distanceLabelClasses = $derived('c-map-marker__distance');
	const popupClasses = $derived(mergeClassNames('c-map-marker__popup', props.popupClass ?? ''));
	const titleClasses = $derived('c-map-marker__popup-title');
	const descriptionClasses = $derived('c-map-marker__popup-description');
	const ratingContainerClasses = $derived('c-map-marker__rating');
	const closeButtonClasses = $derived('c-map-marker__close');
	const contactInfoContainerClasses = $derived('c-map-marker__contact');
	const contactItemClasses = $derived('c-map-marker__contact-item');
	const contactLinkClasses = $derived('c-map-marker__contact-link');
	const customContentClasses = $derived(
		mergeClassNames('c-map-marker__custom', props.contentClass ?? '')
	);
	const actionButtonsContainerClasses = $derived('c-map-marker__actions');
	const flagClasses = $derived(
		mergeClassNames('c-map-marker__flag-pole', `c-map-marker__flag-pole--${size}`)
	);
	const flagTopClasses = $derived(
		mergeClassNames('c-map-marker__flag-top', `c-map-marker__flag-top--${size}`)
	);

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
		return mergeClassNames('c-map-marker__star', isFilled && 'c-map-marker__star--filled');
	}

	function getColorClass(colorValue: string, markerType: string): string {
		if (colorValue) return colorValue;
		const typeColors: Record<string, string> = {
			business: 'var(--color-success-500)',
			person: 'var(--color-purple-500, var(--color-primary-500))',
			place: 'var(--color-warning-500)'
		};
		return typeColors[markerType] ?? 'var(--color-primary-500)';
	}

	function handleKeyDown(e: KeyboardEvent, fn: () => void): void {
		if (e.key === 'Enter' || e.key === ' ') fn();
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
		getStarClasses,
		handleKeyDown,
		set isPopupOpen(value: boolean) {
			isPopupOpen = value;
		}
	};
}
