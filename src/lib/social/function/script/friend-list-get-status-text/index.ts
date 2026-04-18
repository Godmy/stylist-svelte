export function friendListGetStatusText(status: string): string {
  const statusTexts: Record<string, string> = {
    'online': 'Online',
    'away': 'Away',
    'busy': 'Busy',
    'offline': 'Offline'
  };
  return statusTexts[status];
}
