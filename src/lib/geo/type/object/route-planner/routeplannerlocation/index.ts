export type RoutePlannerLocation = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	arrivalTime?: Date;
	departureTime?: Date;
};
