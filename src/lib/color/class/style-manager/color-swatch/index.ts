import { DataDisplayStyleManager } from '$stylist/typography/class/style-manager/data-display';

export class StyleManagerColorSwatch {
	static root(color: string, size: number, className?: string): string {
		return DataDisplayStyleManager.getColorSwatchClasses(color, size, className);
	}
}
