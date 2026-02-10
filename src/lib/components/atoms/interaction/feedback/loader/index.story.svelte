<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Loader from './index.svelte';

	// Define the meta information for the story
	const meta = {
		title: 'Atoms/Feedback/Loader',
		component: Loader,
		tags: ['autodocs'],
		parameters: {
			layout: 'centered',
			docs: {
				description: {
					component: 'A loading spinner component that indicates an ongoing process.'
				}
			}
		}
	};

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'class', type: 'text' },
		{ name: 'role', type: 'select', options: ['status', 'progressbar', 'alert', 'alertdialog'] }
	];
</script>

<Story component={Loader} {controls}>
	{#snippet children()}
		<Loader />
	{/snippet}
</Story>
