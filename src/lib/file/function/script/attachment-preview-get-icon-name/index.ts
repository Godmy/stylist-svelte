export function getIconName(type: string): string {
  switch (type) {
    case 'image': return 'image';
    case 'video': return 'video';
    case 'audio': return 'audio';
    case 'file': return 'file';
    default: return 'file';
  }
}
