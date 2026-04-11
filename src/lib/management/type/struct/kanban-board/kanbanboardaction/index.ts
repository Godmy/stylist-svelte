export type KanbanBoardAction =
  | { type: 'move-card'; cardId: string; fromColumnId: string; toColumnId: string; position: number }
  | { type: 'add-card'; columnId: string; cardId: string }
  | { type: 'add-column'; columnId: string }
  | { type: 'rename-column'; columnId: string; title: string }
  | { type: 'rename-card'; columnId: string; cardId: string; title: string }
  | { type: 'archive-card'; columnId: string; cardId: string }
  | { type: 'delete-card'; columnId: string; cardId: string };
