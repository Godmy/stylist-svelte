import type { PlaygroundFeatureGridProps } from '$stylist/playground/type/struct/playground-feature-grid-props';
import type { PlaygroundFeatureGridFeatureCard } from '$stylist/playground/type/struct/playground-feature-grid-feature-card';
import type { PlaygroundFeatureGridFeatureIcon } from '$stylist/playground/type/struct/playground-feature-grid-feature-icon';
const Sparkles = 'sparkles';
const Zap = 'zap';
const GitBranch = 'git-branch';
const Code = 'code';
const Layers = 'layers';
const Users = 'users';

export function createPlaygroundFeatureGridState(props: PlaygroundFeatureGridProps) {
  const title = $derived(props.title ?? 'Why RecipeStylist?');
  const subtitle = $derived(props.subtitle ?? 'The most advanced AI-generated component library');
  const features = $derived(props.features ?? [
    {
      title: 'AI-Generated',
      description: 'Every component is crafted by advanced AI models trained specifically for Svelte 5',
      palette: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-600',
      icon: 'sparkles' as PlaygroundFeatureGridFeatureIcon
    },
    {
      title: 'Production Ready',
      description: 'Fully typed, tested, and optimized for real-world applications',
      palette: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-600',
      icon: 'zap' as PlaygroundFeatureGridFeatureIcon
    },
    {
      title: 'Atomic Design',
      description: 'Organized following proven Atomic Design methodology',
      palette: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-600',
      icon: 'git-branch' as PlaygroundFeatureGridFeatureIcon
    },
    {
      title: 'Svelte 5 Runes',
      description: 'Built with the latest Svelte 5 features and best practices',
      palette: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800',
      iconBg: 'bg-green-600',
      icon: 'code' as PlaygroundFeatureGridFeatureIcon
    },
    {
      title: 'Interactive Playground',
      description: 'Test and customize every component in real-time',
      palette: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-600',
      icon: 'layers' as PlaygroundFeatureGridFeatureIcon
    },
    {
      title: 'Open Source',
      description: 'Free to use, modify, and contribute to the growing library',
      palette: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800',
      iconBg: 'bg-red-600',
      icon: 'users' as PlaygroundFeatureGridFeatureIcon
    }
  ]);
  const className = $derived(props.class ?? '');

  function getIcon(icon: PlaygroundFeatureGridFeatureIcon) {
    switch (icon) {
      case 'sparkles': return Sparkles;
      case 'zap': return Zap;
      case 'git-branch': return GitBranch;
      case 'code': return Code;
      case 'layers': return Layers;
      default: return Users;
    }
  }

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get features() { return features; },
    get className() { return className; },
    getIcon
  };
}

export default createPlaygroundFeatureGridState;
