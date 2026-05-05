import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import { MESSAGE_ALIGNMENT_CLASSES } from '$stylist/chat/const/map/message-alignment-classes';

export function getMessageAlignmentClass(align: TokenAlignment): string {
	if (align === 'right') return MESSAGE_ALIGNMENT_CLASSES.right;
	if (align === 'center') return MESSAGE_ALIGNMENT_CLASSES.center;
	return MESSAGE_ALIGNMENT_CLASSES.left;
}
