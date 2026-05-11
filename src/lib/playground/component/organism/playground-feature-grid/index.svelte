<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundFeatureGridState } from '$stylist/playground/function/state/playground-feature-grid';
	import type { PlaygroundFeatureGridProps } from '$stylist/playground/type/struct/playground-feature-grid-props';
	let props: PlaygroundFeatureGridProps = $props();
	const state = createPlaygroundFeatureGridState(props);
</script>

<section class={`bg-white py-24 dark:bg-gray-800 ${state.className}`}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-5xl font-black text-gray-900 dark:text-white">
				{state.title}
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-400">
				{state.subtitle}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each state.features as feature}
				<div class={`bg-gradient-to-br ${feature.palette} rounded-2xl border-2 p-8`}>
					<div
						class={`h-16 w-16 ${feature.iconBg} mb-6 flex items-center justify-center rounded-xl`}
					>
						<BaseIcon name={state.getIcon(feature.icon)} class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
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
