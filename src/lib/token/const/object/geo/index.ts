import type { Token } from '$stylist/token/type/object/token';

export const TOKEN_GEO_SETTING = [
	{
		key: 'map-provider',
		label: 'Map Provider',
		domain: 'geo',
		controlKind: 'radio',
		values: ['google', 'osm', 'mapbox', 'here', 'tomtom']
	},
	{
		key: 'map-type',
		label: 'Map Type',
		domain: 'geo',
		controlKind: 'radio',
		values: ['roadmap', 'satellite', 'terrain', 'hybrid']
	},
	{
		key: 'pin',
		label: 'Pin',
		domain: 'geo',
		controlKind: 'radio',
		values: ['person', 'place', 'business']
	}
] satisfies readonly Token[];
