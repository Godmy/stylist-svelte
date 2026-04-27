import type { PlaygroundHeroAIModel } from '$stylist/playground/type/struct/playground-hero-ai-model';

export type PlaygroundHeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  badgeLabel?: string;
  badgeHref?: string;
  poweredByLabel?: string;
  aiModels?: PlaygroundHeroAIModel[];
  class?: string;
}
