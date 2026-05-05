// User type
export type User = {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline' | 'typing';
  lastSeen?: Date;
}
