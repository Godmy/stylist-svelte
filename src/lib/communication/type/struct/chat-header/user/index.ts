// User type
export interface User {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline' | 'typing';
  lastSeen?: Date;
}
