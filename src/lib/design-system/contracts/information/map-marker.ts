import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type {
	PrimitiveConnector,
	PrimitiveOwnership,
	PrimitivePin,
	PrimitiveShape
} from '$stylist/design-system/tokens/architecture/primitives';

export type MapMarkerType = PrimitivePin | PrimitiveOwnership;
export type PinStyle = Extract<PrimitiveConnector, 'line' | 'anchor' | 'ring'> | Extract<PrimitiveShape, 'flag'>;

export type MarkerCategory =
  | 'restaurant'
  | 'hotel'
  | 'attraction'
  | 'service'
  | 'transport'
  | 'health'
  | 'education'
  | 'shopping'
  | 'emergency';

export type Coordinates = {
  lat: number;
  lng: number;
};

export type ContactInfo = {
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
};

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


