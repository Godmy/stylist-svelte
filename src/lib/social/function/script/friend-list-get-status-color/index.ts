export function friendListGetStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    'online': 'bg-[var(--color-success-500)]',
    'away': 'bg-yellow-500',
    'busy': 'bg-[var(--color-danger-500)]',
    'offline': 'bg-[var(--color-neutral-400)]'
  };
  return statusColors[status];
}
