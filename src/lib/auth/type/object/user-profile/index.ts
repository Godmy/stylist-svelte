export type UserProfile = {
	id: number;
	firstName?: string;
	lastName?: string;
	avatar?: string | null;
	language: string;
	timezone: string;
};
