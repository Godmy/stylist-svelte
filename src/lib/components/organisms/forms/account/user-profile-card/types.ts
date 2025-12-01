export type UserProfileStory = {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinDate?: string;
  stats?: { label: string; value: string }[];
  coverImage?: string;
};

export type UserProfileScenario = {
  id: string;
  title: string;
  summary: string;
  user: UserProfileStory;
  compact?: boolean;
  badge?: string;
};
