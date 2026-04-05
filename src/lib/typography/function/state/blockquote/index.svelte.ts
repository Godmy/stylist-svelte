/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { BlockquoteRecipe } from '$stylist/typography/interface/recipe/blockquote';
import { BlockquoteStyleManager } from '$stylist/typography/class/style-manager/blockquote';

export function createBlockquoteState(props: BlockquoteRecipe) {
  const cite = $derived(props.cite);
  const footerPrefix = $derived(props.footerPrefix ?? '');
  const classes = $derived(BlockquoteStyleManager.getBlockquoteClasses(props.class));
  const footerClasses = $derived(BlockquoteStyleManager.getFooterClasses());

  const restProps = $derived.by(() => {
    const { class: _class, cite: _cite, children: _children, footerPrefix: _footerPrefix, ...rest } = props;
    return rest;
  });

  return {
    get cite() { return cite; },
    get footerPrefix() { return footerPrefix; },
    get classes() { return classes; },
    get footerClasses() { return footerClasses; },
    get restProps() { return restProps; }
  };
}

export default createBlockquoteState;
