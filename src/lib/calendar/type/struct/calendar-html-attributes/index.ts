import type { HTMLAttributes } from 'svelte/elements';

export type CalendarHTMLAttributes<T extends EventTarget> = Omit<HTMLAttributes<T>, 'class'>;
