<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import DomainPlayground from '$stylist/domain/component/page/domain-playground/index.svelte';
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();
	// publicSandbox removes private module globs from the public build.
	const reportFragments = import.meta.glob<{ default: Component }>(
		'/modules/sandbox/tools/src/lib/component/organism/reports-fragment/index.svelte'
	);
	const loadReports = Object.values(reportFragments)[0];
</script>

{#snippet reportContent()}
	{#if loadReports}
		{#await loadReports()}
			<p role="status">Загружаем отчёты…</p>
		{:then module}
			{@const ReportsFragment = module.default}
			<ReportsFragment />
		{:catch}
			<p role="alert">Не удалось загрузить отчёты. Обновите страницу.</p>
		{/await}
	{/if}
{/snippet}

<DomainPlayground
	tree={data.tree}
	reports={loadReports ? reportContent : undefined}
	route={page.url.pathname + page.url.search}
	onNavigate={(url) => {
		void goto(url, { keepFocus: true });
	}}
	initialDomain="html"
	initialCluster="component"
	initialJoint="atom"
	initialPreviewMode="story"
/>
