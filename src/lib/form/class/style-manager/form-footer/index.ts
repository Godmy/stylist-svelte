import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class FormFooterStyleManager {
	static root(className = ''): string {
		return mergeClassNames('c-form-footer', className);
	}

	static secondaryButton(disabled: boolean, className = ''): string {
		return mergeClassNames(
			'c-form-footer__secondary-btn',
			disabled && 'c-form-footer__btn--disabled',
			className
		);
	}

	static primaryButton(disabled: boolean, className = ''): string {
		return mergeClassNames(
			'c-form-footer__primary-btn',
			disabled && 'c-form-footer__btn--disabled',
			className
		);
	}
}
