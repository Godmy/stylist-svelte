import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

export class SkeletonRectangleStyleManager {
	static root(className = '') {
		return mergeClasses('skeleton-container', 'variant-rectangular', className);
	}

	static style(width: number, height: number) {
		return `width: ${width}px; height: ${height}px;`;
	}
}

