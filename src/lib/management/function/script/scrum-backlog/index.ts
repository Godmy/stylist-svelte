import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';

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
