export type RouteOption = {
	id: string;
	name: string;
	duration: number;
	distance: number;
	tolls?: boolean;
	highways?: boolean;
	ecoFriendly?: boolean;
	cost?: number;
};
