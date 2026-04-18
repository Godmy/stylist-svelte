import type { PlaygroundHeroProps } from '$stylist/development/type/struct/playground-hero-props';
import type { PlaygroundHeroAIModel } from '$stylist/development/type/struct/playground-hero-ai-model';
export function createPlaygroundHeroState(props: PlaygroundHeroProps) {
  const title = $derived(props.title ?? 'RecipeStylist');
  const subtitle = $derived(props.subtitle ?? "The world's largest Svelte 5 component library");
  const description = $derived(props.description ?? "OMG! This is Godmy, the product owner of the Vibe-Management team - a collective of leading LLM models. We have created the RecipeStylist-Svelte-Coder-Model - a unified AI model specifically trained for Svelte 5 using atomic design principles. Attention, designed for those who love Svelte");
  const badgeLabel = $derived(props.badgeLabel ?? 'AI-Generated Component Library');
  const badgeHref = $derived(props.badgeHref ?? 'https://www.npmjs.com/package/stylist-svelte');
  const poweredByLabel = $derived(props.poweredByLabel ?? 'Powered by Leading AI Models');
  const aiModels = $derived(props.aiModels ?? [
    { name: 'Claude', url: 'https://claude.ai', logo: '/logos/claude.png', bgColor: 'bg-orange-50 dark:bg-orange-900/20', description: 'By Anthropic' },
    { name: 'Codex', url: 'https://openai.com', logo: '/logos/openai.png', bgColor: 'bg-blue-50 dark:bg-blue-900/20', description: 'By OpenAI' },
    { name: 'Gemini', url: 'https://gemini.google.com', logo: '/logos/gemini.png', bgColor: 'bg-purple-50 dark:bg-purple-900/20', description: 'By Google' },
    { name: 'Qwen', url: 'https://github.com/QwenLM', logo: '/logos/qwen.png', bgColor: 'bg-green-50 dark:bg-green-900/20', description: 'By Alibaba' }
  ]);
  const className = $derived(props.class ?? '');

  const particleIndexes = $derived(Array.from({ length: 20 }, (_, i) => i));

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get description() { return description; },
    get badgeLabel() { return badgeLabel; },
    get badgeHref() { return badgeHref; },
    get poweredByLabel() { return poweredByLabel; },
    get aiModels() { return aiModels; },
    get className() { return className; },
    get particleIndexes() { return particleIndexes; }
  };
}

export default createPlaygroundHeroState;
