import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class FormHeaderStyleManager {
	static root(className = ''): string {
		return mergeClassNames('c-form-header', className);
	}

	static backButton(className = ''): string {
		return mergeClassNames('c-form-header__back-btn', className);
	}

	static title(className = ''): string {
		return mergeClassNames('c-form-header__title', className);
	}

	static subtitle(className = ''): string {
		return mergeClassNames('c-form-header__subtitle', className);
	}

	static description(className = ''): string {
		return mergeClassNames('c-form-header__description', className);
	}

	static actions(className = ''): string {
		return mergeClassNames('c-form-header__actions', className);
	}
}
