export interface SlotBacklogItem {
  id: string;
  title: string;
  description?: string;
  assignee?: string;
  priority: 'low' | 'medium' | 'high';
  estimatedHours?: number;
  status: 'todo' | 'in-progress' | 'done';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
