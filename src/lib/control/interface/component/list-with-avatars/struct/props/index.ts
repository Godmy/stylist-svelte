import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ListItem } from '$stylist/control/type/struct/list-with-avatars/item';
import type { TokenSize } from '$stylist/layout/type/enum/size';

/**
 * IListWithAvatarsProps — свойства списка с аватарами.
 *
 * LEGO-состав:
 *   ILabelSlot            (information) — items (labels)
 *   ICaptionSlot          (information) — items (subtitles, descriptions)
 *   IIconSlot             (information) — avatars
 *   ISelectable<string>   (interaction) — selected items
 *   ISizable              (architecture) — size
 */
// ListWithAvatars props interface
export interface IListWithAvatarsProps extends InteractionHTMLAttributes<HTMLDivElement> {
  items: ListItem[];
  showAvatar?: boolean;
  showStatus?: boolean;
  showSubtitle?: boolean;
  showDescription?: boolean;
  showActions?: boolean;
  /** Размер списка */
  size?: TokenSize;
  class?: string;
  itemClass?: string;
  avatarClass?: string;
  contentClass?: string;
  actionsClass?: string;
  children?: Snippet;
}
