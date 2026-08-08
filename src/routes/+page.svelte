<script lang="ts">
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import DomainWorkspaceShell from '$stylist/domain/component/page/page-domain/index.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<DomainWorkspaceShell
	tree={data.tree}
	descriptors={data.descriptors}
	initialScreen={DOMAIN_SCREEN_DOMAIN}
	initialDomain="wbd"
	initialCluster="component"
	initialJoint="atom"
	initialPreviewMode="story"
/>
