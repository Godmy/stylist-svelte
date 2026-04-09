import type { TokenSize } from '$stylist/layout/type/enum/size';
import { TOOLTIP_POSITION_CLASSES } from '$stylist/control/const/record/tooltip-position-classes';
import { TOOLTIP_SIZE_CLASSES } from '$stylist/control/const/record/tooltip-size-classes';

export class TooltipStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getTooltipPositionClass(position: string = 'top'): string {
		return TOOLTIP_POSITION_CLASSES[position] ?? TOOLTIP_POSITION_CLASSES.top;
	}

	static getTooltipClasses(
		position: string = 'top',
		size: TokenSize = 'sm',
		className?: string
	): string {
		return this.join([
			'absolute z-50 rounded-md bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)] shadow-lg',
			'pointer-events-none opacity-0 data-[state=visible]:opacity-100 transition-opacity',
			this.getTooltipPositionClass(position),
			TOOLTIP_SIZE_CLASSES[size] ?? TOOLTIP_SIZE_CLASSES.sm,
			className
		]);
	}
}
