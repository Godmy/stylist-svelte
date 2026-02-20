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
    return `${base} text-sm text-gray-600 mb-4 ${className || ''}`.trim();
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
    return `${base} text-sm text-gray-500 ${className || ''}`.trim();
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
      low: 'text-red-600',
      medium: 'text-yellow-600',
      high: 'text-green-600'
    };
    
    const levelClass = level ? levelClasses[level] : '';
    return `${base} ${levelClass} ${className || ''}`.trim();
  }

  /**
   * Get classes for session item
   */
  static session(base: string, current?: boolean, className?: string): string {
    const currentClass = current ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white';
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
    return `${base} text-sm text-gray-500 ${className || ''}`.trim();
  }

  /**
   * Get classes for two-factor setup
   */
  static twoFactorSetup(base: string, className?: string): string {
    return `${base} border rounded-lg p-4 bg-gray-50 ${className || ''}`.trim();
  }
}

/**
 * Appearance Settings Style Manager
 */
export class AppearanceSettingsStyleManager {
  /**
   * Get base classes for appearance settings
   */
  static preferences(base: string, className?: string): string {
    return `${base} ${className || ''}`.trim();
  }

  /**
   * Get classes for theme selector
   */
  static themeSelector(base: string, className?: string): string {
    return `${base} grid grid-cols-3 gap-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for theme option
   */
  static themeOption(base: string, selected?: boolean, className?: string): string {
    const selectedClass = selected 
      ? 'border-blue-500 ring-2 ring-blue-200' 
      : 'border-gray-200 hover:border-gray-300';
    return `${base} ${selectedClass} border rounded-lg p-4 cursor-pointer transition-all ${className || ''}`.trim();
  }

  /**
   * Get classes for color swatch
   */
  static colorSwatch(base: string, selected?: boolean, className?: string): string {
    const selectedClass = selected ? 'ring-2 ring-offset-2 ring-gray-400' : '';
    return `${base} ${selectedClass} w-10 h-10 rounded-full cursor-pointer transition-all ${className || ''}`.trim();
  }

  /**
   * Get classes for preview panel
   */
  static preview(base: string, className?: string): string {
    return `${base} border rounded-lg p-4 bg-gray-50 ${className || ''}`.trim();
  }

  /**
   * Get classes for font size option
   */
  static fontSizeOption(base: string, selected?: boolean, className?: string): string {
    const selectedClass = selected ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200';
    return `${base} ${selectedClass} border rounded px-4 py-2 cursor-pointer ${className || ''}`.trim();
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
    return `${base} border border-red-200 rounded-lg p-4 bg-red-50 ${className || ''}`.trim();
  }

  /**
   * Get classes for two-factor section
   */
  static twoFactorSection(base: string, enabled?: boolean, className?: string): string {
    const enabledClass = enabled ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white';
    return `${base} ${enabledClass} border rounded-lg p-4 ${className || ''}`.trim();
  }
}
