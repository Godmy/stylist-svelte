import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '../html-attributes-base/index';

export interface HtmlAttributesWithContent<T extends HTMLElement = HTMLElement> extends HtmlAttributesBase<T> {
	content?: Snippet<[]>;
}
