import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export type ToggleProps = {
	size?: TokenSize;
	disabled?: boolean;
	checked?: boolean;
	class?: string;
	ariaLabel?: string;
	name?: string;
} & Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'checked'>;
