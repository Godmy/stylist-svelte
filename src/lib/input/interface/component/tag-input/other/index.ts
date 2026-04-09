import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface TagInputProps extends InteractionHTMLAttributes<HTMLDivElement> {
	tags?: string[];
	placeholder?: string;
	disabled?: boolean;
	maxTags?: number;
	delimiter?: string;
	validator?: (tag: string) => boolean;
	class?: string;
	inputClass?: string;
	tagClass?: string;
	removeButtonClass?: string;
	onInput?: (tags: string[]) => void;
	onChange?: (tags: string[]) => void;
}


