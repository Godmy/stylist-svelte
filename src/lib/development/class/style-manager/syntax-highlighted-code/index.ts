import type { TokenCodeView } from '$stylist/development/type/enum/code-view';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class StyleManagerSyntaxHighlightedCode {
	static container(classes: string): string {
		return classes.trim();
	}

	static getContainerClasses(
		variant: TokenCodeView = 'default',
		size: TokenSize = 'md',
		className = ''
	): string {
		return joinClassNames(
			'rounded-md',
			this.getVariantClasses(variant),
			this.getSizeClasses(size),
			className
		);
	}

	static getVariantClasses(variant: TokenCodeView = 'default'): string {
		return {
			default: 'bg-[--color-neutral-900] text-[--color-text-inverse]',
			terminal: 'bg-[var(--color-neutral-900)] text-[--color-success-400] font-mono',
			diff: 'bg-[--color-background-secondary] text-[--color-text-primary]'
		}[variant];
	}

	static getSizeClasses(size: TokenSize = 'md'): string {
		return (
			{
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
			}[size] ?? 'text-sm p-4'
		);
	}
}
