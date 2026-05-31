<script lang="ts">
	import AnimatedBackground from '$stylist/animation/component/atom/animated-background/index.svelte';
	import { Icon as BaseIcon } from '$stylist/media';

	const Sparkles = 'sparkles';
	const ExternalLink = 'external-link';
	const Heart = 'heart';
	const ArrowRight = 'arrow-right';

	let {
		title = 'Stylist Svelte',
		subtitle = 'A navigable design-system workspace with marketing-grade entry points.',
		description = 'The landing surface should explain what the system is, why it exists and where to go next, without pretending the underlying library is just a flat component dump.',
		badgeLabel = 'AI-curated component system',
		badgeHref = 'https://www.npmjs.com/package/stylist-svelte',
		poweredByLabel = 'Crafted with multiple model perspectives',
		rootDomainCount = 0,
		storyModuleCount = 0,
		aiModels = [
			{
				name: 'Claude',
				url: 'https://claude.ai',
				logo: '/logos/claude.png',
				bgColor: 'bg-orange-50 dark:bg-orange-900/20',
				description: 'Anthropic'
			},
			{
				name: 'Codex',
				url: 'https://openai.com',
				logo: '/logos/openai.png',
				bgColor: 'bg-sky-50 dark:bg-sky-900/20',
				description: 'OpenAI'
			},
			{
				name: 'Gemini',
				url: 'https://gemini.google.com',
				logo: '/logos/gemini.png',
				bgColor: 'bg-violet-50 dark:bg-violet-900/20',
				description: 'Google'
			},
			{
				name: 'Qwen',
				url: 'https://github.com/QwenLM',
				logo: '/logos/qwen.png',
				bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
				description: 'Alibaba'
			}
		],
		class: className = ''
	} = $props();

	const particleIndexes = Array.from({ length: 18 }, (_, index) => index);
</script>

<AnimatedBackground class={`c-stylist-hero relative overflow-hidden rounded-[36px] ${className}`}>
	<div
		class="relative z-[var(--z-index-docked)] mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10"
	>
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			{#each particleIndexes as particleIndex}
				<div
					class="hero-particle absolute rounded-full bg-orange-500/20"
					style={`width:${24 + (particleIndex % 5) * 18}px;height:${24 + (particleIndex % 5) * 18}px;left:${5 + ((particleIndex * 11) % 90)}%;top:${8 + ((particleIndex * 7) % 78)}%;animation-delay:${(particleIndex % 6) * 0.6}s;animation-duration:${8 + (particleIndex % 5) * 2}s;`}
				></div>
			{/each}
		</div>

		<div class="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_22rem] lg:items-start">
			<div class="text-left">
				<a
					href={badgeHref}
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex items-center gap-3 rounded-full border border-orange-300/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-orange-500 dark:border-orange-700 dark:bg-gray-950/40"
				>
					<BaseIcon
						name={Sparkles}
						class="h-5 w-5 text-orange-600 transition-transform group-hover:rotate-12"
					/>
					<span class="text-sm font-bold text-orange-900 dark:text-orange-300">{badgeLabel}</span>
					<BaseIcon
						name={ExternalLink}
						class="h-4 w-4 text-orange-600 opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</a>

				<h1
					class="mt-6 max-w-[11ch] text-6xl leading-[0.9] font-black tracking-[-0.05em] text-gray-950 sm:text-7xl lg:text-8xl dark:text-white"
				>
					{title}
				</h1>

				<p class="mt-5 max-w-3xl text-2xl font-bold text-gray-900 dark:text-white">{subtitle}</p>
				<p class="mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400">
					{description}
					<span class="ml-1 inline-flex align-middle">
						<BaseIcon name={Heart} class="h-5 w-5 text-red-500" style="fill: currentColor;" />
					</span>
				</p>

				<div class="mt-8 flex flex-wrap gap-3">
					<div
						class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-950/40"
					>
						<div
							class="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase dark:text-gray-400"
						>
							Root domains
						</div>
						<div class="mt-1 text-3xl font-black text-gray-950 dark:text-white">
							{rootDomainCount}
						</div>
					</div>
					<div
						class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-950/40"
					>
						<div
							class="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase dark:text-gray-400"
						>
							Story modules
						</div>
						<div class="mt-1 text-3xl font-black text-gray-950 dark:text-white">
							{storyModuleCount}
						</div>
					</div>
				</div>
			</div>

			<aside
				class="rounded-[28px] border border-white/60 bg-white/82 p-5 shadow-xl backdrop-blur dark:border-gray-800 dark:bg-gray-950/55"
			>
				<p
					class="text-sm font-semibold tracking-[0.14em] text-gray-500 uppercase dark:text-gray-400"
				>
					{poweredByLabel}
				</p>
				<div class="mt-5 grid gap-3">
					{#each aiModels as model}
						<a
							href={model.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/70"
						>
							<div
								class={`flex h-14 w-14 items-center justify-center rounded-2xl p-2 ${model.bgColor}`}
							>
								<img
									src={model.logo}
									alt={`${model.name} logo`}
									class="h-full w-full object-contain"
								/>
							</div>
							<div class="min-w-0 flex-1">
								<div class="flex items-center gap-2">
									<span class="text-lg font-bold text-gray-900 dark:text-white">{model.name}</span>
									<BaseIcon
										name={ArrowRight}
										class="h-4 w-4 text-orange-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
									/>
								</div>
								<p class="text-sm text-gray-500 dark:text-gray-400">{model.description}</p>
							</div>
						</a>
					{/each}
				</div>
			</aside>
		</div>
	</div>
</AnimatedBackground>

<style>
	.hero-particle {
		animation-name: hero-float;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}

	@keyframes hero-float {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -18px, 0);
		}
	}
</style>
