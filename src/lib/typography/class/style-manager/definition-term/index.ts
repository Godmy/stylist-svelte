import { cn } from '$stylist/layout/function/script/merge-class-names';

export class DefinitionTermStyleManager {
	static getDefinitionTermClasses(className = ''): string {
		return cn('definition-term', 'font-semibold', className);
	}
}

