<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CardWithImage from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Team Retreat 2026' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Lisbon, Portugal' },
		{ name: 'description', type: 'text', defaultValue: 'Plan agenda, sessions, and travel logistics.' },
		{ name: 'image', type: 'text', defaultValue: '' }
	];
</script>

<Story component={CardWithImage} title="CardWithImage" description="Media-first card with optional footer and action areas." {controls}>
	{#snippet children(values: any)}
		<CardWithImage title={values.title} subtitle={values.subtitle} description={values.description} image={values.image}>
			{#snippet footer()}
				<div class="text-xs text-[--color-text-secondary]">Updated 2 hours ago</div>
			{/snippet}
		</CardWithImage>
	{/snippet}
</Story>
