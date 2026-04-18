import type { Activity, ActivityType, Props } from '$stylist/social/type/struct/social-activity-feed';

export function createSocialActivityFeedState(props: Props) {
	let activeFilter = $state<ActivityType | 'all'>('all');
	const activities = $derived(props.activities ?? []);
	const activityTypes = $derived(Array.from(new Set(activities.map((activity) => activity.type))));
	const filteredActivities = $derived((activeFilter === 'all' ? activities : activities.filter((activity) => activity.type === activeFilter)).slice(0, props.maxActivities ?? activities.length));
	const unreadCount = $derived(activities.filter((activity) => !activity.isRead).length);

	function handleActivityClick(activity: Activity): void {
		props.onActivityClick?.(activity);
	}

	return {
		get hostClass() { return props.class ?? ''; },
		get headerClass() { return props.headerClass ?? ''; },
		get itemClass() { return props.itemClass ?? ''; },
		get footerClass() { return props.footerClass ?? ''; },
		get activeFilter() { return activeFilter; },
		set activeFilter(value: ActivityType | 'all') { activeFilter = value; },
		get activityTypes() { return activityTypes; },
		get filteredActivities() { return filteredActivities; },
		get unreadCount() { return unreadCount; },
		handleActivityClick,
		handleMarkAsRead: (activityId: string) => props.onActivityMarkRead?.(activityId),
		handleMarkAsUnread: (activityId: string) => props.onActivityMarkUnread?.(activityId)
	};
}

export default createSocialActivityFeedState;
