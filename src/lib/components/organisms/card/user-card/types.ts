export type UserCardStoryUser = {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  title?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
};

export type UserCardScenario = {
  id: string;
  title: string;
  summary: string;
  user: UserCardStoryUser;
  size?: 'sm' | 'md' | 'lg';
  showActions?: boolean;
  badge?: string;
};
