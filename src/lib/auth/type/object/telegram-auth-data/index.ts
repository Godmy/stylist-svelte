export type TelegramAuthData = {
	id: string | number;
	hash: string;
	authDate: string | number;
	firstName?: string;
	lastName?: string;
	username?: string;
	photoUrl?: string;
};
