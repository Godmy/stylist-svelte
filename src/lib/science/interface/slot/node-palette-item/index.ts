import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotNodePaletteItem {	id: string;	type: string;	title: string;	description?: string;	icon?: string;	color?: string;	category: string;}
