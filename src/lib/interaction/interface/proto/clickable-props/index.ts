/** Props для кликабельного компонента */
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { Snippet } from 'svelte';

export interface ClickProps extends IClickable {
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
	class?: string;
	children?: Snippet;
}
