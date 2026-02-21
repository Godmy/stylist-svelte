export class KanbanBoardStyleManager {
  static getContainerClass(): string {
    return 'c-kanban-board flex h-full overflow-x-auto pb-4';
  }

  static getColumnContainerClass(): string {
    return 'mr-4 min-w-[320px]';
  }

  static getButtonContainerClass(): string {
    return 'flex items-center';
  }

  static getAddButtonClass(): string {
    return '';
  }

  static getIconClass(): string {
    return 'w-4 h-4 mr-2';
  }

  static getContentContainerClass(): string {
    return 'ml-4';
  }
}