import type { Props, Activity, ActivityType } from '$stylist/social/type/struct/social-activity-feed';

export type SocialActivityFeedState = ReturnType<typeof createSocialActivityFeedState>;

export function createSocialActivityFeedState(props: Props) {
  let activeFilter = $state('all') as ActivityType | 'all';

  const activityTypes: ActivityType[] = ['like', 'comment', 'follow', 'share', 'mention', 'achievement', 'system', 'announcement'];

  const filteredActivities = $derived.by(() => {
    let result = [...(props.activities ?? [])];

    if (activeFilter !== 'all') {
      result = result.filter(activity => activity.type === activeFilter);
    }

    return result.slice(0, props.maxActivities ?? 10);
  });

  const unreadCount = $derived.by(() =>
    (props.activities ?? []).filter(activity => !activity.isRead).length
  );

  const handleActivityClick = (activity: Activity) => {
    props.onActivityClick?.(activity);
    if (!activity.isRead) {
      props.onActivityMarkRead?.(activity.id);
    }
  };

  const handleMarkAsRead = (activityId: string) => {
    props.onActivityMarkRead?.(activityId);
  };

  const handleMarkAsUnread = (activityId: string) => {
    props.onActivityMarkUnread?.(activityId);
  };

  const hostClass = $derived(props.class ?? '');
  const itemClass = $derived(props.itemClass ?? '');
  const headerClass = $derived(props.headerClass ?? '');
  const footerClass = $derived(props.footerClass ?? '');

  return {
    activeFilter,
    activityTypes,
    filteredActivities,
    unreadCount,
    handleActivityClick,
    handleMarkAsRead,
    handleMarkAsUnread,
    hostClass,
    itemClass,
    headerClass,
    footerClass,
  };
}

export default createSocialActivityFeedState;
