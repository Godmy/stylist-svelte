import { BASE_DEFINITION_TERM_CLASSES } from './constant';

export class DefinitionTermStyleManager {
  static getDefinitionTermClasses(className: string | undefined): string {
    return [BASE_DEFINITION_TERM_CLASSES, className].filter(Boolean).join(' ');
  }
}
