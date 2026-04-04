<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import PostCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Release Notes v2.8' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Performance, stability, and DX upgrades.' },
		{ name: 'author', type: 'text', defaultValue: 'Platform Team' },
		{ name: 'date', type: 'text', defaultValue: '2026-02-21' }
	];
</script>

<Story component={PostCard} title="PostCard" description="Editorial/news card with metadata and tags." {controls}>
	{#snippet children(values: any)}
		<PostCard
			title={values.title}
			subtitle={values.subtitle}
			author={values.author}
			date={values.date}
			excerpt="Improved caching, refined stories, and fixed interaction edge-cases."
			tags={['release', 'frontend']}
			actions={[{ label: 'Open', onClick: () => {} }]}
		/>
	{/snippet}
</Story>



