<script lang="ts">
	import { DOMAIN_SCREEN } from '$stylist/domain/const/value/domain-screen';
	import DomainPlayground from '$stylist/domain/component/page/domain-playground/index.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<DomainPlayground
	tree={data.tree}
	descriptors={data.descriptors}
	initialScreen={DOMAIN_SCREEN.LANDING}
	initialDomain="wbd"
	initialCluster="component"
	initialJoint="atom"
	initialPreviewMode="story"
/>
