import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';

export function createBacklogItem(
  title: string,
  description: string,
  assignee: string,
  priority: 'low' | 'medium' | 'high',
  estimatedHours: number
): BacklogItem {
  return {
    id: `item-${Date.now()}`,
    title,
    description,
    assignee: assignee || undefined,
    priority,
    estimatedHours: estimatedHours || undefined,
    status: 'todo',
    tags: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
