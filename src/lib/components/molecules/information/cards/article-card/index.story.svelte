<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ArticleCard from './index.svelte';

	const controls: ControlConfig[] = [
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
