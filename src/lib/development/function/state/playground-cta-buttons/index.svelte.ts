import type { PlaygroundCtaButtonsProps } from '$stylist/development/type/struct/playground-cta-buttons-props';
export function createPlaygroundCtaButtonsState(props: PlaygroundCtaButtonsProps) {
  const totalComponents = $derived(props.totalComponents);
  const componentsHref = $derived(props.componentsHref ?? '/components');
  const playgroundHref = $derived(props.playgroundHref ?? '/playground');
  const componentsTitle = $derived(props.componentsTitle ?? 'Browse Components');
  const componentsDescriptionPrefix = $derived(props.componentsDescriptionPrefix ?? 'Explore');
  const playgroundTitle = $derived(props.playgroundTitle ?? 'Interactive Playground');
  const playgroundDescription = $derived(props.playgroundDescription ?? 'Test components with live controls and code generation');
  const className = $derived(props.class ?? '');

  return {
    get totalComponents() { return totalComponents; },
    get componentsHref() { return componentsHref; },
    get playgroundHref() { return playgroundHref; },
    get componentsTitle() { return componentsTitle; },
    get componentsDescriptionPrefix() { return componentsDescriptionPrefix; },
    get playgroundTitle() { return playgroundTitle; },
    get playgroundDescription() { return playgroundDescription; },
    get className() { return className; }
  };
}

export default createPlaygroundCtaButtonsState;
