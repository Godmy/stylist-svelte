/**
 * MapMarker types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type MarkerType = 'default' | 'business' | 'person' | 'place' | 'custom';

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

export type PinStyle = 'standard' | 'flag' | 'custom';

export interface IMapMarkerProps extends HTMLAttributes<HTMLDivElement> {
  coordinates: Coordinates;
  title?: string;
  description?: string;
  snippet?: Snippet; // Additional content snippet
  type?: MarkerType;
  category?: MarkerCategory;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  showPopup?: boolean;
  popupContent?: Snippet;
  pinStyle?: PinStyle;
  rating?: number; // 0-5 rating
  contactInfo?: ContactInfo;
  distance?: string; // e.g. "0.5 miles away"
  selected?: boolean;
  onMarkerClick?: (coordinates: Coordinates) => void;
  onInfoClick?: (coordinates: Coordinates) => void;
  onNavigateClick?: (coordinates: Coordinates) => void;
  class?: string;
  iconClass?: string;
  popupClass?: string;
  contentClass?: string;
}