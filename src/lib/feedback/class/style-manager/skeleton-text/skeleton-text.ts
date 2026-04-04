import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

export class SkeletonTextStyleManager {
	static root(className = '') {
		return mergeClasses('skeleton-container', 'variant-text', className);
	}

	static style(width: string) {
		return `width: ${width};`;
	}
}

