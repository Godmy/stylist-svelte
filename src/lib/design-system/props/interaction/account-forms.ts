import type { HTMLAttributes } from 'svelte/elements';

export interface AccountSettingsFormProps extends HTMLAttributes<HTMLFormElement> {
  name?: string;
  email?: string;
  locale?: string;
  class?: string;
}

export interface UserProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  role?: string;
  email?: string;
  class?: string;
}
