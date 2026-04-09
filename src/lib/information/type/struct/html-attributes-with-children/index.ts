import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '../html-attributes-base/index';

export interface HtmlAttributesWithChildren<T extends HTMLElement = HTMLElement> extends HtmlAttributesBase<T> {
	children?: Snippet<[]>;
}
