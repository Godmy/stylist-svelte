import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type SideBySideLayoutRestProps = Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'>;
