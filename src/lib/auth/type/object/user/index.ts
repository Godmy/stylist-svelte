export type User = {
	id: number;
	email: string;
	username: string;
	isActive: boolean;
	isVerified: boolean;
	profile?: ({
	id: number;
	firstName?: string;
	lastName?: string;
	avatar?: string | null;
	language: string;
	timezone: string;
});
};
