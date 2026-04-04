/**
 * Settings Components Style Manager
 * Provides consistent styling for settings-related components
 */

export class SettingsStyleManager {
  /**
   * Get base classes for settings container
   */
  static container(base: string, className?: string): string {
    return `${base} space-y-6 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings section
   */
  static section(base: string, className?: string): string {
    return `${base} border rounded-lg p-6 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings header
   */
  static header(base: string, className?: string): string {
    return `${base} text-lg font-semibold mb-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings description
   */
  static description(base: string, className?: string): string {
    return `${base} text-sm text-[--color-text-secondary] mb-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings form group
   */
  static formGroup(base: string, className?: string): string {
    return `${base} space-y-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings toggle row
   */
  static toggleRow(base: string, className?: string): string {
    return `${base} flex items-center justify-between py-3 ${className || ''}`.trim();
  }

  /**
   * Get classes for settings toggle label
   */
  static toggleLabel(base: string, className?: string): string {
    return `${base} flex flex-col ${className || ''}`.trim();
  }

  /**
   * Get classes for settings toggle description
   */
  static toggleDescription(base: string, className?: string): string {
    return `${base} text-sm text-[var(--color-text-secondary)] ${className || ''}`.trim();
  }
}

/**
 * Security Settings Style Manager
 */
export class SecuritySettingsStyleManager {
  /**
   * Get base classes for security settings
   */
  static preferences(base: string, className?: string): string {
    return `${base} ${className || ''}`.trim();
  }

  /**
   * Get classes for security level indicator
   */
  static level(base: string, level?: 'low' | 'medium' | 'high', className?: string): string {
    const levelClasses = {
      low: 'text-[--color-danger-600]',
      medium: 'text-[--color-warning-600]',
      high: 'text-[--color-success-600]'
    };

    const levelClass = level ? levelClasses[level] : '';
    return `${base} ${levelClass} ${className || ''}`.trim();
  }

  /**
   * Get classes for session item
   */
  static session(base: string, current?: boolean, className?: string): string {
    const currentClass = current ? 'border-[--color-info-200] bg-[--color-info-50]' : 'border-[--color-border-secondary] bg-[--color-background-primary]';
    return `${base} ${currentClass} border rounded-lg p-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for session device
   */
  static sessionDevice(base: string, className?: string): string {
    return `${base} font-medium ${className || ''}`.trim();
  }

  /**
   * Get classes for session meta
   */
  static sessionMeta(base: string, className?: string): string {
    return `${base} text-sm text-[--color-text-secondary] ${className || ''}`.trim();
  }

  /**
   * Get classes for two-factor setup
   */
  static twoFactorSetup(base: string, className?: string): string {
    return `${base} border rounded-lg p-4 bg-[var(--color-background-secondary)] ${className || ''}`.trim();
  }
}

/**
 * Account Settings Style Manager
 */
export class AccountSettingsStyleManager {
  /**
   * Get classes for account form
   */
  static form(base: string, className?: string): string {
    return `${base} space-y-6 ${className || ''}`.trim();
  }

  /**
   * Get classes for form field
   */
  static field(base: string, className?: string): string {
    return `${base} space-y-2 ${className || ''}`.trim();
  }

  /**
   * Get classes for form label
   */
  static label(base: string, className?: string): string {
    return `${base} block text-sm font-medium ${className || ''}`.trim();
  }

  /**
   * Get classes for danger zone
   */
  static dangerZone(base: string, className?: string): string {
    return `${base} border border-[--color-danger-200] rounded-lg p-4 bg-[--color-danger-50] ${className || ''}`.trim();
  }

  /**
   * Get classes for two-factor section
   */
  static twoFactorSection(base: string, enabled?: boolean, className?: string): string {
    const enabledClass = enabled ? 'border-[--color-success-200] bg-[--color-success-50]' : 'border-[--color-border-secondary] bg-[--color-background-primary]';
    return `${base} ${enabledClass} border rounded-lg p-4 ${className || ''}`.trim();
  }
}



