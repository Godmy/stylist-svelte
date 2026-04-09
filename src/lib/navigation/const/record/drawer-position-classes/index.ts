export const DRAWER_POSITION_CLASSES: Record<string, string> = {
	left: 'translate-x-[-100%] border-r border-[var(--color-border-primary)] order-[-1]',
	right: 'translate-x-[100%] border-l border-[var(--color-border-primary)] order-[1]',
	top: 'translate-y-[-100%] border-b border-[var(--color-border-primary)] w-full max-w-none max-h-[40vh]',
	bottom: 'translate-y-[100%] border-t border-[var(--color-border-primary)] w-full max-w-none max-h-[40vh] order-[1]'
};

export const DRAWER_OPEN_POSITION_CLASSES: Record<string, string> = {
	left: 'translate-x-0',
	right: 'translate-x-0',
	top: 'translate-y-0',
	bottom: 'translate-y-0'
};

export const DRAWER_BASE_CLASS = 'flex flex-col min-w-[var(--size)] max-w-[90vw] h-full bg-[var(--color-background-primary)] shadow-[var(--shadow-custom17)] transition-transform duration-[var(--duration-300)]';

export const DRAWER_BACKDROP_BASE_CLASS = 'fixed top-0 left-0 w-full h-full z-[var(--z-index-dropdown)] flex transition-opacity duration-[var(--duration-300)]';

export const DRAWER_BACKDROP_VISIBLE_CLASS = 'opacity-[var(--opacity-100)] bg-[color-mix(in_srgb,var(--color-text-primary)_50%,transparent)]';
