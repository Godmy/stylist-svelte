<script lang="ts">
	import type { AtomicPrinciplesShowcaseProps } from '$stylist/development/type/struct/atomic-principles-showcase-props';
	import createAtomicPrinciplesShowcaseState from '$stylist/development/function/state/atomic-principles-showcase/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: AtomicPrinciplesShowcaseProps = $props();
	const state = createAtomicPrinciplesShowcaseState(props);
</script>

<section class={state.sectionClass} {...state.restProps}>
	<div class={state.innerContainerClass}>
		<div class={state.textCenterClass}>
			<div class={state.badgeClass}>
				<BaseIcon name={state.GitBranch} class={state.badgeIconClass} />
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
			<div
				class="group rounded-3xl border-2 border-blue-300 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:border-blue-500 hover:shadow-2xl dark:border-blue-700 dark:bg-gray-800 dark:hover:border-blue-400"
			>
				<div
					class="float-animation mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"
				>
					<BaseIcon name={state.Code} class="h-12 w-12 text-white" />
				</div>
				<h3 class="mb-4 text-3xl font-black text-gray-900 dark:text-white">Atoms</h3>
				<p class="mb-6 min-h-[60px] text-gray-600 dark:text-gray-400">
					Basic building blocks - buttons, inputs, labels, icons
				</p>
				<div class="text-5xl font-black text-blue-600 dark:text-blue-400">
					{state.stats?.atoms ?? 0}
				</div>
				<p class="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">components</p>
			</div>

			<div
				class="group rounded-3xl border-2 border-purple-300 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:border-purple-500 hover:shadow-2xl dark:border-purple-700 dark:bg-gray-800 dark:hover:border-purple-400"
				style="animation-delay: 0.1s"
			>
				<div
					class="float-animation mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
					style="animation-delay: 1s"
				>
					<BaseIcon name={state.Layers} class="h-12 w-12 text-white" />
				</div>
				<h3 class="mb-4 text-3xl font-black text-gray-900 dark:text-white">Molecules</h3>
				<p class="mb-6 min-h-[60px] text-gray-600 dark:text-gray-400">
					Combined atoms - search bars, cards, form fields
				</p>
				<div class="text-5xl font-black text-purple-600 dark:text-purple-400">
					{state.stats?.molecules ?? 0}
				</div>
				<p class="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">components</p>
			</div>

			<div
				class="group rounded-3xl border-2 border-green-300 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:border-green-500 hover:shadow-2xl dark:border-green-700 dark:bg-gray-800 dark:hover:border-green-400"
				style="animation-delay: 0.2s"
			>
				<div
					class="float-animation mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg"
					style="animation-delay: 2s"
				>
					<BaseIcon name={state.Package} class="h-12 w-12 text-white" />
				</div>
				<h3 class="mb-4 text-3xl font-black text-gray-900 dark:text-white">Organisms</h3>
				<p class="mb-6 min-h-[60px] text-gray-600 dark:text-gray-400">
					Complex components - headers, forms, modals
				</p>
				<div class="text-5xl font-black text-green-600 dark:text-green-400">
					{state.stats?.organisms ?? 0}
				</div>
				<p class="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">components</p>
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
</style>
