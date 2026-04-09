import type { BacklogItem } from '$stylist/management/interface/struct/backlog-item';

export function filterBacklogItems(
  items: BacklogItem[],
  statusFilter: string,
  priorityFilter: string,
  searchQuery: string
): BacklogItem[] {
  return items.filter((item: BacklogItem) => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || item.priority === priorityFilter;
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.assignee && item.assignee.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesPriority && matchesSearch;
  });
}

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

export function formatBacklogItemDate(date: Date): string {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
