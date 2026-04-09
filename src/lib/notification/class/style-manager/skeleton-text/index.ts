import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export class SkeletonTextStyleManager {
	static root(className = '') {
		return joinClassNames('skeleton-container', 'variant-text', className);
	}

	static style(width: string) {
		return `width: ${width};`;
	}
}
