import type { PlaygroundLiveCodeSectionProps } from '$stylist/playground/type/struct/playground-live-code-section-props';
export function createPlaygroundLiveCodeSectionState(props: PlaygroundLiveCodeSectionProps) {
  const badgeText = $derived(props.badgeText ?? 'Live Preview');
  const title = $derived(props.title ?? 'See It In Action');
  const description = $derived(props.description ?? 'Every component comes with ready-to-use code');
  const code = $derived(props.code ?? '');
  const ctaText = $derived(props.ctaText ?? 'Try in Playground');
  const ctaHref = $derived(props.ctaHref ?? '/playground');
  const className = $derived(props.class ?? '');
  const children = $derived(props.children);

  return {
    get badgeText() { return badgeText; },
    get title() { return title; },
    get description() { return description; },
    get code() { return code; },
    get ctaText() { return ctaText; },
    get ctaHref() { return ctaHref; },
    get className() { return className; },
    get children() { return children; }
  };
}

export default createPlaygroundLiveCodeSectionState;
