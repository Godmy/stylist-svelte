import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { GRID_MOLECULE_GAP_MAP as GAP_MAP } from '$stylist/layout/const/map/grid-molecule-gap-map';
import { GRID_MOLECULE_ALIGN_MAP as ALIGN_MAP } from '$stylist/layout/const/map/grid-molecule-align-map';
import { GRID_MOLECULE_JUSTIFY_MAP as JUSTIFY_MAP } from '$stylist/layout/const/map/grid-molecule-justify-map';
import type { GridMoleculeGap } from '$stylist/layout/type/enum/grid-molecule-gap';
import type { GridMoleculeAlign } from '$stylist/layout/type/enum/grid-molecule-align';
import type { GridMoleculeJustify } from '$stylist/layout/type/enum/grid-molecule-justify';

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
