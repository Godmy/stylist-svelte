<script lang="ts">
	import StylistLanding from '$stylist/marketing/component/organism/stylist-landing/index.svelte';

	let {
		rootDomainCount = 0,
		storyModuleCount = 0,
		onBrowseComponents,
		onOpenPlayground,
		onOpenWorkspace,
		class: className = ''
	}: {
		rootDomainCount?: number;
		storyModuleCount?: number;
		onBrowseComponents?: () => void;
		onOpenPlayground?: () => void;
		onOpenWorkspace?: () => void;
		class?: string;
	} = $props();
</script>

<StylistLanding
	{rootDomainCount}
	{storyModuleCount}
	{onBrowseComponents}
	{onOpenPlayground}
	{onOpenWorkspace}
	class={className}
/>
