import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type {
	PrimitiveConnector,
	PrimitiveOwnership,
	PrimitivePin,
	PrimitiveShape
} from '$stylist/design-system/tokens/architecture/primitives';
import type { ContactInfo, Coordinates } from '../../types/information/map-marker';
import type { MapMarkerType, MarkerCategory, PinStyle } from '../../tokens/information/map-marker';

export interface IMapMarkerProps extends HTMLAttributes<HTMLDivElement> {
  coordinates: Coordinates;
  title?: string;
  description?: string;
  snippet?: Snippet;
  type?: MapMarkerType;
  category?: MarkerCategory;
  color?: string;
  size?: ComponentSize;
  showPopup?: boolean;
  popupContent?: Snippet;
  pinStyle?: PinStyle;
  rating?: number;
  contactInfo?: ContactInfo;
  distance?: string;
  selected?: boolean;
  onMarkerClick?: (coordinates: Coordinates) => void;
  onInfoClick?: (coordinates: Coordinates) => void;
  onNavigateClick?: (coordinates: Coordinates) => void;
  class?: string;
  iconClass?: string;
  popupClass?: string;
  contentClass?: string;
}


