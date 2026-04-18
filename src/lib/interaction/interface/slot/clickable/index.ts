/** Props для кликабельного компонента */
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { Snippet } from 'svelte';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface SlotClickable extends BehaviorClickable {
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
	class?: string;
	children?: Snippet;
}
