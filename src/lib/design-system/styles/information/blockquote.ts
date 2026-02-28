import { cn } from '../../utils/cn/index';

const DEFAULT_WITH_BACKGROUND = false;
const DEFAULT_WITH_BORDER = true;

export class BlockquoteStyleManager {
	static getBlockquoteClasses(
		withBackground = DEFAULT_WITH_BACKGROUND,
		withBorder = DEFAULT_WITH_BORDER,
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
