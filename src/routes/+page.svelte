<script lang="ts">
	import DomainLanding from '$stylist/domain/component/organism/domain-landing/index.svelte';
	import type { PageData } from './$types';

	type StoryModule = { default: unknown };

	const storyModules = import.meta.glob('../lib/**/index.story.svelte') as Record<
		string,
		() => Promise<StoryModule>
	>;

	let { data }: { data: PageData } = $props();
</script>

<DomainLanding tree={data.tree} {storyModules} />
