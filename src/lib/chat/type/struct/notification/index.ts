export type NotificationData = {
	id: string;
	title: string;
	message: string;
	type: 'info' | 'warning' | 'error' | 'success';
	timestamp: string;
};
