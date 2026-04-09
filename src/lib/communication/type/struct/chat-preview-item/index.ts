import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

/** Элемент чата для превью */
export interface ChatPreviewItem {
  id: string;
  title: string;
  lastMessage?: string;
  timestamp?: string;
  unreadCount?: number;
}
