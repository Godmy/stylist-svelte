import type { HTMLButtonAttributes } from 'svelte/elements';

export type SplitButtonButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;
