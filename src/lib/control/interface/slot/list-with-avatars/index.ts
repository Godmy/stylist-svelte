import type { ListItem } from '$stylist/control/type/struct/list-with-avatars/item';
import type { TokenSize } from '$stylist/layout/type/enum/size';

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
export interface SlotListWithAvatars {
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
}
