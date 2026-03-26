import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface AccountSettingsFormProps extends InteractionHTMLAttributes<HTMLFormElement> {
  name?: string;
  email?: string;
  locale?: string;
  class?: string;
}

export interface UserProfileCardProps extends InteractionHTMLAttributes<HTMLDivElement> {
  name?: string;
  role?: string;
  email?: string;
  class?: string;
}


