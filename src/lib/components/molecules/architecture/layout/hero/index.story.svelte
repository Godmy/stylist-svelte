<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Hero from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Ship Features Faster' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Design, build, and deploy with a unified workflow.' },
		{ name: 'backgroundVariant', type: 'select', defaultValue: 'gradient', options: ['gradient', 'image', 'particles'] },
		{ name: 'height', type: 'select', defaultValue: 'screen', options: ['auto', 'half', 'screen'] }
	];

	const stats = [
		{ label: 'Projects', value: 124 },
		{ label: 'Teams', value: 36 },
		{ label: 'Deploys/week', value: 290 }
	];
</script>

<Story component={Hero} title="Hero" description="Large header section with title, stats, and CTAs." {controls}>
	{#snippet children(values: any)}
		<Hero {...({
			title: values.title,
			subtitle: values.subtitle,
			backgroundVariant: values.backgroundVariant,
			height: values.height,
			backgroundImage: '',
			stats,
			primaryCTA: { label: 'Get started', onClick: () => {} },
			secondaryCTA: { label: 'View docs', onClick: () => {} },
			children: undefined
		} as any)} />
	{/snippet}
</Story>
