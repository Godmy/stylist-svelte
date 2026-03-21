<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Sparkles = 'sparkles';
const ExternalLink = 'external-link';
const Heart = 'heart';
const ArrowRight = 'arrow-right';

  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';

  type AIModel = {
    name: string;
    url: string;
    logo: string;
    bgColor: string;
    description: string;
  };

  type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    badgeLabel?: string;
    badgeHref?: string;
    poweredByLabel?: string;
    aiModels?: AIModel[];
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;

  let {
    title = 'Stylist',
    subtitle = "The world's largest Svelte 5 component library",
    description = "OMG! This is Godmy, the product owner of the Vibe-Management team - a collective of leading LLM models. We have created the Stylist-Svelte-Coder-Model - a unified AI model specifically trained for Svelte 5 using atomic design principles. Attention, designed for those who love Svelte",
    badgeLabel = 'AI-Generated Component Library',
    badgeHref = 'https://www.npmjs.com/package/stylist-svelte',
    poweredByLabel = 'Powered by Leading AI Models',
    aiModels = [
      { name: 'Claude', url: 'https://claude.ai', logo: '/logos/claude.png', bgColor: 'bg-orange-50 dark:bg-orange-900/20', description: 'By Anthropic' },
      { name: 'Codex', url: 'https://openai.com', logo: '/logos/openai.png', bgColor: 'bg-blue-50 dark:bg-blue-900/20', description: 'By OpenAI' },
      { name: 'Gemini', url: 'https://gemini.google.com', logo: '/logos/gemini.png', bgColor: 'bg-purple-50 dark:bg-purple-900/20', description: 'By Google' },
      { name: 'Qwen', url: 'https://github.com/QwenLM', logo: '/logos/qwen.png', bgColor: 'bg-green-50 dark:bg-green-900/20', description: 'By Alibaba' }
    ],
    class: className = '',
    ...restProps
  }: Props = $props();

  const particleIndexes = Array.from({ length: 20 }, (_, i) => i);
</script>

<style>
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .gradient-bg {
    background: var(--gradient-custom102);
    background-size: 400% 400%;
    animation: gradient-shift var(--duration-s15) var(--animation-ease) infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  .float-animation {
    animation: float var(--duration-s6) var(--animation-ease-in-out) infinite;
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: var(--shadow-custom18); }
    50% { box-shadow: var(--shadow-custom19); }
  }
  .pulse-glow {
    animation: pulse-glow var(--duration-2000) var(--animation-ease-in-out) infinite;
  }

  @keyframes slide-up {
    from { opacity: var(--opacity-0); transform: translateY(30px); }
    to { opacity: var(--opacity-100); transform: translateY(var(--opacity-0)); }
  }
  .slide-up {
    animation: slide-up var(--duration-600) var(--animation-ease-out) forwards;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10%, 30% { transform: scale(1.2); }
    20%, 40% { transform: scale(1.1); }
  }
  .heart-icon {
    display: inline-block;
    animation: heartbeat var(--duration-1500) var(--animation-ease-in-out) infinite;
  }
</style>

<div class={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`} {...restProps}>
  <div class="absolute inset-0 gradient-bg opacity-[var(--opacity-10)]"></div>

  <div class="absolute inset-0 overflow-hidden">
    {#each particleIndexes as _i}
      <div
        class="absolute rounded-full bg-orange-500/20"
        style="
          width: {Math.random() * 100 + 20}px;
          height: {Math.random() * 100 + 20}px;
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          animation: float {Math.random() * 10 + 5}s var(--animation-ease-in-out) infinite;
          animation-delay: {Math.random() * 5}s;
        "
      ></div>
    {/each}
  </div>

  <div class="relative z-[var(--z-index-docked)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
    <div class="text-center">
      <div class="mb-6 slide-up" style="animation-delay: 0.1s">
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-black mb-4 leading-tight text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>

      <div class="slide-up mb-8" style="animation-delay: 0.2s">
        <a
          href={badgeHref}
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-full border-2 border-orange-300 dark:border-orange-700 pulse-glow hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-xl transition-all hover:scale-105"
        >
          <BaseIcon name={Sparkles} class="w-6 h-6 text-orange-600 group-hover:rotate-12 transition-transform" />
          <span class="text-lg font-bold text-orange-900 dark:text-orange-300">{badgeLabel}</span>
          <BaseIcon name={ExternalLink} class="w-5 h-5 text-orange-600 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] transition-opacity" />
        </a>
      </div>

      <div class="slide-up mb-6" style="animation-delay: 0.3s">
        <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {subtitle}
        </p>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Created by the <span class="font-bold text-indigo-600 dark:text-indigo-400">Vibe-Management Team</span>
        </p>
      </div>

      <div class="slide-up max-w-3xl mx-auto mb-12" style="animation-delay: 0.4s">
        <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
          {description}
          <span class="heart-icon align-middle ml-1">
            <BaseIcon name={Heart} class="w-5 h-5 text-red-500" style="fill: currentColor;" />
          </span>
        </p>
      </div>

      <div class="slide-up mb-16" style="animation-delay: 0.5s">
        <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
          {poweredByLabel}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6">
          {#each aiModels as model, i}
            <a
              href={model.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-[var(--duration-300)] hover:scale-110 hover:-translate-y-2"
              style="animation-delay: {0.6 + i * 0.1}s"
            >
              <div class="flex items-center gap-4">
                <div class={`w-16 h-16 rounded-xl ${model.bgColor} p-2 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all group-hover:scale-110 group-hover:rotate-3`}>
                  <img src={model.logo} alt={`${model.name} logo`} class="w-full h-full object-contain" />
                </div>
                <div class="text-left">
                  <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-gray-900 dark:text-white transition-all">{model.name}</span>
                    <BaseIcon name={ArrowRight} class="w-4 h-4 text-orange-500 dark:text-orange-400 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] group-hover:translate-x-1 transition-all" />
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{model.description}</span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>




