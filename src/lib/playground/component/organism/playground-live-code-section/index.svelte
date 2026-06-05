<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createPlaygroundLiveCodeSectionState from '$stylist/playground/function/state/playground-live-code-section/index.svelte';
	import type { PlaygroundLiveCodeSectionProps } from '$stylist/playground/type/struct/playground-live-code-section-props';
	const Play = 'play';
	const ArrowRight = 'arrow-right';

	let props: PlaygroundLiveCodeSectionProps = $props();
	const state = createPlaygroundLiveCodeSectionState(props);
</script>

<section class={`bg-gray-900 py-24 ${state.className}`}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 dark:bg-orange-900/30"
			>
				<BaseIcon name={Play} class="h-5 w-5 text-orange-600" />
				<span class="text-sm font-bold text-orange-900 dark:text-orange-300">{state.badgeText}</span
				>
			</div>
			<h2 class="mb-4 text-5xl font-black text-white">
				{state.title}
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-400">
				{state.description}
			</p>
		</div>

		<div
			class="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl"
		>
			{#if state.children}
				{#if state.children}{@render state.children()}{/if}
			{:else}
				<pre class="m-0 overflow-x-auto p-6 text-sm text-gray-100"><code>{state.code}</code></pre>
			{/if}
		</div>

		<div class="mt-12 text-center">
			<a
				href={state.ctaHref}
				class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
			>
				<BaseIcon name={Play} class="h-6 w-6" />
				{state.ctaText}
				<BaseIcon name={ArrowRight} class="h-6 w-6" />
			</a>
		</div>
	</div>
</section>
