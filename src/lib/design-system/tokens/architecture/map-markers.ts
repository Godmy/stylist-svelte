export const MAP_MARKER_TYPES = ['default', 'business', 'person', 'place', 'custom'] as const;
export type MapMarkerType = (typeof MAP_MARKER_TYPES)[number];

export const MAP_PIN_STYLES = ['standard', 'flag', 'custom'] as const;
export type PinStyle = (typeof MAP_PIN_STYLES)[number];
