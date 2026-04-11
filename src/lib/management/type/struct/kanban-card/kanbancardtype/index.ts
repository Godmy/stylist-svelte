export type KanbanCardType = {
  id: string;
  title: string;
  description?: string;
  labels?: string[];
  assignees?: string[];
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high';
  status?: KanbanCardStatus;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  order: number;
};
