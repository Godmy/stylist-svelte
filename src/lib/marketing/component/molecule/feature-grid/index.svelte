<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';

	let {
		title = 'Why Stylist?',
		subtitle = 'A marketing layer for the library itself, not just for demo pages.',
		features = [
			{
				title: 'Atomic structure',
				description:
					'Components stay grouped by domain, cluster, joint and family, even when the landing page gets richer.',
				palette:
					'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800',
				iconBg: 'bg-orange-600',
				icon: 'git-branch'
			},
			{
				title: 'Readable navigation',
				description:
					'The homepage can explain the system while the workspace keeps direct access to implementation details.',
				palette:
					'from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20 border-sky-200 dark:border-sky-800',
				iconBg: 'bg-sky-600',
				icon: 'navigation'
			},
			{
				title: 'Story-first review',
				description:
					'Visual review, markdown notes, JSON structure and debug issue capture stay connected in one flow.',
				palette:
					'from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border-violet-200 dark:border-violet-800',
				iconBg: 'bg-violet-600',
				icon: 'sparkles'
			},
			{
				title: 'Domain diagnostics',
				description:
					'The same surface can sell the library and still lead straight into diagnostics and backlog maintenance.',
				palette:
					'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800',
				iconBg: 'bg-emerald-600',
				icon: 'diagnostics'
			}
		],
		class: className = ''
	} = $props();
</script>

<section class={`c-marketing-feature-grid py-10 ${className}`}>
	<div class="mb-10 text-center">
		<h2 class="mb-3 text-4xl font-black text-gray-900 dark:text-white">{title}</h2>
		<p class="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each features as feature}
			<div class={`rounded-[24px] border-2 bg-gradient-to-br p-7 ${feature.palette}`}>
				<div
					class={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}
				>
					<BaseIcon name={feature.icon} class="h-7 w-7 text-white" />
				</div>
				<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
				<p class="text-gray-600 dark:text-gray-400">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>
