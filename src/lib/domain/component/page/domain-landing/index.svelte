<script lang="ts">
	import StylistLanding from '$stylist/domain/component/organism/stylist-hero/index.svelte';
	import type { RecipeDomainLanding } from '$stylist/domain/interface/recipe/domain-landing';

	let {
		rootDomainCount = 0,
		storyModuleCount = 0,
		onBrowseComponents,
		onOpenPlayground,
		onOpenWorkspace,
		class: className = ''
	}: RecipeDomainLanding = $props();
</script>

<StylistLanding
	{rootDomainCount}
	{storyModuleCount}
	{onBrowseComponents}
	{onOpenPlayground}
	{onOpenWorkspace}
	class={className}
/>
