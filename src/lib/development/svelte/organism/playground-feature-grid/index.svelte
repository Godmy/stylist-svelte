<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Sparkles = 'sparkles';
const Zap = 'zap';
const GitBranch = 'git-branch';
const Code = 'code';
const Layers = 'layers';
const Users = 'users';

  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

  type FeatureCard = {
    title: string;
    description: string;
    palette: string;
    iconBg: string;
    icon: 'sparkles' | 'zap' | 'git-branch' | 'code' | 'layers' | 'users';
  };

  type Props = {
    title?: string;
    subtitle?: string;
    features?: FeatureCard[];
    class?: string;
  } & InformationHTMLAttributes<HTMLElement>;

  let {
    title = 'Why Stylist?',
    subtitle = 'The most advanced AI-generated component library',
    features = [
      {
        title: 'AI-Generated',
        description: 'Every component is crafted by advanced AI models trained specifically for Svelte 5',
        palette: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800',
        iconBg: 'bg-orange-600',
        icon: 'sparkles'
      },
      {
        title: 'Production Ready',
        description: 'Fully typed, tested, and optimized for real-world applications',
        palette: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800',
        iconBg: 'bg-blue-600',
        icon: 'zap'
      },
      {
        title: 'Atomic Design',
        description: 'Organized following proven Atomic Design methodology',
        palette: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800',
        iconBg: 'bg-purple-600',
        icon: 'git-branch'
      },
      {
        title: 'Svelte 5 Runes',
        description: 'Built with the latest Svelte 5 features and best practices',
        palette: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800',
        iconBg: 'bg-green-600',
        icon: 'code'
      },
      {
        title: 'Interactive Playground',
        description: 'Test and customize every component in real-time',
        palette: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800',
        iconBg: 'bg-yellow-600',
        icon: 'layers'
      },
      {
        title: 'Open Source',
        description: 'Free to use, modify, and contribute to the growing library',
        palette: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800',
        iconBg: 'bg-red-600',
        icon: 'users'
      }
    ],
    class: className = '',
    ...restProps
  }: Props = $props();

  function getIcon(icon: FeatureCard['icon']) {
    switch (icon) {
      case 'sparkles': return Sparkles;
      case 'zap': return Zap;
      case 'git-branch': return GitBranch;
      case 'code': return Code;
      case 'layers': return Layers;
      default: return Users;
    }
  }
</script>

<section class={`py-24 bg-white dark:bg-gray-800 ${className}`} {...restProps}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-black text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class={`bg-gradient-to-br ${feature.palette} rounded-2xl p-8 border-2`}>
          <div class={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
            <BaseIcon name={getIcon(feature.icon)} class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {feature.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>



