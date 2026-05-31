<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';

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

<div
	class={`c-marketing-cta-buttons mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 ${className}`}
	{...restProps}
>
	<a
		href={componentsHref}
		class="group relative overflow-hidden rounded-[28px] bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 p-8 text-white shadow-xl transition-all duration-[var(--duration-300)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 transition-opacity group-hover:opacity-100"
		></div>
		<div class="relative mb-4 flex items-center justify-between">
			<BaseIcon name={Package} class="h-12 w-12 drop-shadow-lg" />
			<BaseIcon
				name={ArrowRight}
				class="h-8 w-8 text-white/70 transition-all group-hover:translate-x-2 group-hover:text-white"
			/>
		</div>
		<h3 class="relative mb-3 text-3xl font-black">{componentsTitle}</h3>
		<p class="relative text-orange-50">
			{componentsDescriptionPrefix}
			{totalComponents} library entries with stories, docs and implementation context.
		</p>
	</a>

	<a
		href={playgroundHref}
		class="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-600 via-cyan-500 to-blue-700 p-8 text-white shadow-xl transition-all duration-[var(--duration-300)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/35"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 transition-opacity group-hover:opacity-100"
		></div>
		<div class="relative mb-4 flex items-center justify-between">
			<BaseIcon name={Layers} class="h-12 w-12 drop-shadow-lg" />
			<BaseIcon
				name={ArrowRight}
				class="h-8 w-8 text-white/70 transition-all group-hover:translate-x-2 group-hover:text-white"
			/>
		</div>
		<h3 class="relative mb-3 text-3xl font-black">{playgroundTitle}</h3>
		<p class="relative text-cyan-50">{playgroundDescription}</p>
	</a>
</div>
