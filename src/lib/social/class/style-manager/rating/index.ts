import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class RatingStyleManager {
	static getRootClasses(className?: string): string {
		return mergeClassNames('c-rating', className);
	}

	static getStarButtonClasses(
		isDisabled: boolean,
		isReadonly: boolean,
		isFilled: boolean,
		_currentRating: number,
		_maxRating: number
	): string {
		return mergeClassNames(
			'c-rating__star-btn',
			isFilled && 'c-rating__star-btn--filled',
			isDisabled && 'c-rating__star-btn--disabled',
			(isReadonly || isDisabled) && 'c-rating__star-btn--readonly'
		);
	}

	static getStarIconClasses(isFilled: boolean, size: TokenSize): string {
		return mergeClassNames(
			'c-rating__star-icon',
			`c-rating__star-icon--${size}`,
			isFilled && 'c-rating__star-icon--filled'
		);
	}

	static getRatingTextClasses(isDisabled: boolean): string {
		return mergeClassNames('c-rating__text', isDisabled && 'c-rating__text--disabled');
	}
}
