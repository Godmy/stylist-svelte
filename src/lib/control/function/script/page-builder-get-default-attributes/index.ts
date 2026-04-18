import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';
import type { PageBuilderButtonAttributes } from '../../../type/struct/page-builder-button-attributes';
import type { PageBuilderElement } from '../../../type/struct/page-builder-element';
import type { PageBuilderHeadingAttributes } from '../../../type/struct/page-builder-heading-attributes';
import type { PageBuilderImageAttributes } from '../../../type/struct/page-builder-image-attributes';
import type { PageBuilderTextAttributes } from '../../../type/struct/page-builder-text-attributes';

export function pageBuilderGetDefaultAttributes(type: TokenComponentType): PageBuilderElement['attributes'] {
	switch (type) {
		case 'text':
			return { FONT_SIZE: '16px', color: 'var(--color-text-primary)' } as PageBuilderTextAttributes;
		case 'heading':
			return { level: 2, FONT_SIZE: '32px', color: 'var(--color-text-primary)' } as PageBuilderHeadingAttributes;
		case 'button':
			return {
				backgroundColor: 'var(--color-primary-500)',
				color: 'var(--color-text-inverse)',
				padding: 'var(--spacing-2) var(--spacing-4)'
			} as PageBuilderButtonAttributes;
		case 'image':
			return { src: '', alt: 'Image', width: '100%', height: 'auto' } as PageBuilderImageAttributes;
		case 'divider':
			return { color: 'var(--color-border-primary)' } as PageBuilderElement['attributes'];
		case 'container':
			return {
				backgroundColor: 'var(--color-background-primary)',
				padding: 'var(--spacing-4)',
				margin: 'var(--spacing-2)',
				BORDER_RADIUS: 'var(--border-radius-base)'
			} as PageBuilderElement['attributes'];
		default:
			return {};
	}
}
