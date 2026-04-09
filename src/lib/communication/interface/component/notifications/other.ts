import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';
import type { TokenNotifictionChannel } from '$stylist/communication/type/enum/notification-channel';
import type { INotificationSettingsPreference } from '$stylist/communication/type/struct/notification-settings-preference';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';

export interface NotificationItem {
	id: string;
	title: string;
	message: string;
	type?: 'info' | 'warning' | 'error' | 'success';
	timestamp?: number;
	read?: boolean;
}

export interface ScheduledNotificationItem {
	id: string;
	title: string;
	schedule: string;
	enabled?: boolean;
}

export type NotificationCenterProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	notifications?: NotificationItem[];
};

export type NotificationListProps = ArchitectureHTMLAttributes<HTMLUListElement> & {
	notifications?: NotificationItem[];
};

export interface NotificationPreferencesData {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}

export type NotificationPreferencesProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	preferences?: NotificationPreferencesData;
};

export type ScheduledNotificationProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	notifications?: ScheduledNotificationItem[];
};

export type NotificationItemProps = ArchitectureHTMLAttributes<HTMLLIElement> & {
	notification?: NotificationItem;
};

export interface INotificationProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	children?: Snippet<[]>;
	show?: boolean;
	title?: string;
	message?: string;
	type?: TokenAppearance | 'silent';
	duration?: number;
	closable?: boolean;
	position?: TokenAlignment;
	showIcon?: boolean;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	notification?: NotificationItem;
	onClose?: () => void;
	onDismiss?: (id: string) => void;
	onMarkRead?: (id: string) => void;
}

export interface INotificationSettingsProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	preferences?: INotificationSettingsPreference[];
	onPreferenceChange?: (
		id: string,
		channel: TokenNotifictionChannel,
		enabled: boolean
	) => void;
	showEmail?: boolean;
	showPush?: boolean;
	showSms?: boolean;
	showInApp?: boolean;
	headerClass?: string;
	sectionClass?: string;
	footerClass?: string;
}
