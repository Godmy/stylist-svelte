/** Атом статуса для дашбордных сводок */
export type StatusItem = {
	id: string;
	title: string;
	description?: string;
	status: 'success' | 'warning' | 'error' | 'pending' | 'info';
	value?: string | number;
	footer?: any;
	actions?: any;
};
