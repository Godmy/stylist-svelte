import type { Activity, ActivityType } from '$stylist/social/type/struct/social-activity-feed';

export function socialActivityFeedGetIcon(type: ActivityType, icons: Record<string, string>): string {
  const iconMap: Record<ActivityType, string> = {
    'like': icons.HEART,
    'comment': icons.MESSAGE_CIRCLE,
    'follow': icons.USER_PLUS,
    'share': icons.SHARE_2,
    'mention': icons.AT_SIGN,
    'achievement': icons.AWARD,
    'system': icons.SETTINGS,
    'announcement': icons.BELL
  };

  return iconMap[type] || icons.ACTIVITY;
}

export function socialActivityFeedGetDescription(activity: Activity): string {
  switch (activity.type) {
    case 'like':
      return `${activity.actor.name} liked your ${activity.subject || 'content'}`;
    case 'comment':
      return `${activity.actor.name} commented on your ${activity.subject || 'post'}`;
    case 'follow':
      return `${activity.actor.name} started following you`;
    case 'mention':
      return `${activity.actor.name} mentioned you in a ${activity.subject || 'post'}`;
    case 'share':
      return `${activity.actor.name} shared your ${activity.subject || 'content'}`;
    case 'achievement':
      return `Congratulations! ${activity.actor.name} earned the ${activity.subject || 'achievement'}`;
    case 'system':
      return `System notification: ${activity.content || ''}`;
    case 'announcement':
      return `Announcement: ${activity.subject || 'New update available'}`;
    default:
      return `${activity.actor.name} performed an action`;
  }
}

export function socialActivityFeedFormatTime(date: Date, locale: string = 'en-US'): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

  return new Date(date).toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: now.getFullYear() !== new Date(date).getFullYear() ? 'numeric' : undefined
  });
}

export default socialActivityFeedGetIcon;
