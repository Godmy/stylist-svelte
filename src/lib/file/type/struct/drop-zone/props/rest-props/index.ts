import type { HTMLAttributes } from 'svelte/elements';

export type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
