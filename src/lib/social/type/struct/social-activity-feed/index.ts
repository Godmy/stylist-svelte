import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type ActivityType =
  | 'like'
  | 'comment'
  | 'follow'
  | 'share'
  | 'mention'
  | 'achievement'
  | 'system'
  | 'announcement';

export type User = {
  id: string;
  name: string;
  username?: string;
  avatar?: string;
  isVerified?: boolean;
};

export type Activity = {
  id: string;
  type: ActivityType;
  actor: User;
  target?: User;
  subject?: string;
  content?: string;
  timestamp: Date;
  relatedUrl?: string;
  isRead?: boolean;
  isImportant?: boolean;
};

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type Props = RestProps & {
  activities: Activity[];
  showAvatars?: boolean;
  showTimestamp?: boolean;
  showReadStatus?: boolean;
  enableFiltering?: boolean;
  showLoadMore?: boolean;
  maxActivities?: number;
  onActivityClick?: (activity: Activity) => void;
  onActivityMarkRead?: (activityId: string) => void;
  onActivityMarkUnread?: (activityId: string) => void;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  footerClass?: string;
  locale?: string;
};
