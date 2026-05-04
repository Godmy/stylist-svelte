<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Breadcrumbs from './index.svelte';
	import BreadcrumbLink from '../breadcrumb-link/index.svelte';
	import BreadcrumbSeparator from '../breadcrumb-separator/index.svelte';
</script>

<Story
	component={Breadcrumbs}
	title="Breadcrumbs Atom"
	description="Low-level breadcrumb navigation container for custom breadcrumb compositions."
>
	{#snippet children()}
		<div class="rounded-3xl border border-slate-200 bg-white p-6">
			<Breadcrumbs class="flex flex-wrap items-center gap-2 text-sm text-slate-500">
				{#snippet children()}
					<BreadcrumbLink href="/domain">domain</BreadcrumbLink>
					<BreadcrumbSeparator />
					<BreadcrumbLink href="/domain/interaction">interaction</BreadcrumbLink>
					<BreadcrumbSeparator />
					<span class="font-medium text-slate-900">clickable</span>
				{/snippet}
			</Breadcrumbs>
		</div>
	{/snippet}
</Story>
