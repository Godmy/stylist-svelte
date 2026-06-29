<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeDeviceFrame from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'device',
			type: 'select',
			defaultValue: 'desktop',
			options: ['mobile', 'tablet', 'desktop', 'fullscreen']
		}
	];
</script>

<Story
	component={RecipeDeviceFrame}
	title="Device Frame"
	description="Responsive frame wrapper for previewing content at mobile, tablet, desktop, and fullscreen sizes."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeDeviceFrame device={values.device}>
			<div
				style="min-height: 240px; padding: 24px; background: linear-gradient(135deg, #f8fafc, #e2e8f0); display: grid; place-items: center;"
			>
				<div style="text-align: center; color: #334155;">
					<div style="font-weight: 800; font-size: 20px;">Responsive Preview</div>
					<div style="margin-top: 8px;">Switch the device control to inspect frame sizing.</div>
				</div>
			</div>
		</RecipeDeviceFrame>
	{/snippet}
</Story>
