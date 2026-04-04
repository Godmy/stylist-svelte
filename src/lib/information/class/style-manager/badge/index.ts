import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeView } from '$stylist/information/type/enum/code-view';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import { DEFAULT_BADGE } from '$stylist/information/const/struct/badge';
import { DEFAULT_CODE_BLOCK } from '$stylist/information/const/struct/code-block';

export class BadgeStyleManager {
	static getBadgeClasses(
		variant: TokenAppearance = DEFAULT_BADGE.variant,
		size: TokenSize = DEFAULT_BADGE.size,
		className = ''
	): string {
		return cn(
			'inline-flex items-center font-semibold rounded-full',
			this.getBadgeVariantClass(variant),
			this.getBadgeSizeClass(size),
			className
		);
	}

	static getBadgeVariantClass(variant: TokenAppearance = DEFAULT_BADGE.variant): string {
		const badgeVariantClassMap: Record<TokenAppearance, string> = {
			default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
			primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
			secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)]',
			success: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
			warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
			danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
			error: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
			info: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
			gray: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
			neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
			solid: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
			outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
			ghost: 'bg-transparent text-[var(--color-text-primary)]',
			link: 'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2',
			subtle: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]',
			dark: 'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)]',
			light: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]',
			elevated: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] shadow-sm',
			flat: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
		};

		return badgeVariantClassMap[variant];
	}

	static getBadgeSizeClass(size: TokenSize = DEFAULT_BADGE.size): string {
		return ({
			xs: 'text-[10px] px-1.5 py-0.5',
			sm: 'text-xs px-2 py-0.5',
			md: 'text-sm px-2.5 py-0.5',
			lg: 'text-base px-3 py-1',
			xl: 'text-lg px-3.5 py-1.5',
			'2xl': 'text-xl px-4 py-2',
			'1/4': 'text-[10px] px-1.5 py-0.5',
			'1/3': 'text-xs px-2 py-0.5',
			'2/5': 'text-xs px-2 py-0.5',
			'1/2': 'text-sm px-2.5 py-0.5',
			'3/5': 'text-sm px-2.5 py-0.5',
			'2/3': 'text-base px-3 py-1',
			'3/4': 'text-lg px-3.5 py-1.5',
			full: 'text-xl px-4 py-2'
		}[size] ?? 'text-sm px-2.5 py-0.5');
	}

	static getBadgeGroupContainerClasses(className = ''): string {
		return cn('flex flex-wrap items-center gap-2', className);
	}

	static getBadgeGroupOverflowClasses(className = ''): string {
		return cn(
			'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5',
			className
		);
	}

	static getCodeClasses(
		variant: TokenCodeView = DEFAULT_CODE_BLOCK.variant,
		size: TokenSize = DEFAULT_CODE_BLOCK.size,
		className = ''
	): string {
		return cn(
			'rounded-md overflow-x-auto font-mono',
			this.getCodeVariantClass(variant),
			this.getCodeSizeClass(size),
			className
		);
	}

	static getCodeVariantClass(variant: TokenCodeView = DEFAULT_CODE_BLOCK.variant): string {
		return {
			default: 'bg-[--color-neutral-900] text-[--color-text-inverse]',
			terminal: 'bg-[var(--color-neutral-900)] text-[--color-success-400] font-mono',
			diff: 'bg-[--color-background-secondary] text-[--color-text-primary]'
		}[variant];
	}

	static getCodeSizeClass(size: TokenSize = DEFAULT_CODE_BLOCK.size): string {
		return ({
			xs: 'text-[10px] p-1.5',
			sm: 'text-xs p-2',
			md: 'text-sm p-4',
			lg: 'text-base p-6',
			xl: 'text-lg p-8',
			'2xl': 'text-xl p-10',
			'1/4': 'text-[10px] p-1.5',
			'1/3': 'text-xs p-2',
			'2/5': 'text-xs p-2',
			'1/2': 'text-sm p-4',
			'3/5': 'text-sm p-4',
			'2/3': 'text-base p-6',
			'3/4': 'text-lg p-8',
			full: 'text-xl p-10'
		}[size] ?? 'text-sm p-4');
	}
}


