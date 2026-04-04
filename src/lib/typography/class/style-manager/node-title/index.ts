import { NodeTitleStyleManager as BaseNodeTitleStyleManager } from '$stylist/science/class/style-manager/node-title';
import type { NodeTitleVariant } from '$stylist/information/interface/recipe/node-title';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class StyleManagerNodeTitle {
	static root(
		variant: NodeTitleVariant,
		size: TokenSize,
		selected: boolean,
		className?: string
	): string {
		return `${BaseNodeTitleStyleManager.getTitleClasses(variant, size, selected)} ${className ?? ''}`.trim();
	}

	static styles(color?: string): string {
		return BaseNodeTitleStyleManager.getTitleStyles(color);
	}

	static variantColor(variant: NodeTitleVariant): string {
		return BaseNodeTitleStyleManager.getVariantColor(variant);
	}

	static input(): string {
		return 'node-title__input';
	}
}
