import { BASE_DEFINITION_DESCRIPTION_CLASSES } from './constant';

export class DefinitionDescriptionStyleManager {
  static getDefinitionDescriptionClasses(className: string | undefined): string {
    return [BASE_DEFINITION_DESCRIPTION_CLASSES, className].filter(Boolean).join(' ');
  }
}
