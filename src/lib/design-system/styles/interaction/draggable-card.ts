export class DraggableCardStyleManager {
  static getRootClass(extraClasses: string = ''): string {
    const baseClass = 'c-draggable-card relative shadow-md rounded-lg bg-white transition-all duration-200 ease-in-out';
    return extraClasses ? `${baseClass} ${extraClasses}`.trim() : baseClass;
  }

  static getDraggingClass(): string {
    return 'opacity-50 scale-95';
  }

  static getCompactClass(): string {
    return 'p-2';
  }

  static getDefaultClass(): string {
    return 'p-4';
  }

  static getHandleClass(): string {
    return 'flex items-center cursor-move mr-2';
  }

  static getGripIconClass(): string {
    return 'h-5 w-5 text-gray-400';
  }

  static getTitleClass(): string {
    return 'font-medium text-gray-900 truncate';
  }

  static getDescriptionClass(): string {
    return 'text-sm text-gray-500 mt-1 truncate';
  }

  static getTagsContainerClass(): string {
    return 'mt-2 flex flex-wrap gap-1';
  }

  static getTagClass(): string {
    return 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
  }

  static getMetadataClass(): string {
    return 'mt-3 flex items-center justify-between text-xs text-gray-500';
  }

  static getDateClass(): string {
    return 'flex items-center';
  }

  static getAssigneeClass(): string {
    return 'flex items-center';
  }
}