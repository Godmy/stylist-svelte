import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SOCIAL_ACTIVITY_FEED_ACTIVITY_TYPE =
  | 'like'
  | 'comment'
  | 'follow'
  | 'share'
  | 'mention'
  | 'achievement'
  | 'system'
  | 'announcement';

export type SOCIAL_ACTIVITY_FEED_USER = {
  id: string;
  name: string;
  username?: string;
  avatar?: string;
  isVerified?: boolean;
};

export type SOCIAL_ACTIVITY_FEED_ACTIVITY = {
  id: string;
  type: SOCIAL_ACTIVITY_FEED_ACTIVITY_TYPE;
  actor: SOCIAL_ACTIVITY_FEED_USER;
  target?: SOCIAL_ACTIVITY_FEED_USER;
  subject?: string;
  content?: string;
  timestamp: Date;
  relatedUrl?: string;
  isRead?: boolean;
  isImportant?: boolean;
};

export type SOCIAL_ACTIVITY_FEED_REST_PROPS = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type SOCIAL_ACTIVITY_FEED_PROPS = SOCIAL_ACTIVITY_FEED_REST_PROPS & {
  activities: SOCIAL_ACTIVITY_FEED_ACTIVITY[];
  showAvatars?: boolean;
  showTimestamp?: boolean;
  showReadStatus?: boolean;
  enableFiltering?: boolean;
  showLoadMore?: boolean;
  maxActivities?: number;
  onActivityClick?: (activity: SOCIAL_ACTIVITY_FEED_ACTIVITY) => void;
  onActivityMarkRead?: (activityId: string) => void;
  onActivityMarkUnread?: (activityId: string) => void;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  footerClass?: string;
  locale?: string;
};
