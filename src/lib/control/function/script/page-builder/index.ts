import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';

export function pageBuilderGetDefaultContent(type: TokenComponentType): string {
	switch (type) {
		case 'text':
			return 'Add your text here...';
		case 'heading':
			return 'Heading';
		case 'button':
			return 'Click me';
		default:
			return '';
	}
}
