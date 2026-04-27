import type { PlaygroundFeatureGridFeatureCard } from '$stylist/playground/type/struct/playground-feature-grid-feature-card';

export type PlaygroundFeatureGridProps = {
  title?: string;
  subtitle?: string;
  features?: PlaygroundFeatureGridFeatureCard[];
  class?: string;
}
