<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';

	const Sparkles = 'sparkles';

	let {
		badgeText = 'Our Mission',
		title = 'Make the component library readable before it becomes gigantic.',
		description = 'The homepage should not just advertise the system. It should compress the architecture into a shape that helps people understand what the library is for and why the workspace exists.',
		primaryLabel = 'Open Domain Workspace',
		primaryHref = '/',
		secondaryLabel = 'Browse Components',
		secondaryHref = '/components',
		class: className = ''
	} = $props();
</script>

<section
	class={`c-stylist-mission rounded-[36px] bg-gradient-to-br from-orange-600 via-red-600 to-amber-500 px-6 py-12 text-white shadow-2xl ${className}`}
>
	<div class="mx-auto max-w-5xl text-center">
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 backdrop-blur"
		>
			<BaseIcon name={Sparkles} class="h-5 w-5" />
			<span class="text-sm font-bold">{badgeText}</span>
		</div>

		<h2 class="mx-auto max-w-4xl text-4xl leading-tight font-black md:text-5xl">{title}</h2>
		<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90">{description}</p>

		<div class="mt-10 flex flex-wrap justify-center gap-5">
			<a
				href={primaryHref}
				class="rounded-2xl bg-white px-8 py-4 text-lg font-black text-gray-900 transition-all hover:scale-105 hover:shadow-2xl"
			>
				{primaryLabel}
			</a>
			<a
				href={secondaryHref}
				class="rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-lg font-black text-white transition-all hover:scale-105 hover:bg-white hover:text-gray-900 hover:shadow-2xl"
			>
				{secondaryLabel}
			</a>
		</div>
	</div>
</section>
