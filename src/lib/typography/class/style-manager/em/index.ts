import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class EmStyleManager {
	static getEmClasses(className = ''): string {
		return mergeClassNames('em', 'italic', className);
	}
}

