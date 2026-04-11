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
