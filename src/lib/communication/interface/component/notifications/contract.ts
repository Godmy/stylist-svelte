import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface NotificationData {
	id: string;
	title: string;
	message?: string;
	type?: 'info' | 'success' | 'warning' | 'error';
	read?: boolean;
	timestamp?: Date;
}

export type NotificationCenterContract = RecordArchitectureMerge<
	[
		{
			notifications?: NotificationData[];
			showUnreadCount?: boolean;
			showMarkAllRead?: boolean;
			showClearAll?: boolean;
			showTimestamp?: boolean;
			pollingInterval?: number;
			onNotificationClick?: (notification: NotificationData) => void;
			onMarkAllRead?: () => void;
			onClearAll?: () => void;
			onFetchMore?: () => void;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

export type NotificationListContract = RecordArchitectureMerge<
	[
		{
			notifications?: NotificationData[];
			showDismiss?: boolean;
			showTypeIcon?: boolean;
			showTimestamp?: boolean;
			maxVisible?: number;
			onDismiss?: (id: string) => void;
			onNotificationClick?: (notification: NotificationData) => void;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

export interface NotificationPreferencesData {
	email: boolean;
	push: boolean;
	sms: boolean;
	inApp: boolean;
}

export type NotificationPreferencesContract = RecordArchitectureMerge<
	[
		{
			showEmail?: boolean;
			showPush?: boolean;
			showSms?: boolean;
			showInApp?: boolean;
			allowBulkToggle?: boolean;
			onSave?: (preferences: NotificationPreferencesData) => void;
			onReset?: () => void;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

export interface ScheduledNotificationData {
	id: string;
	title: string;
	description?: string;
	scheduledAt: string;
	enabled?: boolean;
	recurrence?: 'daily' | 'weekly' | 'monthly' | 'once';
}

export type ScheduledNotificationContract = RecordArchitectureMerge<
	[
		{
			notifications?: ScheduledNotificationData[];
			showEditButton?: boolean;
			showDeleteButton?: boolean;
			showRecurrence?: boolean;
			allowReorder?: boolean;
			onEdit?: (notification: ScheduledNotificationData) => void;
			onDelete?: (id: string) => void;
			onToggle?: (id: string) => void;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
