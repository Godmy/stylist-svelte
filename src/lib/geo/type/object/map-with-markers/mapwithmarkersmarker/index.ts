export type MapWithMarkersMarker = {
	id: string;
	lat: number;
	lng: number;
	title?: string;
	description?: string;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
	icon?: string;
};
