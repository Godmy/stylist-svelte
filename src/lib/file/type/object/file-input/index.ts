import type { HTMLInputAttributes } from 'svelte/elements';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';

export type Props = {
	value?: File | File[];
	multiple?: boolean;
	accept?: string;
	disabled?: boolean;
	variant?: TokenColorTone;
	size?: (typeof TOKEN_SIZE)[number];
	placeholder?: string;
	onFileChange?: (files: File | File[] | null) => void;
	class?: string;
} & Omit<HTMLInputAttributes, 'size'>;
