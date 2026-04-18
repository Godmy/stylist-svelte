import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';

export interface SlotInlineBase<T extends HTMLElement = HTMLElement>
	extends HtmlAttributesWithChildren<T> {}
