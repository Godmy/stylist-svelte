import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeIRoute extends ComputeIntersectAll<[]> {
	start: {
id: string;
	name: string;
	address?: string;
};
	end: {
id: string;
	name: string;
	address?: string;
};
	waypoints?: {
id: string;
	name: string;
	address?: string;
}[];
	mode?: 'driving' | 'walking' | 'cycling' | 'transit';
	showOptions?: boolean;
	showDirections?: boolean;
	showMap?: boolean;
}
