import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';

export interface SlotTabs extends HtmlAttributesWithChildren<HTMLDivElement> {
	selectedId?: string;
	onValueChange?: (id: string) => void;
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
}
