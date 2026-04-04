import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

const BUTTON_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]',
	primary:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-primary-700)]',
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
	solid:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-primary-700)]',
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
		'border border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-200)]',
	elevated:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-secondary)] shadow-sm hover:shadow-md',
	flat:
		'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-background-primary)]'
};

const BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-6 px-2 text-xs rounded',
	sm: 'h-8 px-3 text-sm rounded-md',
	md: 'h-9 px-4 text-sm rounded-md',
	lg: 'h-11 px-6 text-base rounded-lg',
	xl: 'h-12 px-7 text-lg rounded-xl',
	'2xl': 'h-14 px-8 text-xl rounded-xl',
	'1/4': 'h-6 px-2 text-xs rounded',
	'1/3': 'h-8 px-3 text-sm rounded-md',
	'2/5': 'h-8 px-3 text-sm rounded-md',
	'1/2': 'h-9 px-4 text-sm rounded-md',
	'3/5': 'h-9 px-4 text-sm rounded-md',
	'2/3': 'h-11 px-6 text-base rounded-lg',
	'3/4': 'h-12 px-7 text-lg rounded-xl',
	full: 'h-14 px-8 text-xl rounded-xl w-full'
};

const BUTTON_LOADER_CLASSES = 'absolute inset-0 flex items-center justify-center';

export class ButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getButtonVariantClass(variant: TokenAppearance = 'default'): string {
		return BUTTON_VARIANT_CLASSES[variant] ?? BUTTON_VARIANT_CLASSES.default;
	}

	static getButtonSizeClass(size: TokenSize = 'md'): string {
		return BUTTON_SIZE_CLASSES[size] ?? BUTTON_SIZE_CLASSES.md;
	}

	static getButtonLoaderClasses(): string {
		return BUTTON_LOADER_CLASSES;
	}

	static getButtonClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		loading = false,
		block = false,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			'relative',
			this.getButtonVariantClass(variant),
			this.getButtonSizeClass(size),
			disabled || loading ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			block ? 'w-full' : '',
			loading ? 'text-transparent' : '',
			className
		]);
	}
}
