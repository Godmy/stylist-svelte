import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ListItem } from '$stylist/control/type/struct/list-with-avatars/item';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

/**
 * SlotListWithAvatars — свойства списка с аватарами.
 *
 * LEGO-состав:
 *   SlotLabel            (information) — items (labels)
 *   SlotCaption          (information) — items (subtitles, descriptions)
 *   SlotIcon             (information) — avatars
 *   BehaviorSelectable<string>   (interaction) — selected items
 *   BehaviorSizable              (architecture) — size
 */
// ListWithAvatars props interface
export interface SlotListWithAvatars extends InteractionHTMLAttributes<HTMLDivElement> {
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
