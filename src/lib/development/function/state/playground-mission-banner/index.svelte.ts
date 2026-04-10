import type { Props } from '$stylist/development/type/struct/playground-mission-banner';

export function createPlaygroundMissionBannerState(props: Props) {
  const badgeText = $derived(props.badgeText ?? 'Our Mission');
  const title = $derived(props.title ?? 'Building the Future of\nComponent Libraries');
  const description = $derived(props.description ?? "To create the world's largest library of visual components for Svelte 5 developers. Every release expands this AI-curated collection, enabling teams to build consistent user interfaces faster with components designed by collective intelligence.");
  const primaryLabel = $derived(props.primaryLabel ?? 'Explore Components');
  const primaryHref = $derived(props.primaryHref ?? '/components');
  const secondaryLabel = $derived(props.secondaryLabel ?? 'Try Playground');
  const secondaryHref = $derived(props.secondaryHref ?? '/playground');
  const className = $derived(props.class ?? '');

  const titleLines = $derived(title.split('\n'));

  return {
    get badgeText() { return badgeText; },
    get title() { return title; },
    get description() { return description; },
    get primaryLabel() { return primaryLabel; },
    get primaryHref() { return primaryHref; },
    get secondaryLabel() { return secondaryLabel; },
    get secondaryHref() { return secondaryHref; },
    get className() { return className; },
    get titleLines() { return titleLines; }
  };
}

export default createPlaygroundMissionBannerState;
