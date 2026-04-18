import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export function getItemCount(item: SlotFolderItem): number {
  if (!item.children) return 0;

  let count = 0;
  const stack = [...item.children];

  while (stack.length) {
    const current = stack.pop()!;
    if (current.children) {
      stack.push(...current.children);
    }
    count++;
  }

  return count;
}
