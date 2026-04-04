import { cn } from '$stylist/layout/function/script/merge-class-names';

export class GridStyleManager {
	static getGridClass(extraClass = ''): string {
		return cn('grid', extraClass);
	}

	static getGridStyle(gridColor: string, opacity: number): string {
		return `--grid-color: ${gridColor}; --grid-opacity: ${opacity};`;
	}

	static getPatternStyle(gridSize: number): string {
		return `width: ${gridSize}px; height: ${gridSize}px;`;
	}
}

