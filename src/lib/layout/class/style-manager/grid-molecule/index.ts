import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type GridMoleculeGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type GridMoleculeAlign = 'start' | 'center' | 'end' | 'stretch';
export type GridMoleculeJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

const GAP_MAP: Record<GridMoleculeGap, string> = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

const ALIGN_MAP: Record<GridMoleculeAlign, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch'
};

const JUSTIFY_MAP: Record<GridMoleculeJustify, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};

export class GridMoleculeStyleManager {
	static getGapClass(gap: GridMoleculeGap): string {
		return GAP_MAP[gap];
	}

	static getAlignClass(align: GridMoleculeAlign): string {
		return ALIGN_MAP[align];
	}

	static getJustifyClass(justify: GridMoleculeJustify): string {
		return JUSTIFY_MAP[justify];
	}

	static getColsClass(cols: number, responsive: boolean): string {
		if (!responsive) return `grid-cols-${cols}`;
		return `grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(cols, 4)} lg:grid-cols-${cols}`;
	}

	static getHostClass(
		cols: number,
		gap: GridMoleculeGap,
		alignItems: GridMoleculeAlign,
		justifyContent: GridMoleculeJustify,
		responsive: boolean,
		className?: string
	): string {
		return mergeClassNames(
			'grid',
			this.getColsClass(cols, responsive),
			this.getGapClass(gap),
			this.getAlignClass(alignItems),
			this.getJustifyClass(justifyContent),
			className
		);
	}
}
