/**
 * Form Components Style Manager
 * Provides consistent styling for form-related components
 */

export class FormStyleManager {
  /**
   * Get base classes for form container
   */
  static container(base: string, className?: string): string {
    return `${base} space-y-6 ${className || ''}`.trim();
  }

  /**
   * Get classes for form group
   */
  static group(base: string, className?: string): string {
    return `${base} space-y-4 ${className || ''}`.trim();
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
  static label(base: string, required?: boolean, className?: string): string {
    const requiredClass = required ? ' after:content-["*"] after:text-red-500 after:ml-1' : '';
    return `${base} block text-sm font-medium${requiredClass} ${className || ''}`.trim();
  }

  /**
   * Get classes for form input
   */
  static input(base: string, error?: boolean, disabled?: boolean, className?: string): string {
    const errorClass = error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
    const disabledClass = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white';
    return `${base} ${errorClass} ${disabledClass} border rounded-md px-3 py-2 w-full transition-colors ${className || ''}`.trim();
  }

  /**
   * Get classes for form error message
   */
  static error(base: string, className?: string): string {
    return `${base} text-sm text-red-600 ${className || ''}`.trim();
  }

  /**
   * Get classes for form hint
   */
  static hint(base: string, className?: string): string {
    return `${base} text-sm text-gray-500 ${className || ''}`.trim();
  }

  /**
   * Get classes for form actions
   */
  static actions(base: string, className?: string): string {
    return `${base} flex items-center justify-end gap-4 pt-4 ${className || ''}`.trim();
  }
}

/**
 * Validation Style Manager
 */
export class ValidationStyleManager {
  /**
   * Get classes for validation success
   */
  static success(base: string, className?: string): string {
    return `${base} text-green-600 ${className || ''}`.trim();
  }

  /**
   * Get classes for validation error
   */
  static error(base: string, className?: string): string {
    return `${base} text-red-600 ${className || ''}`.trim();
  }

  /**
   * Get classes for validation warning
   */
  static warning(base: string, className?: string): string {
    return `${base} text-yellow-600 ${className || ''}`.trim();
  }

  /**
   * Get classes for password strength indicator
   */
  static passwordStrength(base: string, strength?: 'weak' | 'medium' | 'strong', className?: string): string {
    const strengthClasses = {
      weak: 'bg-red-500',
      medium: 'bg-yellow-500',
      strong: 'bg-green-500'
    };
    
    const strengthClass = strength ? strengthClasses[strength] : 'bg-gray-300';
    return `${base} ${strengthClass} h-1 rounded-full transition-all ${className || ''}`.trim();
  }

  /**
   * Get classes for validation icon
   */
  static icon(base: string, valid?: boolean, className?: string): string {
    const validClass = valid ? 'text-green-500' : 'text-red-500';
    return `${base} ${validClass} ${className || ''}`.trim();
  }
}

/**
 * Search Form Style Manager
 */
export class SearchFormStyleManager {
  /**
   * Get classes for search container
   */
  static container(base: string, className?: string): string {
    return `${base} relative ${className || ''}`.trim();
  }

  /**
   * Get classes for search input wrapper
   */
  static inputWrapper(base: string, className?: string): string {
    return `${base} relative ${className || ''}`.trim();
  }

  /**
   * Get classes for search icon
   */
  static icon(base: string, className?: string): string {
    return `${base} absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ${className || ''}`.trim();
  }

  /**
   * Get classes for search input
   */
  static input(base: string, className?: string): string {
    return `${base} pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ''}`.trim();
  }

  /**
   * Get classes for recent searches
   */
  static recentSearches(base: string, className?: string): string {
    return `${base} absolute top-full left-0 right-0 mt-1 border rounded-lg bg-white shadow-lg ${className || ''}`.trim();
  }

  /**
   * Get classes for search filter
   */
  static filter(base: string, active?: boolean, className?: string): string {
    const activeClass = active ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white text-gray-700 border-gray-300';
    return `${base} ${activeClass} border rounded px-3 py-1 text-sm cursor-pointer ${className || ''}`.trim();
  }
}

/**
 * Secure Form Style Manager
 */
export class SecureFormStyleManager {
  /**
   * Get classes for secure form container
   */
  static container(base: string, className?: string): string {
    return `${base} border-2 border-green-200 rounded-lg p-6 bg-green-50 ${className || ''}`.trim();
  }

  /**
   * Get classes for encryption indicator
   */
  static encryption(base: string, className?: string): string {
    return `${base} flex items-center gap-2 text-sm text-green-700 ${className || ''}`.trim();
  }

  /**
   * Get classes for secure badge
   */
  static secureBadge(base: string, className?: string): string {
    return `${base} inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full ${className || ''}`.trim();
  }

  /**
   * Get classes for session timeout warning
   */
  static timeoutWarning(base: string, className?: string): string {
    return `${base} fixed top-4 right-4 z-50 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg ${className || ''}`.trim();
  }

  /**
   * Get classes for masked input
   */
  static maskedInput(base: string, className?: string): string {
    return `${base} tracking-widest ${className || ''}`.trim();
  }
}

/**
 * Screen Reader Style Manager
 */
export class ScreenReaderStyleManager {
  /**
   * Get classes for skip link
   */
  static skipLink(base: string, className?: string): string {
    return `${base} sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 ${className || ''}`.trim();
  }

  /**
   * Get classes for ARIA live region
   */
  static liveRegion(base: string, className?: string): string {
    return `${base} sr-only ${className || ''}`.trim();
  }

  /**
   * Get classes for announcement
   */
  static announcement(base: string, className?: string): string {
    return `${base} ${className || ''}`.trim();
  }
}
