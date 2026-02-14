export class ScrumBacklogStyleManager {
  static getContainerClass(): string {
    return 'c-scrum-backlog backlog-container';
  }

  static getHeaderClass(): string {
    return 'header mb-6';
  }

  static getHeaderFlexClass(): string {
    return 'flex justify-between items-center mb-4';
  }

  static getHeaderTitleClass(): string {
    return 'text-xl font-bold text-gray-800';
  }

  static getHeaderButtonContainerClass(): string {
    return '';
  }

  static getAddButtonClass(): string {
    return '';
  }

  static getAddFormContainerClass(): string {
    return 'add-form bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200';
  }

  static getFormGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-2 gap-4';
  }

  static getFormColSpanClass(): string {
    return 'col-span-2';
  }

  static getFormLabelClass(): string {
    return 'block text-sm font-medium text-gray-700 mb-1';
  }

  static getFormInputClass(): string {
    return 'w-full';
  }

  static getFormTextareaClass(): string {
    return 'w-full';
  }

  static getFormSelectClass(): string {
    return 'w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  }

  static getFormButtonsContainerClass(): string {
    return 'mt-4 flex justify-end space-x-2';
  }

  static getFiltersContainerClass(): string {
    return 'filters bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4';
  }

  static getFiltersGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-3 gap-4';
  }

  static getFilterLabelClass(): string {
    return 'block text-sm font-medium text-gray-700 mb-1';
  }

  static getItemsContainerClass(): string {
    return 'items-container';
  }

  static getEmptyStateContainerClass(): string {
    return 'empty-state text-center py-12';
  }

  static getEmptyStateTextClass(): string {
    return 'text-gray-500 text-lg';
  }

  static getEmptyStateSubtextClass(): string {
    return 'text-gray-400 mt-2';
  }

  static getItemsGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  }

  static getItemCardClass(): string {
    return 'bg-white rounded-lg shadow-sm border border-gray-200 p-4 relative';
  }

  static getItemHeaderClass(): string {
    return 'flex justify-between items-start mb-2';
  }

  static getItemTitleClass(): string {
    return 'font-semibold text-gray-800';
  }

  static getItemDescriptionClass(): string {
    return 'text-sm text-gray-600 mb-3';
  }

  static getItemBadgesContainerClass(): string {
    return 'flex flex-wrap gap-2 mb-3';
  }

  static getItemBadgeClass(): string {
    return '';
  }

  static getItemActionsContainerClass(): string {
    return 'flex justify-end space-x-2';
  }

  static getItemActionButtonClass(): string {
    return '';
  }

  static getIconClass(): string {
    return 'w-4 h-4 mr-1 inline';
  }
}