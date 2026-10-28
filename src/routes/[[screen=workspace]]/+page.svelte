<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import DomainPlayground from '$stylist/domain/component/page/domain-playground/index.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<DomainPlayground
	tree={data.tree}
	route={page.url.pathname + page.url.search}
	onNavigate={(url) => {
		void goto(url, { keepFocus: true });
	}}
	initialDomain="html"
	initialCluster="component"
	initialJoint="atom"
	initialPreviewMode="story"
/>
