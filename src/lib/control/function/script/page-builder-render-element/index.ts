import type { PageBuilderButtonAttributes } from '../../../type/struct/page-builder-button-attributes';
import type { PageBuilderElement } from '../../../type/struct/page-builder-element';
import type { PageBuilderHeadingAttributes } from '../../../type/struct/page-builder-heading-attributes';
import type { PageBuilderImageAttributes } from '../../../type/struct/page-builder-image-attributes';
import type { PageBuilderTextAttributes } from '../../../type/struct/page-builder-text-attributes';

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
