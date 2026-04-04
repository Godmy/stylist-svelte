import { cn } from '$stylist/layout/function/script/merge-class-names';

export class DefinitionDescriptionStyleManager {
	static getDefinitionDescriptionClasses(className = ''): string {
		return cn('definition-description', className);
	}
}

