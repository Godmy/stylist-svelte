import type { PrimitiveOwnership, PrimitivePin } from '../architecture/primitives';

export const MAP_MARKER_PIN_STYLES = ['line', 'anchor', 'ring', 'flag'] as const;
export const MAP_MARKER_CATEGORIES = [
    'restaurant',
    'hotel',
    'attraction',
    'service',
    'transport',
    'health',
    'education',
    'shopping',
    'emergency'
] as const;
export type PinStyle = (typeof MAP_MARKER_PIN_STYLES)[number];
export type MarkerCategory = (typeof MAP_MARKER_CATEGORIES)[number];
export type MapMarkerType = PrimitivePin | PrimitiveOwnership;
