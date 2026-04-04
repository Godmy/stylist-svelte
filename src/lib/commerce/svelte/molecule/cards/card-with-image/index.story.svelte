<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import CardWithImage from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



