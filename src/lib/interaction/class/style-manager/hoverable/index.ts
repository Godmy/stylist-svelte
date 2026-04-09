import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { HoverableStyleManagerOptions } from '$stylist/interaction/class/style-manager/hoverable-style-manager-options';

export class HoverableStyleManager {
	private static readonly BASE = 'transition-all duration-150 ease-in-out';
	private static readonly HOVER_EFFECT = 'hover:opacity-80 hover:scale-105';
	private static readonly HOVERED = 'opacity-80 scale-105';
	private static readonly DISABLED = 'opacity-50 cursor-not-allowed';

	/**
	 * Базовые классы для hoverable элементов
	 */
	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	/**
	 * Классы для эффекта наведения
	 */
	static getHoverEffectClasses(): string {
		return this.HOVER_EFFECT;
	}

	/**
	 * Классы для активного hover состояния
	 */
	static getHoveredClasses(): string {
		return this.HOVERED;
	}

	/**
	 * Полные классы для hoverable компонента
	 */
	static getClasses(options: HoverableStyleManagerOptions = {}): string {
		const {
			hoverEffect = true,
			isHovered = false,
			disabled = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames(this.BASE, this.DISABLED, className);
		}

		if (isHovered) {
			return mergeClassNames(this.BASE, this.HOVERED, className);
		}

		return mergeClassNames(
			this.BASE,
			hoverEffect ? this.HOVER_EFFECT : '',
			className
		);
	}
}
