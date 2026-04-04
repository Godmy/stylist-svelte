const SKELETON_VARIANT_CLASSES: Record<string, string> = {
	rect: 'rounded-md',
	circle: 'rounded-full',
	text: 'rounded-sm',
	image: 'rounded-md',
	avatar: 'rounded-full'
};

const SKELETON_ANIMATION_CLASSES: Record<string, string> = {
	pulse: 'animate-pulse',
	wave: 'skeleton-wave',
	fade: 'skeleton-fade',
	none: ''
};

export class SkeletonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSkeletonClasses(
		variant: string = 'rect',
		animation: string = 'pulse',
		className?: string
	): string {
		return this.join([
			'bg-[var(--color-background-secondary)]',
			SKELETON_VARIANT_CLASSES[variant] ?? SKELETON_VARIANT_CLASSES.rect,
			SKELETON_ANIMATION_CLASSES[animation] ?? SKELETON_ANIMATION_CLASSES.pulse,
			className
		]);
	}

	static getSkeletonWidthClass(width: string): string {
		return `w-[${width}]`;
	}

	static getSkeletonHeightClass(height: string): string {
		return `h-[${height}]`;
	}

	static getSkeletonCircleClasses(size: string, className?: string): string {
		return this.join([
			'rounded-full',
			size,
			'bg-[var(--color-background-secondary)] animate-pulse',
			className
		]);
	}

	static getSkeletonTextClasses(lines = 1, className?: string): string {
		return this.join([
			'flex flex-col gap-2',
			lines > 1 ? 'space-y-2' : '',
			className
		]);
	}

	static getSkeletonTextLineClasses(width = '100%', className?: string): string {
		return this.join([
			'h-4 bg-[var(--color-background-secondary)] rounded animate-pulse',
			width !== '100%' ? `w-[${width}]` : 'w-full',
			className
		]);
	}
}
