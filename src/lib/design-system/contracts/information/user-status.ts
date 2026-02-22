export type UserStatusStoryUser = {
  id: string;
  name: string;
  status: 'online' | 'away' | 'offline' | 'typing';
  lastSeen?: string;
};

export type UserStatusScenario = {
  id: string;
  title: string;
  summary: string;
  user: UserStatusStoryUser;
  badge?: string;
};
