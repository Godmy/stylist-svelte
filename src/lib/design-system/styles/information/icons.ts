import {
	TOKEN_ICON_CHEVRON_DEFAULTS,
	TOKEN_ICON_CIRCLE_DEFAULTS,
	TOKEN_ICON_DIRECTION_ROTATION_CLASSES,
	TOKEN_ICON_SIZE_CLASSES,
	TOKEN_ICON_VARIANT_CLASSES,
	TOKEN_ICON_WRAPPER_COLOR_CLASSES,
	TOKEN_ICON_WRAPPER_DEFAULTS,
	TOKEN_ICON_WRAPPER_PADDING_CLASSES,
	TOKEN_ICON_WRAPPER_SHAPE_CLASSES
} from '../../classes/information/icons';
import { cn } from '../../utils/cn/index';

export class IconStyleManager {
	static getIconClasses(
		size: keyof typeof TOKEN_ICON_SIZE_CLASSES = 'md',
		className = ''
	): string {
		return cn(TOKEN_ICON_SIZE_CLASSES[size], className);
	}

	static getIconChevronClasses(options: {
		isOpen?: boolean;
		size?: keyof typeof TOKEN_ICON_SIZE_CLASSES;
		direction?: keyof typeof TOKEN_ICON_DIRECTION_ROTATION_CLASSES;
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? TOKEN_ICON_CHEVRON_DEFAULTS.size;
		const direction = options.direction ?? (options.isOpen ? 'up' : 'down');
		const variant = options.variant ?? 'default';
		const disabled = options.disabled ?? false;

		return cn(
			TOKEN_ICON_SIZE_CLASSES[size],
			TOKEN_ICON_DIRECTION_ROTATION_CLASSES[direction],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}

	static getIconCircleClasses(options: {
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		size?: keyof typeof TOKEN_ICON_SIZE_CLASSES;
		filled?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		const variant = options.variant ?? TOKEN_ICON_CIRCLE_DEFAULTS.variant;
		const size = options.size ?? TOKEN_ICON_CIRCLE_DEFAULTS.size;

		return cn(
			TOKEN_ICON_VARIANT_CLASSES[variant],
			TOKEN_ICON_SIZE_CLASSES[size],
			options.filled ? 'fill-current' : '',
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}

	static getIconWrapperClasses(options: {
		size?: keyof typeof TOKEN_ICON_WRAPPER_PADDING_CLASSES;
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		shape?: keyof typeof TOKEN_ICON_WRAPPER_SHAPE_CLASSES;
		color?: keyof typeof TOKEN_ICON_WRAPPER_COLOR_CLASSES;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? TOKEN_ICON_WRAPPER_DEFAULTS.size;
		const variant = options.variant ?? TOKEN_ICON_WRAPPER_DEFAULTS.variant;
		const shape = options.shape ?? TOKEN_ICON_WRAPPER_DEFAULTS.shape;
		const color = options.color ?? TOKEN_ICON_WRAPPER_DEFAULTS.color;

		return cn(
			'inline-flex items-center justify-center',
			TOKEN_ICON_WRAPPER_PADDING_CLASSES[size],
			TOKEN_ICON_WRAPPER_SHAPE_CLASSES[shape],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			TOKEN_ICON_WRAPPER_COLOR_CLASSES[color],
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}
}
