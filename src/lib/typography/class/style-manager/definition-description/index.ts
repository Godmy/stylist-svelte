import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class DefinitionDescriptionStyleManager {
	static getDefinitionDescriptionClasses(className = ''): string {
		return mergeClassNames('definition-description', className);
	}
}

