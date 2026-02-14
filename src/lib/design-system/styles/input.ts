import {
	INPUT_FIELD_CONTAINER_CLASS,
	INPUT_FIELD_HELPER_TEXT_CLASS,
	INPUT_GROUP_BUTTON_CLASS,
	INPUT_GROUP_CONTAINER_CLASS,
	INPUT_GROUP_INPUT_CLASS
} from '../classes/input';
import { cn } from '../utils/cn';

export class InputStyleManager {
	static getInputFieldContainerClass(className = ''): string {
		return cn(INPUT_FIELD_CONTAINER_CLASS, className);
	}

	static getInputFieldHelperTextClass(className = ''): string {
		return cn(INPUT_FIELD_HELPER_TEXT_CLASS, className);
	}

	static getInputGroupContainerClass(className = ''): string {
		return cn(INPUT_GROUP_CONTAINER_CLASS, className);
	}

	static getInputGroupInputClass(className = ''): string {
		return cn(INPUT_GROUP_INPUT_CLASS, className);
	}

	static getInputGroupButtonClass(className = ''): string {
		return cn(INPUT_GROUP_BUTTON_CLASS, className);
	}

	static getInputFieldContainerClasses(): string {
		return this.getInputFieldContainerClass();
	}

	static getInputFieldHelperTextClasses(): string {
		return this.getInputFieldHelperTextClass();
	}

	static getInputGroupContainerClasses(): string {
		return this.getInputGroupContainerClass();
	}

	static getInputGroupInputClasses(className = ''): string {
		return this.getInputGroupInputClass(className);
	}

	static getInputGroupButtonClasses(): string {
		return this.getInputGroupButtonClass();
	}
}
