<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundMissionBannerState } from '$stylist/playground/function/state/playground-mission-banner';
	import type { PlaygroundMissionBannerProps } from '$stylist/playground/type/struct/playground-mission-banner-props';
	const Sparkles = 'sparkles';

	let props: PlaygroundMissionBannerProps = $props();
	const state = createPlaygroundMissionBannerState(props);
</script>

<section
	class={`bg-gradient-to-br from-orange-600 via-red-600 to-purple-600 py-24 text-white ${state.className}`}
>
	<div class="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur"
		>
			<BaseIcon name={Sparkles} class="h-5 w-5" />
			<span class="text-sm font-bold">{state.badgeText}</span>
		</div>

		<h2 class="mb-8 text-5xl leading-tight font-black md:text-6xl">
			{#each state.titleLines as line, index}
				{line}{#if index < state.titleLines.length - 1}<br />{/if}
			{/each}
		</h2>

		<p class="mb-12 text-2xl leading-relaxed opacity-[var(--opacity-90)]">
			{state.description}
		</p>

		<div class="flex flex-wrap justify-center gap-6">
			<a
				href={state.primaryHref}
				class="rounded-2xl bg-white px-10 py-5 text-xl font-black text-gray-900 transition-all hover:scale-105 hover:shadow-2xl"
			>
				{state.primaryLabel}
			</a>
			<a
				href={state.secondaryHref}
				class="rounded-2xl border-4 border-white bg-transparent px-10 py-5 text-xl font-black text-white transition-all hover:scale-105 hover:bg-white hover:text-gray-900 hover:shadow-2xl"
			>
				{state.secondaryLabel}
			</a>
		</div>
	</div>
</section>
