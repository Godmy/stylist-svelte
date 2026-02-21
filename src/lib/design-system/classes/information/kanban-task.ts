/**
 * Kanban Task type definition
 * Used for kanban board components and task management
 */
export type KanbanTask = {
  id: string;
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  status?: 'todo' | 'in-progress' | 'done';
  tags?: string[];
  assignee?: string | { id?: string; name: string; avatar?: string };
  updatedAt?: Date;
};
