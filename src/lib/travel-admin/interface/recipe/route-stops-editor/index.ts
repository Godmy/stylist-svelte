import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';

export interface RecipeRouteStopsEditor {
	stops: AdminRouteStop[];
	onChange: (stops: AdminRouteStop[]) => void;
	class?: string;
}
