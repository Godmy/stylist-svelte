export class KanbanBoardStyleManager {
  static getContainerClass(): string {
    return [
      'c-kanban-board flex h-full overflow-x-auto gap-5 rounded-2xl p-4 pb-6',
      '[background-image:var(--gradient-neutral)]',
      'border border-[--color-border-secondary]/80 shadow-inner'
    ].join(' ');
  }

  static getColumnContainerClass(): string {
    return 'min-w-[340px] max-w-[340px]';
  }

  static getButtonContainerClass(): string {
    return 'flex items-start pt-1';
  }

  static getAddButtonClass(): string {
    return 'rounded-xl border border-dashed border-[--color-border-secondary] bg-[--color-background-primary]/80 hover:bg-[--color-background-primary] text-[--color-text-primary] shadow-sm';
  }

  static getIconClass(): string {
    return 'w-4 h-4 mr-2';
  }

  static getContentContainerClass(): string {
    return 'ml-2 flex items-start';
  }
}


