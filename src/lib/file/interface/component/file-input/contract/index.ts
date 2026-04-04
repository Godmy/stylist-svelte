import type { HTMLInputAttributes } from 'svelte/elements';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface FileInputContract extends Omit<HTMLInputAttributes, 'size' | 'class'> {
	/** Selected file(s) */
	value?: File | File[];
	/** Multiple files allowed */
	multiple?: boolean;
	/** Accepted file types */
	accept?: string;
	/** Disabled state */
	disabled?: boolean;
	/** Visual variant */
	variant?: TokenAppearance;
	/** Size */
	size?: TokenSize;
	/** Placeholder text */
	placeholder?: string;
	/** File change callback */
	onFileChange?: (files: File | File[] | null) => void;
	/** Additional CSS class */
	class?: string;
}
