import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerColorSwatch {
	static root(color: string, size: number, className?: string): string {
		return mergeClassNames(
			'inline-block rounded border border-[--color-border-secondary]',
			className,
			`bg-[${color}]`,
			`w-[${size}px]`,
			`h-[${size}px]`
		);
	}
}
