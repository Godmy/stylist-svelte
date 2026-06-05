import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenPin } from '$stylist/geo/type/enum/pin';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class MapMarkerStyleManager {
	static getBaseClasses(selected: boolean, hostClass: string): string {
		return mergeClassNames('c-map-marker', selected && 'c-map-marker--selected', hostClass);
	}

	static getMarkerContainerClasses(iconClass: string): string {
		return mergeClassNames('c-map-marker__container', iconClass);
	}

	static getPinStyleClasses(
		size: TokenSize,
		_colorClass: string,
		selected: boolean,
		pinStyle: TokenShape
	): string {
		return mergeClassNames(
			'c-map-marker__pin',
			`c-map-marker__pin--${size}`,
			`c-map-marker__pin--${pinStyle}`,
			selected && 'c-map-marker__pin--selected'
		);
	}

	static getDistanceLabelClasses(): string {
		return 'c-map-marker__distance';
	}

	static getPopupClasses(popupClass: string): string {
		return mergeClassNames('c-map-marker__popup', popupClass);
	}

	static getTitleClasses(titleClass: string): string {
		return mergeClassNames('c-map-marker__popup-title', titleClass);
	}

	static getDescriptionClasses(): string {
		return 'c-map-marker__popup-description';
	}

	static getRatingContainerClasses(): string {
		return 'c-map-marker__rating';
	}

	static getStarClasses(isFilled: boolean, _isHalf: boolean = false): string {
		return mergeClassNames('c-map-marker__star', isFilled && 'c-map-marker__star--filled');
	}

	static getCloseButtonClasses(): string {
		return 'c-map-marker__close';
	}

	static getContactInfoContainerClasses(): string {
		return 'c-map-marker__contact';
	}

	static getContactItemClasses(): string {
		return 'c-map-marker__contact-item';
	}

	static getContactLinkClasses(): string {
		return 'c-map-marker__contact-link';
	}

	static getCustomContentClasses(contentClass: string): string {
		return mergeClassNames('c-map-marker__custom', contentClass);
	}

	static getActionButtonsContainerClasses(): string {
		return 'c-map-marker__actions';
	}

	static getColorClass(color: string, type: TokenPin): string {
		if (color) return color;
		const typeColors: Record<TokenPin, string> = {
			business: 'var(--color-success-500)',
			person: 'var(--color-purple-500, var(--color-primary-500))',
			place: 'var(--color-warning-500)'
		};
		return typeColors[type] ?? 'var(--color-primary-500)';
	}

	static getFlagClasses(_colorClass: string, size: TokenSize): string {
		return mergeClassNames('c-map-marker__flag-pole', `c-map-marker__flag-pole--${size}`);
	}

	static getFlagTopClasses(_colorClass: string, size: TokenSize): string {
		return mergeClassNames('c-map-marker__flag-top', `c-map-marker__flag-top--${size}`);
	}
}
