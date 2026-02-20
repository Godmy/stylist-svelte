/**
 * Notification Components Style Manager
 * Provides consistent styling for notification-related components
 */

export class NotificationStyleManager {
  /**
   * Get base classes for notification preferences
   */
  static preferences(base: string, className?: string): string {
    return `${base} ${className || ''}`.trim();
  }

  /**
   * Get classes for notification item
   */
  static item(base: string, type?: 'info' | 'success' | 'warning' | 'error', className?: string): string {
    const typeClasses = {
      info: 'border-blue-200 bg-blue-50',
      success: 'border-green-200 bg-green-50',
      warning: 'border-yellow-200 bg-yellow-50',
      error: 'border-red-200 bg-red-50'
    };
    
    const typeClass = type ? typeClasses[type] : 'border-gray-200 bg-gray-50';
    return `${base} ${typeClass} ${className || ''}`.trim();
  }

  /**
   * Get classes for scheduled notification
   */
  static scheduled(base: string, className?: string): string {
    return `${base} border rounded-lg p-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for notification badge
   */
  static badge(base: string, unread?: boolean, className?: string): string {
    const unreadClass = unread ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700';
    return `${base} ${unreadClass} px-2 py-1 rounded-full text-xs font-semibold ${className || ''}`.trim();
  }
}

/**
 * Response Viewer Style Manager
 */
export class ResponseViewerStyleManager {
  /**
   * Get base classes for response viewer
   */
  static root(base: string, className?: string): string {
    return `${base} border rounded-lg overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Get classes based on status
   */
  static byStatus(status: 'success' | 'error' | 'loading' | 'info'): string {
    const statusClasses = {
      success: 'border-green-200 bg-green-50',
      error: 'border-red-200 bg-red-50',
      loading: 'border-blue-200 bg-blue-50',
      info: 'border-gray-200 bg-gray-50'
    };
    return statusClasses[status];
  }

  /**
   * Get classes for code content
   */
  static code(base: string, className?: string): string {
    return `${base} font-mono text-sm p-4 overflow-auto ${className || ''}`.trim();
  }

  /**
   * Get classes for toolbar
   */
  static toolbar(base: string, className?: string): string {
    return `${base} flex items-center justify-between px-4 py-2 border-b bg-gray-50 ${className || ''}`.trim();
  }
}

/**
 * Document Preview Style Manager
 */
export class DocumentPreviewStyleManager {
  /**
   * Get base classes for document preview
   */
  static root(base: string, className?: string): string {
    return `${base} border rounded-lg overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Get classes for preview content
   */
  static content(base: string, className?: string): string {
    return `${base} font-mono text-sm p-4 overflow-auto ${className || ''}`.trim();
  }

  /**
   * Get classes for line numbers
   */
  static lineNumbers(base: string, className?: string): string {
    return `${base} select-none text-gray-400 text-right pr-4 border-r ${className || ''}`.trim();
  }

  /**
   * Get classes for toolbar
   */
  static toolbar(base: string, className?: string): string {
    return `${base} flex items-center justify-between px-4 py-2 border-b bg-gray-50 ${className || ''}`.trim();
  }
}
