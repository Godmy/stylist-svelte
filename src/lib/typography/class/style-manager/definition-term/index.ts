import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class DefinitionTermStyleManager {
	static getDefinitionTermClasses(className = ''): string {
		return mergeClassNames('definition-term', 'font-semibold', className);
	}
}

