/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { AccountSettings } from './account-settings';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { AccountSettings } from './account-settings';

/**
 * Account Settings Form Props
 */
export interface AccountSettingsFormElementProps extends InteractionHTMLAttributes<HTMLFormElement> {
  /** Show email change section */
  showEmailChange?: boolean;
  /** Show password change section */
  showPasswordChange?: boolean;
  /** Show delete account section */
  showDeleteAccount?: boolean;
  /** Show two-factor authentication section */
  showTwoFactor?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when form is submitted */
  onSubmit?: (settings: AccountSettings) => void;
  /** Callback when delete account is requested */
  onDeleteAccount?: () => void;
}