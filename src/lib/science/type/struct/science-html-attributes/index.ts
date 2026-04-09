import type { HTMLAttributes } from 'svelte/elements';

export type ScienceHTMLAttributes<T extends EventTarget> = Omit<HTMLAttributes<T>, 'class'>;
