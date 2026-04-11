import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';
import type { PageBuilderButtonAttributes } from '../../../type/struct/page-builder-button-attributes';
import type { PageBuilderHeadingAttributes } from '../../../type/struct/page-builder-heading-attributes';
import type { PageBuilderImageAttributes } from '../../../type/struct/page-builder-image-attributes';
import type { PageBuilderTextAttributes } from '../../../type/struct/page-builder-text-attributes';
import type { PageBuilderElement } from '../../../type/struct/page-builder-element';

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

export function pageBuilderRenderElement(element: PageBuilderElement): string {
	switch (element.type) {
		case 'text': {
			const attrs = element.attributes as PageBuilderTextAttributes | undefined;
			return `<p style="font-size:${attrs?.FONT_SIZE ?? 'var(--font-size-4)'};color:${attrs?.color ?? 'var(--color-text-primary)'};">${element.content ?? ''}</p>`;
		}
		case 'heading': {
			const attrs = element.attributes as PageBuilderHeadingAttributes | undefined;
			const level = Math.min(Math.max(attrs?.level ?? 2, 1), 6);
			return `<h${level} style="font-size:${attrs?.FONT_SIZE ?? 'var(--font-size-8)'};color:${attrs?.color ?? 'var(--color-text-primary)'};">${element.content ?? ''}</h${level}>`;
		}
		case 'button': {
			const attrs = element.attributes as PageBuilderButtonAttributes | undefined;
			return `<button style="background-color:${attrs?.backgroundColor ?? 'var(--color-primary-500)'};color:${attrs?.color ?? 'var(--color-text-inverse)'};padding:${attrs?.padding ?? 'var(--spacing-2) var(--spacing-4)'};border:none;border-radius: var(--border-radius-base);cursor:pointer;">${element.content ?? ''}</button>`;
		}
		case 'divider':
			return '<hr style="border:0;border-top:1px solid var(--color-border-primary);margin: var(--spacing-4) 0;" />';
		case 'image': {
			const attrs = element.attributes as PageBuilderImageAttributes | undefined;
			return `<img src="${attrs?.src ?? ''}" alt="${attrs?.alt ?? 'Image'}" style="width:${attrs?.width ?? '100%'};height:${attrs?.height ?? 'auto'};" />`;
		}
		default:
			return `<div>${element.content ?? ''}</div>`;
	}
}
