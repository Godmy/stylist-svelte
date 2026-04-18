export function isExpanded(
  id: string,
  expandedItems: Set<string>
): boolean {
  return expandedItems.has(id);
}
