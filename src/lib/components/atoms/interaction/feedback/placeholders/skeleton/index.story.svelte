<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Skeleton from './index.svelte';

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'variant', type: 'select', options: ['text', 'circular', 'rectangular'] },
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



