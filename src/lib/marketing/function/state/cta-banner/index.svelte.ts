import type { CtaBannerProps, CtaBannerButton } from '$stylist/marketing/type/struct/cta-banner';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import { CtaBannerStyleManager } from '$stylist/marketing/class/style-manager/cta-banner';

export function getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
  return CtaBannerStyleManager.getButtonClasses(variant);
}

export function handleButtonClick(onClick: () => void): void {
  onClick();
}

export function createCtaBannerState(props: CtaBannerProps) {
  const title = $derived(props.title);
  const description = $derived(props.description);
  const buttons = $derived(props.buttons ?? []);
  const backgroundVariant = $derived(props.backgroundVariant ?? 'gradient');
  const backgroundImage = $derived(props.backgroundImage);
  const className = $derived(props.class ?? '');
  const containerClasses = $derived(`${CtaBannerStyleManager.getContainerClasses()} ${className}`.trim());
  const backgroundClasses = $derived(CtaBannerStyleManager.getBackgroundClasses(backgroundVariant));
  const contentClasses = $derived(CtaBannerStyleManager.getContentClasses());
  const titleClasses = $derived(CtaBannerStyleManager.getTitleClasses());
  const descriptionClasses = $derived(CtaBannerStyleManager.getDescriptionClasses());
  const buttonsContainerClasses = $derived(CtaBannerStyleManager.getButtonsContainerClasses());

  const restProps = $derived.by(() => {
    const { class: _class, ...rest } = props;
    return rest;
  });

  return {
    get title() { return title; },
    get description() { return description; },
    get buttons() { return buttons; },
    get backgroundVariant() { return backgroundVariant; },
    get backgroundImage() { return backgroundImage; },
    get containerClasses() { return containerClasses; },
    get backgroundClasses() { return backgroundClasses; },
    get contentClasses() { return contentClasses; },
    get titleClasses() { return titleClasses; },
    get descriptionClasses() { return descriptionClasses; },
    get buttonsContainerClasses() { return buttonsContainerClasses; },
    get restProps() { return restProps; }
  };
}
