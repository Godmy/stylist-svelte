<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundCtaButtonsState } from '$stylist/playground/function/state/playground-cta-buttons';
	import type { PlaygroundCtaButtonsProps } from '$stylist/playground/type/struct/playground-cta-buttons-props';
	const Package = 'package';
	const Layers = 'layers';
	const ArrowRight = 'arrow-right';

	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

	let { totalComponents, ...restProps }: PlaygroundCtaButtonsProps = $props();
	const state = createPlaygroundCtaButtonsState({ totalComponents, ...restProps });
</script>

<div
	class="slide-up mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 {state.className}"
	style="animation-delay: 0.8s"
	{...restProps}
>
	<a
		href={state.componentsHref}
		class="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 p-8 shadow-xl transition-all duration-[var(--duration-300)] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-[var(--opacity-0)] transition-opacity group-hover:opacity-[var(--opacity-100)]"
		></div>
		<div class="relative mb-4 flex items-center justify-between">
			<BaseIcon name={Package} class="h-12 w-12 text-white drop-shadow-lg" />
			<BaseIcon
				name={ArrowRight}
				class="h-8 w-8 text-white/70 transition-all group-hover:translate-x-3 group-hover:text-white"
			/>
		</div>
		<h3 class="relative mb-3 text-3xl font-black text-white">
			{state.componentsTitle}
		</h3>
		<p class="relative text-orange-50">
			{state.componentsDescriptionPrefix}
			{state.totalComponents} AI-generated production-ready components
		</p>
	</a>

	<a
		href={state.playgroundHref}
		class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 p-8 shadow-xl transition-all duration-[var(--duration-300)] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-[var(--opacity-0)] transition-opacity group-hover:opacity-[var(--opacity-100)]"
		></div>
		<div class="relative mb-4 flex items-center justify-between">
			<BaseIcon name={Layers} class="h-12 w-12 text-white drop-shadow-lg" />
			<BaseIcon
				name={ArrowRight}
				class="h-8 w-8 text-white/70 transition-all group-hover:translate-x-3 group-hover:text-white"
			/>
		</div>
		<h3 class="relative mb-3 text-3xl font-black text-white">
			{state.playgroundTitle}
		</h3>
		<p class="relative text-purple-50">
			{state.playgroundDescription}
		</p>
	</a>
</div>
