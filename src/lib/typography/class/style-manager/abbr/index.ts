import { cn } from '$stylist/layout/function/script/merge-class-names';

export class AbbrStyleManager {
	static getAbbrClasses(className = ''): string {
		return cn('abbr', className);
	}
}

