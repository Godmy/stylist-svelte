export class StyleManagerColorPalette {
	private static joinClasses(...values: Array<string | null | undefined | false>): string {
		return values
			.filter(Boolean)
			.map((value) => String(value).trim())
			.filter(Boolean)
			.join(' ');
	}

	private static readonly gridColumns: Record<number, string> = {
		1: 'lg:grid-cols-1',
		2: 'lg:grid-cols-2',
		3: 'lg:grid-cols-3',
		4: 'lg:grid-cols-4',
		5: 'lg:grid-cols-5',
		6: 'lg:grid-cols-6'
	};

	static container(className?: string): string {
		return StyleManagerColorPalette.joinClasses('space-y-4', className);
	}

	static header(className?: string): string {
		return StyleManagerColorPalette.joinClasses(
			'text-sm font-semibold text-[--color-text-primary]',
			className
		);
	}

	static grid(columns: number): string {
		const normalizedColumns = Math.max(1, Math.min(columns, 6));
		return StyleManagerColorPalette.joinClasses(
			'grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
			StyleManagerColorPalette.gridColumns[normalizedColumns]
		);
	}

	static item(className?: string): string {
		return StyleManagerColorPalette.joinClasses(
			'flex flex-col items-center rounded-lg border border-[--color-border-secondary] bg-[--color-background-primary] p-3 transition-colors hover:bg-[--color-background-secondary]',
			className
		);
	}

	static colorSwatch(): string {
		return 'h-12 w-12 rounded-md border border-[--color-border-secondary]';
	}

	static label(): string {
		return 'mt-2 text-xs font-medium text-[--color-text-primary]';
	}

	static value(): string {
		return 'mt-1 text-xs text-[--color-text-secondary]';
	}
}
