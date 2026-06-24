<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Package = 'package';
	const Layers = 'layers';
	const ArrowRight = 'arrow-right';

	let {
		totalComponents = 0,
		componentsHref = '/components',
		playgroundHref = '/playground',
		componentsTitle = 'Browse Components',
		componentsDescriptionPrefix = 'Explore',
		playgroundTitle = 'Interactive Playground',
		playgroundDescription = 'Test components with live controls and code generation',
		class: className = '',
		...restProps
	} = $props();
</script>

<div class={`c-marketing-cta-buttons ${className}`} {...restProps}>
	<a href={componentsHref} class="cta-card cta-card--orange">
		<div class="cta-card-shimmer"></div>
		<div class="cta-card-top">
			<BaseIcon
				name={Package}
				style="width:3rem;height:3rem;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
			/>
			<BaseIcon name={ArrowRight} class="cta-arrow" />
		</div>
		<h3 class="cta-card-title">{componentsTitle}</h3>
		<p class="cta-card-desc cta-card-desc--orange">
			{componentsDescriptionPrefix}
			{totalComponents} library entries with stories, docs and implementation context.
		</p>
	</a>

	<a href={playgroundHref} class="cta-card cta-card--blue">
		<div class="cta-card-shimmer"></div>
		<div class="cta-card-top">
			<BaseIcon
				name={Layers}
				style="width:3rem;height:3rem;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
			/>
			<BaseIcon name={ArrowRight} class="cta-arrow" />
		</div>
		<h3 class="cta-card-title">{playgroundTitle}</h3>
		<p class="cta-card-desc cta-card-desc--blue">{playgroundDescription}</p>
	</a>
</div>

<style>
	.c-marketing-cta-buttons {
		margin-left: auto;
		margin-right: auto;
		display: grid;
		max-width: 64rem;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.c-marketing-cta-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.cta-card {
		position: relative;
		overflow: hidden;
		border-radius: 28px;
		padding: 2rem;
		color: #fff;
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
		transition:
			transform var(--duration-300, 300ms),
			box-shadow var(--duration-300, 300ms);
		text-decoration: none;
	}

	.cta-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	.cta-card--orange {
		background: linear-gradient(to right, #ea580c, #f97316, #dc2626);
	}

	.cta-card--blue {
		background: linear-gradient(to bottom right, #0284c7, #06b6d4, #1d4ed8);
	}

	.cta-card-shimmer {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
		opacity: 0;
		transition: opacity 0.2s;
	}

	.cta-card:hover .cta-card-shimmer {
		opacity: 1;
	}

	.cta-card-top {
		position: relative;
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.cta-arrow) {
		width: 2rem;
		height: 2rem;
		color: rgba(255, 255, 255, 0.7);
		transition:
			transform 0.2s,
			color 0.2s;
	}

	.cta-card:hover :global(.cta-arrow) {
		transform: translateX(8px);
		color: #fff;
	}

	.cta-card-title {
		position: relative;
		margin-bottom: 0.75rem;
		font-size: 1.875rem;
		font-weight: 900;
	}

	.cta-card-desc {
		position: relative;
	}

	.cta-card-desc--orange {
		color: #fff7ed;
	}
	.cta-card-desc--blue {
		color: #ecfeff;
	}
</style>
