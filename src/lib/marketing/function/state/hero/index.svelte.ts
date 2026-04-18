import type { SlotHero as IHeroProps } from '$stylist/marketing/interface/slot/hero';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { HeroStyleManager } from '$stylist/marketing/class/style-manager/hero';

export function createHeroState(props: IHeroProps) {
  const hostClass = $derived(props.class == null ? undefined : String(props.class));
  const title = $derived(props.title);
  const subtitle = $derived(props.subtitle);
  const stats = $derived(props.stats ?? []);
  const primaryCTA = $derived(props.primaryCTA);
  const secondaryCTA = $derived(props.secondaryCTA);
  const backgroundVariant = $derived(props.backgroundVariant ?? 'gradient');
  const backgroundImage = $derived(props.backgroundImage);
  const height = $derived(props.height ?? 'full');
  const children = $derived(props.children);

  const containerClasses = $derived(HeroStyleManager.getContainerClasses(height as TokenSize, hostClass));
  const backgroundClasses = $derived(HeroStyleManager.getBackgroundClasses(backgroundVariant as TokenBackground));
  const contentClasses = $derived(HeroStyleManager.getContentClasses());
  const titleClasses = $derived(HeroStyleManager.getTitleClasses());
  const subtitleClasses = $derived(HeroStyleManager.getSubtitleClasses());
  const statsContainerClasses = $derived(HeroStyleManager.getStatsContainerClasses());
  const statItemClasses = $derived(HeroStyleManager.getStatItemClasses());
  const statValueClasses = $derived(HeroStyleManager.getStatValueClasses());
  const statLabelClasses = $derived(HeroStyleManager.getStatLabelClasses());
  const ctaContainerClasses = $derived(HeroStyleManager.getCTAContainerClasses());
  const primaryCTAButtonClasses = $derived(HeroStyleManager.getCTAButtonClasses(true));
  const secondaryCTAButtonClasses = $derived(HeroStyleManager.getCTAButtonClasses(false));

  function handlePrimaryClick(): void {
    if (primaryCTA?.onClick) {
      primaryCTA.onClick();
    }
  }

  function handleSecondaryClick(): void {
    if (secondaryCTA?.onClick) {
      secondaryCTA.onClick();
    }
  }

  const restProps = $derived.by(() => {
    const { class: _class, ...rest } = props;
    return rest;
  });

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get stats() { return stats; },
    get primaryCTA() { return primaryCTA; },
    get secondaryCTA() { return secondaryCTA; },
    get backgroundVariant() { return backgroundVariant; },
    get backgroundImage() { return backgroundImage; },
    get height() { return height; },
    get children() { return children; },
    get containerClasses() { return containerClasses; },
    get backgroundClasses() { return backgroundClasses; },
    get contentClasses() { return contentClasses; },
    get titleClasses() { return titleClasses; },
    get subtitleClasses() { return subtitleClasses; },
    get statsContainerClasses() { return statsContainerClasses; },
    get statItemClasses() { return statItemClasses; },
    get statValueClasses() { return statValueClasses; },
    get statLabelClasses() { return statLabelClasses; },
    get ctaContainerClasses() { return ctaContainerClasses; },
    get primaryCTAButtonClasses() { return primaryCTAButtonClasses; },
    get secondaryCTAButtonClasses() { return secondaryCTAButtonClasses; },
    get restProps() { return restProps; },
    handlePrimaryClick,
    handleSecondaryClick
  };
}

export default createHeroState;
