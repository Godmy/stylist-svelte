<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import ArticleCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Shipping Design Systems at Scale' },
		{ name: 'subtitle', type: 'text', defaultValue: 'How teams align product and engineering.' },
		{ name: 'image', type: 'text', defaultValue: '' }
	];
</script>

<Story component={ArticleCard} title="ArticleCard" description="Content preview card for editorial and blog entries." {controls}>
	{#snippet children(values: any)}
		<ArticleCard
			title={values.title}
			subtitle={values.subtitle}
			image={values.image}
			actions={[{ label: 'Read', onClick: () => {} }]}
		/>
	{/snippet}
</Story>



