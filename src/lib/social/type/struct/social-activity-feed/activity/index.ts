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
