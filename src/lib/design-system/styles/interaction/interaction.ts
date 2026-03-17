import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import { BASE_CLASSES } from '$stylist/design-system/runtime/foundation';
import { cn } from '$stylist/design-system/utils/cn/index';

const INTERACTIVE_BASE_CLASS = BASE_CLASSES.interactive;

const PRIMARY_SOLID_CLASSES =
	'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
	'border border-transparent hover:bg-[var(--color-primary-700)]';

const VARIANT_CLASSES: Record<DefaultVariants, string> = {
	default:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]',
	primary: PRIMARY_SOLID_CLASSES,
	secondary:
		'bg-[var(--color-secondary-600)] text-[var(--color-text-inverse)] ' +
		'border border-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-500)]',
	success:
		'bg-[var(--color-success-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-success-700)]',
	warning:
		'bg-[var(--color-warning-500)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-warning-600)]',
	danger:
		'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-danger-700)]',
	error:
		'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-danger-700)]',
	info:
		'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-primary-600)]',
	solid: PRIMARY_SOLID_CLASSES,
	outline:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-400)] hover:bg-[var(--color-background-secondary)] hover:border-[var(--color-neutral-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-background-secondary)]',
	link:
		'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2 ' +
		'border border-transparent hover:text-[var(--color-primary-700)]',
	subtle:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-neutral-200)]',
	neutral:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-200)]',
	gray:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-200)]',
	dark:
		'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)] ' +
		'border border-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-700)]',
	light:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-200)]'
};

const INTERACTIVE_VARIANTS = Object.keys(VARIANT_CLASSES) as (keyof typeof VARIANT_CLASSES)[];

export class InteractionStyleManager {
	static getInteractiveBaseClasses(className = ''): string {
		return cn(INTERACTIVE_BASE_CLASS, className);
	}

	static getInteractiveBaseClass(): string {
		return INTERACTIVE_BASE_CLASS;
	}

	static getVariantClasses(
		variant: keyof typeof VARIANT_CLASSES = 'default',
		className = ''
	): string {
		return cn(VARIANT_CLASSES[variant], className);
	}

	static getInteractiveClasses(options: {
		variant?: keyof typeof VARIANT_CLASSES;
		className?: string;
	} = {}): string {
		return cn(
			INTERACTIVE_BASE_CLASS,
			VARIANT_CLASSES[options.variant ?? 'default'],
			options.className ?? ''
		);
	}

	static getInteractiveVariants(): readonly (keyof typeof VARIANT_CLASSES)[] {
		return INTERACTIVE_VARIANTS;
	}

	static getVariantClassMap(): typeof VARIANT_CLASSES {
		return VARIANT_CLASSES;
	}

	static getPrimarySolidClasses(): string {
		return PRIMARY_SOLID_CLASSES;
	}
}
