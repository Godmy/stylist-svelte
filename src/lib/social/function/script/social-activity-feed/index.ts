import type { ActivityType } from '$stylist/social/type/struct/social-activity-feed';

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
