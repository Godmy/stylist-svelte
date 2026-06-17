<script lang="ts">
	import { PresetAtomicPrinciplesShowcase } from '$stylist/development/const/preset/atomic-principles-showcase';
	import type { RecipeAtomicPrinciplesShowcase } from '$stylist/development/interface/recipe/atomic-principles-showcase';
	import { createAtomicPrinciplesShowcaseState } from '$stylist/development/function/state/atomic-principles-showcase/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: RecipeAtomicPrinciplesShowcase = $props();
	const state = createAtomicPrinciplesShowcaseState(props);
</script>

<section class={state.sectionClass} {...state.restProps}>
	<div class={state.innerContainerClass}>
		<div class={state.textCenterClass}>
			<div class={state.badgeClass}>
				<BaseIcon name={PresetAtomicPrinciplesShowcase.GitBranch} class={state.badgeIconClass} />
				<span class={state.badgeTextClass}>{state.badgeText}</span>
			</div>
			<h2 class={state.titleClass}>
				{state.title}
			</h2>
			<p class={state.descriptionClass}>
				{state.description}
			</p>
		</div>

		<div class={state.gridClass}>
			<div class="aps-card aps-card--blue">
				<div class="aps-icon-box aps-icon-box--blue float-animation">
					<BaseIcon name={PresetAtomicPrinciplesShowcase.Code} class={state.iconClass} />
				</div>
				<h3 class="aps-card-title">Atoms</h3>
				<p class="aps-card-desc">Basic building blocks - buttons, inputs, labels, icons</p>
				<div class="aps-count aps-count--blue">
					{state.stats?.atoms ?? 0}
				</div>
				<p class="aps-count-label">components</p>
			</div>

			<div class="aps-card aps-card--purple" style="animation-delay: 0.1s">
				<div class="aps-icon-box aps-icon-box--purple float-animation" style="animation-delay: 1s">
					<BaseIcon name={PresetAtomicPrinciplesShowcase.Layers} class={state.iconClass} />
				</div>
				<h3 class="aps-card-title">Molecules</h3>
				<p class="aps-card-desc">Combined atoms - search bars, cards, form fields</p>
				<div class="aps-count aps-count--purple">
					{state.stats?.molecules ?? 0}
				</div>
				<p class="aps-count-label">components</p>
			</div>

			<div class="aps-card aps-card--green" style="animation-delay: 0.2s">
				<div class="aps-icon-box aps-icon-box--green float-animation" style="animation-delay: 2s">
					<BaseIcon name={PresetAtomicPrinciplesShowcase.Package} class={state.iconClass} />
				</div>
				<h3 class="aps-card-title">Organisms</h3>
				<p class="aps-card-desc">Complex components - headers, forms, modals</p>
				<div class="aps-count aps-count--green">
					{state.stats?.organisms ?? 0}
				</div>
				<p class="aps-count-label">components</p>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
	}
	.float-animation {
		animation: float var(--duration-s6) var(--animation-ease-in-out) infinite;
	}
	.c-atomic-principles-showcase__inner {
		max-width: 80rem;
		margin: 0 auto;
		padding: 0 1rem;
	}
	.c-atomic-principles-showcase__intro {
		text-align: center;
	}
	.c-atomic-principles-showcase__badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 999px;
		background: var(--color-primary-100);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-primary-700);
	}
	.c-atomic-principles-showcase__badge-icon {
		width: 1rem;
		height: 1rem;
	}
	.c-atomic-principles-showcase__badge-text {
		font-weight: 500;
	}
	.c-atomic-principles-showcase__title {
		margin: 1.5rem 0 0;
		font-size: 2.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}
	.c-atomic-principles-showcase__description {
		margin: 1rem 0 0;
		font-size: 1.125rem;
		line-height: 2rem;
		color: var(--color-text-secondary);
	}
	.c-atomic-principles-showcase__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-top: 4rem;
	}
	.aps-icon {
		width: 3rem;
		height: 3rem;
		color: white;
	}
	@media (min-width: 640px) {
		.c-atomic-principles-showcase__inner {
			padding: 0 1.5rem;
		}
	}
	@media (min-width: 768px) {
		.c-atomic-principles-showcase__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.c-atomic-principles-showcase__inner {
			padding: 0 2rem;
		}
		.c-atomic-principles-showcase__grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
	.aps-card {
		border-radius: 1.5rem;
		border-width: 2px;
		border-style: solid;
		background: white;
		padding: 2.5rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}
	.aps-card:hover {
		transform: translateY(-0.5rem) scale(1.05);
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}
	.aps-card--blue {
		border-color: #93c5fd;
	}
	.aps-card--blue:hover {
		border-color: #3b82f6;
	}
	.aps-card--purple {
		border-color: #d8b4fe;
	}
	.aps-card--purple:hover {
		border-color: #a855f7;
	}
	.aps-card--green {
		border-color: #86efac;
	}
	.aps-card--green:hover {
		border-color: #22c55e;
	}
	@media (prefers-color-scheme: dark) {
		.aps-card {
			background: #1f2937;
		}
		.aps-card--blue {
			border-color: #1d4ed8;
		}
		.aps-card--blue:hover {
			border-color: #60a5fa;
		}
		.aps-card--purple {
			border-color: #7e22ce;
		}
		.aps-card--purple:hover {
			border-color: #c084fc;
		}
		.aps-card--green {
			border-color: #15803d;
		}
		.aps-card--green:hover {
			border-color: #4ade80;
		}
	}
	.aps-icon-box {
		margin-bottom: 2rem;
		display: flex;
		width: 6rem;
		height: 6rem;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	}
	.aps-icon-box--blue {
		background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
	}
	.aps-icon-box--purple {
		background: linear-gradient(to bottom right, #a855f7, #ec4899);
	}
	.aps-icon-box--green {
		background: linear-gradient(to bottom right, #22c55e, #10b981);
	}
	.aps-card-title {
		margin-bottom: 1rem;
		font-size: 1.875rem;
		font-weight: 900;
		color: #111827;
	}
	@media (prefers-color-scheme: dark) {
		.aps-card-title {
			color: white;
		}
	}
	.aps-card-desc {
		margin-bottom: 1.5rem;
		min-height: 3.75rem;
		color: #4b5563;
	}
	@media (prefers-color-scheme: dark) {
		.aps-card-desc {
			color: #9ca3af;
		}
	}
	.aps-count {
		font-size: 3rem;
		font-weight: 900;
	}
	.aps-count--blue {
		color: #2563eb;
	}
	.aps-count--purple {
		color: #9333ea;
	}
	.aps-count--green {
		color: #16a34a;
	}
	@media (prefers-color-scheme: dark) {
		.aps-count--blue {
			color: #60a5fa;
		}
		.aps-count--purple {
			color: #c084fc;
		}
		.aps-count--green {
			color: #4ade80;
		}
	}
	.aps-count-label {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.aps-count-label {
			color: #9ca3af;
		}
	}
</style>
