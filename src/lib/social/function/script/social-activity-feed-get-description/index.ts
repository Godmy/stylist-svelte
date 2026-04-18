import type { Activity } from '$stylist/social/type/struct/social-activity-feed';

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
