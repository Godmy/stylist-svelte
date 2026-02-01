export class ErrorMessageStyleManager {
  static getContainerClass(className = '') {
    return `flex items-start gap-2 p-3 text-red-600 bg-red-50 rounded-lg border border-red-200 ${className}`.trim();
  }

  static getIconClass() {
    return 'w-5 h-5 mt-0.5 flex-shrink-0';
  }

  static getTextClass() {
    return 'text-sm font-medium';
  }

  static getBaseClasses() {
    return 'flex items-start gap-2 p-3 text-red-600 bg-red-50 rounded-lg border border-red-200';
  }

  static getTitleClasses() {
    return 'font-semibold text-red-700 mb-1';
  }

  static getTextClasses() {
    return 'text-sm font-medium';
  }

  static getRetryButtonClasses() {
    return 'mt-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2';
  }

  static getButtonContainerClasses() {
    return 'mt-2 flex justify-end';
  }
}