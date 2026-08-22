<script lang="ts">
	import StylistLanding from '$stylist/domain/component/organism/stylist-hero/index.svelte';

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
