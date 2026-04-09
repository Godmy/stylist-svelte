import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class AbbrStyleManager {
	static getAbbrClasses(className = ''): string {
		return mergeClassNames('abbr', className);
	}
}

