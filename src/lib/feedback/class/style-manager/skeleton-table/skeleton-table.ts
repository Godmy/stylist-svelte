import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

export class SkeletonTableStyleManager {
	static container(className = '') {
		return mergeClasses('p-4', className);
	}

	static table() {
		return 'w-full border-collapse';
	}

	static header() {
		return 'border-b border-[--color-border-secondary]';
	}

	static headerCell() {
		return 'py-3 px-4 text-left';
	}

	static dataCell() {
		return 'py-3 px-4 border-b border-[--color-border-muted]';
	}

	static bar(width: string) {
		return `width: ${width}`;
	}
}

