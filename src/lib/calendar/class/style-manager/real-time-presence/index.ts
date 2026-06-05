import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class RealTimePresenceStyleManager {
	static getBaseClasses(className: string): string {
		return mergeClassNames('c-real-time-presence', className);
	}

	static getUserClasses(): string {
		return 'c-real-time-presence__user';
	}

	static getStatusClasses(status: string): string {
		return mergeClassNames(
			'c-real-time-presence__status',
			`c-real-time-presence__status--${status}`
		);
	}

	static getOnlineClass(): string {
		return 'c-real-time-presence__status--online';
	}
	static getAwayClass(): string {
		return 'c-real-time-presence__status--away';
	}
	static getOfflineClass(): string {
		return 'c-real-time-presence__status--offline';
	}

	static getAllClasses(className: string, status: string): string {
		return mergeClassNames(this.getBaseClasses(className), this.getStatusClasses(status));
	}
}
