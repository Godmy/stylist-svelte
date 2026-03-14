<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import Skeleton from './index.svelte';

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'variant', type: 'select', options: ['text', 'card', 'image', 'icon'] },
		{ name: 'width', type: 'text', defaultValue: '100%' },
		{ name: 'height', type: 'text' },
		{ name: 'class', type: 'text' }
	];
</script>

<Story component={Skeleton} {controls}>
	{#snippet children()}
		<Skeleton />
	{/snippet}
</Story>





