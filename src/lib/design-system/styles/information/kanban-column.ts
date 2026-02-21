export class KanbanColumnStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-kanban-column bg-gray-50 rounded-lg shadow-sm border border-gray-200 min-w-[300px] h-full flex flex-col ${customClass}`.trim();
  }
}