import {
	BLOCKQUOTE_CLASSES,
	DEFAULT_WITH_BACKGROUND,
	DEFAULT_WITH_BORDER
} from '../classes/blockquote';
import { cn } from '../utils/cn';

export class BlockquoteStyleManager {
	static getBlockquoteClasses(
		withBackground = DEFAULT_WITH_BACKGROUND,
		withBorder = DEFAULT_WITH_BORDER,
		className = ''
	): string {
		return cn(
			BLOCKQUOTE_CLASSES.base,
			withBackground ? BLOCKQUOTE_CLASSES.background : '',
			withBorder ? BLOCKQUOTE_CLASSES.border : '',
			className
		);
	}
}
