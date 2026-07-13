import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type DragAndDropListRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> &
	SlotInteraction;
