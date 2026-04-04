import { cn } from '$stylist/layout/function/script/merge-class-names';

export class EmStyleManager {
	static getEmClasses(className = ''): string {
		return cn('em', 'italic', className);
	}
}

