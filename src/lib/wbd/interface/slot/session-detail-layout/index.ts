import type { Snippet } from 'svelte';
import type { StructWbdSession } from '$stylist/wbd/type/struct/session';

export interface SlotWbdSessionDetailLayout {
	session: StructWbdSession;
	children?: Snippet<[]>;
	sidebar?: Snippet<[]>;
	class?: string;
}
