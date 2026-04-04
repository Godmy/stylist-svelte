import { cn } from '$stylist/layout/function/script/merge-class-names';

export interface HoverableStyleManagerOptions {
	hoverEffect?: boolean;
	isHovered?: boolean;
	disabled?: boolean;
	class?: string;
}

export class HoverableStyleManager {
	private static readonly BASE = 'transition-all duration-150 ease-in-out';
	private static readonly HOVER_EFFECT = 'hover:opacity-80 hover:scale-105';
	private static readonly HOVERED = 'opacity-80 scale-105';
	private static readonly DISABLED = 'opacity-50 cursor-not-allowed';

	/**
	 * Базовые классы для hoverable элементов
	 */
	static getBaseClasses(className?: string): string {
		return cn(this.BASE, className);
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
			return cn(this.BASE, this.DISABLED, className);
		}

		if (isHovered) {
			return cn(this.BASE, this.HOVERED, className);
		}

		return cn(
			this.BASE,
			hoverEffect ? this.HOVER_EFFECT : '',
			className
		);
	}
}
