import type { HTMLAttributes } from 'svelte/elements';
import type { SecuritySettingsProps, AppearanceSettingsProps } from './interaction-forms';

/**
 * Account Settings Form Props
 */
export interface AccountSettingsFormElementProps extends HTMLAttributes<HTMLFormElement> {
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

/**
 * Account Settings data structure
 */
export interface AccountSettings {
  email?: string;
  password?: string;
  twoFactorEnabled?: boolean;
}

/**
 * User Profile Card Props
 */
export interface UserProfileCardElementProps extends HTMLAttributes<HTMLDivElement> {
  /** User data */
  user?: UserData;
  /** Show avatar */
  showAvatar?: boolean;
  /** Show email */
  showEmail?: boolean;
  /** Show phone */
  showPhone?: boolean;
  /** Show bio */
  showBio?: boolean;
  /** Enable editing */
  editable?: boolean;
  /** Show edit button */
  showEditButton?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when edit is clicked */
  onEdit?: (user: UserData) => void;
  /** Callback when save is clicked */
  onSave?: (user: UserData) => void;
}

/**
 * User Data structure
 */
export interface UserData {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  bio?: string;
  avatar?: string;
  role?: string;
  location?: string;
}

/**
 * Session data structure
 */
export interface Session {
  id: string;
  device: string;
  location: string;
  ip: string;
  lastActive: string;
  current: boolean;
}

/**
 * Session Manager Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { SessionManagerProps } from './interaction-forms';
