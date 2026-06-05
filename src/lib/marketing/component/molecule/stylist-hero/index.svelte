<script lang="ts">
	import AnimatedBackground from '$stylist/animation/component/atom/animated-background/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

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
				bgColor: 'sh-logo-orange',
				description: 'Anthropic'
			},
			{
				name: 'Codex',
				url: 'https://openai.com',
				logo: '/logos/openai.png',
				bgColor: 'sh-logo-sky',
				description: 'OpenAI'
			},
			{
				name: 'Gemini',
				url: 'https://gemini.google.com',
				logo: '/logos/gemini.png',
				bgColor: 'sh-logo-violet',
				description: 'Google'
			},
			{
				name: 'Qwen',
				url: 'https://github.com/QwenLM',
				logo: '/logos/qwen.png',
				bgColor: 'sh-logo-emerald',
				description: 'Alibaba'
			}
		],
		class: className = ''
	} = $props();

	const particleIndexes = Array.from({ length: 18 }, (_, index) => index);
</script>

<AnimatedBackground class={`c-stylist-hero ${className}`}>
	<div class="sh-inner">
		<div class="sh-particles" aria-hidden="true">
			{#each particleIndexes as particleIndex}
				<div
					class="hero-particle sh-particle"
					style={`width:${24 + (particleIndex % 5) * 18}px;height:${24 + (particleIndex % 5) * 18}px;left:${5 + ((particleIndex * 11) % 90)}%;top:${8 + ((particleIndex * 7) % 78)}%;animation-delay:${(particleIndex % 6) * 0.6}s;animation-duration:${8 + (particleIndex % 5) * 2}s;`}
				></div>
			{/each}
		</div>

		<div class="sh-grid">
			<div class="sh-main">
				<a href={badgeHref} target="_blank" rel="noopener noreferrer" class="sh-badge">
					<BaseIcon name={Sparkles} class="sh-badge-sparkles" />
					<span class="sh-badge-label">{badgeLabel}</span>
					<BaseIcon name={ExternalLink} class="sh-badge-link" />
				</a>

				<h1 class="sh-heading">{title}</h1>
				<p class="sh-subtitle">{subtitle}</p>
				<p class="sh-description">
					{description}
					<span class="sh-heart">
						<BaseIcon
							name={Heart}
							style="width:1.25rem;height:1.25rem;color:#ef4444;fill:currentColor"
						/>
					</span>
				</p>

				<div class="sh-stats">
					<div class="sh-stat-card">
						<div class="sh-stat-label">Root domains</div>
						<div class="sh-stat-value">{rootDomainCount}</div>
					</div>
					<div class="sh-stat-card">
						<div class="sh-stat-label">Story modules</div>
						<div class="sh-stat-value">{storyModuleCount}</div>
					</div>
				</div>
			</div>

			<aside class="sh-aside">
				<p class="sh-aside-label">{poweredByLabel}</p>
				<div class="sh-models">
					{#each aiModels as model}
						<a href={model.url} target="_blank" rel="noopener noreferrer" class="sh-model-link">
							<div class={`sh-model-logo ${model.bgColor}`}>
								<img src={model.logo} alt={`${model.name} logo`} class="sh-model-img" />
							</div>
							<div class="sh-model-info">
								<div class="sh-model-name-row">
									<span class="sh-model-name">{model.name}</span>
									<BaseIcon name={ArrowRight} class="sh-model-arrow" />
								</div>
								<p class="sh-model-desc">{model.description}</p>
							</div>
						</a>
					{/each}
				</div>
			</aside>
		</div>
	</div>
</AnimatedBackground>

<style>
	.c-stylist-hero {
		position: relative;
		overflow: hidden;
		border-radius: 36px;
	}

	.sh-inner {
		position: relative;
		z-index: var(--z-index-docked, 10);
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		max-width: 80rem;
		padding: 2.5rem 1.5rem;
	}

	@media (min-width: 640px) {
		.sh-inner {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
	@media (min-width: 1024px) {
		.sh-inner {
			padding-left: 2.5rem;
			padding-right: 2.5rem;
		}
	}

	.sh-particles {
		pointer-events: none;
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.sh-particle {
		position: absolute;
		border-radius: 9999px;
		background-color: rgba(249, 115, 22, 0.2);
	}

	.sh-grid {
		display: grid;
		gap: 2rem;
	}

	@media (min-width: 1024px) {
		.sh-grid {
			grid-template-columns: minmax(0, 1.25fr) 22rem;
			align-items: start;
		}
	}

	.sh-main {
		text-align: left;
	}

	.sh-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		border-radius: 9999px;
		border: 1px solid rgba(253, 186, 116, 0.7);
		background-color: rgba(255, 255, 255, 0.7);
		padding: 0.75rem 1.25rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		backdrop-filter: blur(4px);
		text-decoration: none;
		transition:
			transform 0.2s,
			border-color 0.2s;
	}

	.sh-badge:hover {
		transform: translateY(-2px);
		border-color: #f97316;
	}

	:global(.sh-badge-sparkles) {
		width: 1.25rem;
		height: 1.25rem;
		color: #ea580c;
		transition: transform 0.2s;
	}

	.sh-badge:hover :global(.sh-badge-sparkles) {
		transform: rotate(12deg);
	}

	.sh-badge-label {
		font-size: 0.875rem;
		font-weight: 700;
		color: #7c2d12;
	}

	:global(.sh-badge-link) {
		width: 1rem;
		height: 1rem;
		color: #ea580c;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.sh-badge:hover :global(.sh-badge-link) {
		opacity: 1;
	}

	.sh-heading {
		margin-top: 1.5rem;
		max-width: 11ch;
		font-size: 3.75rem;
		line-height: 0.9;
		font-weight: 900;
		letter-spacing: -0.05em;
		color: #030712;
	}

	@media (min-width: 640px) {
		.sh-heading {
			font-size: 4.5rem;
		}
	}
	@media (min-width: 1024px) {
		.sh-heading {
			font-size: 6rem;
		}
	}

	.sh-subtitle {
		margin-top: 1.25rem;
		max-width: 48rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: #111827;
	}

	.sh-description {
		margin-top: 1.25rem;
		max-width: 48rem;
		font-size: 1rem;
		line-height: 2;
		color: #4b5563;
	}

	.sh-heart {
		margin-left: 0.25rem;
		display: inline-flex;
		vertical-align: middle;
	}

	.sh-stats {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.sh-stat-card {
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.6);
		background-color: rgba(255, 255, 255, 0.8);
		padding: 0.75rem 1rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		backdrop-filter: blur(4px);
	}

	.sh-stat-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #6b7280;
	}

	.sh-stat-value {
		margin-top: 0.25rem;
		font-size: 1.875rem;
		font-weight: 900;
		color: #030712;
	}

	.sh-aside {
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.6);
		background-color: rgba(255, 255, 255, 0.82);
		padding: 1.25rem;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(4px);
	}

	.sh-aside-label {
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #6b7280;
	}

	.sh-models {
		margin-top: 1.25rem;
		display: grid;
		gap: 0.75rem;
	}

	.sh-model-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-radius: 1rem;
		border: 1px solid #e5e7eb;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 0.75rem 1rem;
		text-decoration: none;
		transition:
			transform 0.2s,
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.sh-model-link:hover {
		transform: translateY(-2px);
		border-color: #fed7aa;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	}

	.sh-model-logo {
		display: flex;
		width: 3.5rem;
		height: 3.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		padding: 0.5rem;
		flex-shrink: 0;
	}

	.sh-model-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.sh-model-info {
		min-width: 0;
		flex: 1;
	}

	.sh-model-name-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.sh-model-name {
		font-size: 1.125rem;
		font-weight: 700;
		color: #111827;
	}

	:global(.sh-model-arrow) {
		width: 1rem;
		height: 1rem;
		color: #f97316;
		opacity: 0;
		transition:
			transform 0.2s,
			opacity 0.2s;
	}

	.sh-model-link:hover :global(.sh-model-arrow) {
		transform: translateX(4px);
		opacity: 1;
	}

	.sh-model-desc {
		font-size: 0.875rem;
		color: #6b7280;
	}

	.sh-logo-orange {
		background-color: #fff7ed;
	}
	.sh-logo-sky {
		background-color: #f0f9ff;
	}
	.sh-logo-violet {
		background-color: #f5f3ff;
	}
	.sh-logo-emerald {
		background-color: #ecfdf5;
	}

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
