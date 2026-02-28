export class KanbanColumnStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-kanban-column rounded-2xl border border-[--color-border-secondary]/90 bg-[--color-background-primary]/85 backdrop-blur shadow-[0_10px_28px_-18px_rgba(15,23,42,0.7)] min-w-[300px] h-full flex flex-col overflow-hidden ${customClass}`.trim();
  }
}
