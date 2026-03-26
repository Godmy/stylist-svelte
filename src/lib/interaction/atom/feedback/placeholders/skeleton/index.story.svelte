<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import Skeleton from './index.svelte';

	// Define controls for the story
	const controls: InterfaceControllerSettings[] = [
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






