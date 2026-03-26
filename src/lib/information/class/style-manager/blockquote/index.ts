import { cn } from '$stylist/information/function/cn/index';

export class BlockquoteStyleManager {
	static getBlockquoteClasses(
		withBackground = false,
		withBorder = true,
		className = ''
	): string {
		return cn(
			'text-lg italic',
			withBackground ? 'bg-[--color-background-secondary] p-4 rounded' : '',
			withBorder ? 'border-l-4 border-[--color-primary-500] pl-4' : '',
			className
		);
	}
}


