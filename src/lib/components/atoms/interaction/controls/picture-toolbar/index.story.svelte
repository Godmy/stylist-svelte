<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import PictureToolbar from './PictureToolbar.svelte';

	type Props = {
		activeTool: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'activeTool',
			type: 'select',
			options: ['crop', 'rotate', 'zoom', 'filter'],
			defaultValue: 'crop'
		}
	];
</script>

<Story component={PictureToolbar} {controls}>
	{#snippet children()}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">PictureToolbar Story</h2>
			<PictureToolbar
				tools={[
					{ id: 'crop', label: 'Crop' },
					{ id: 'rotate', label: 'Rotate' },
					{ id: 'zoom', label: 'Zoom' },
					{ id: 'filter', label: 'Filter' }
				]}
				activeTool="crop"
				onToolSelect={(toolId: string) => console.log('Tool selected:', toolId)}
			/>
		</div>
	{/snippet}
</Story>
