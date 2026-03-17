import { cn } from '$stylist/design-system/utils/cn/index';
import { CardStyleManager } from '$stylist/design-system/styles/information/card';

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
    return 'text-xl font-bold text-[var(--color-text-primary)]';
  }

  static getHeaderButtonContainerClass(): string {
    return '';
  }

  static getAddButtonClass(): string {
    return '';
  }

  static getAddFormContainerClass(): string {
    return cn(
      'add-form mb-4 border border-[var(--color-border-primary)] p-4 shadow-md',
      CardStyleManager.getBaseClasses()
    );
  }

  static getFormGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-2 gap-4';
  }

  static getFormColSpanClass(): string {
    return 'col-span-2';
  }

  static getFormLabelClass(): string {
    return 'mb-1 block text-sm font-medium text-[var(--color-text-secondary)]';
  }

  static getFormInputClass(): string {
    return 'w-full';
  }

  static getFormTextareaClass(): string {
    return 'w-full';
  }

  static getFormSelectClass(): string {
    return 'w-full rounded-md border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] sm:text-sm';
  }

  static getFormButtonsContainerClass(): string {
    return 'mt-4 flex justify-end space-x-2';
  }

  static getFiltersContainerClass(): string {
    return cn(
      'filters mb-4 border border-[var(--color-border-primary)] p-4 shadow-sm',
      CardStyleManager.getBaseClasses()
    );
  }

  static getFiltersGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-3 gap-4';
  }

  static getFilterLabelClass(): string {
    return 'mb-1 block text-sm font-medium text-[var(--color-text-secondary)]';
  }

  static getItemsContainerClass(): string {
    return 'items-container';
  }

  static getEmptyStateContainerClass(): string {
    return 'empty-state text-center py-12';
  }

  static getEmptyStateTextClass(): string {
    return 'text-lg text-[var(--color-text-secondary)]';
  }

  static getEmptyStateSubtextClass(): string {
    return 'mt-2 text-[var(--color-text-tertiary)]';
  }

  static getItemsGridClass(): string {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  }

  static getItemCardClass(): string {
    return cn(
      'relative border border-[var(--color-border-primary)] p-4 shadow-sm',
      CardStyleManager.getBaseClasses()
    );
  }

  static getItemHeaderClass(): string {
    return 'flex justify-between items-start mb-2';
  }

  static getItemTitleClass(): string {
    return 'font-semibold text-[var(--color-text-primary)]';
  }

  static getItemDescriptionClass(): string {
    return 'mb-3 text-sm text-[var(--color-text-secondary)]';
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

