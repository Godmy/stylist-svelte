import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

export class SkeletonCircleStyleManager {
	static root(className = '') {
		return mergeClasses('skeleton-container', 'variant-circular', className);
	}

	static style(size: number) {
		return `width: ${size}px; height: ${size}px;`;
	}
}

