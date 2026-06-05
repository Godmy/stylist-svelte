/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { BlockquoteRecipe } from '$stylist/typography/interface/recipe/blockquote';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createBlockquoteState(props: BlockquoteRecipe) {
	const citeUrl = $derived.by(() => {
		if (props.citeUrl) {
			return props.citeUrl;
		}

		if (typeof props.cite === 'string' && /^(https?:)?\/\//.test(props.cite)) {
			return props.cite;
		}

		return undefined;
	});
	const sourceLabel = $derived(props.sourceLabel ?? props.cite);
	const footerPrefix = $derived(props.footerPrefix ?? '');
	const withBorder = $derived(props.withBorder ?? true);
	const withBackground = $derived(props.withBackground ?? false);
	const classes = $derived(
		mergeClassNames(
			'c-typography-blockquote',
			withBorder && 'c-typography-blockquote--bordered',
			withBackground && 'c-typography-blockquote--surface',
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const footerClasses = $derived('c-typography-blockquote__footer');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			cite: _cite,
			citeUrl: _citeUrl,
			sourceLabel: _sourceLabel,
			children: _children,
			footerPrefix: _footerPrefix,
			withBorder: _withBorder,
			withBackground: _withBackground,
			...rest
		} = props;
		return rest;
	});

	return {
		get citeUrl() {
			return citeUrl;
		},
		get sourceLabel() {
			return sourceLabel;
		},
		get footerPrefix() {
			return footerPrefix;
		},
		get classes() {
			return classes;
		},
		get footerClasses() {
			return footerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createBlockquoteState;
