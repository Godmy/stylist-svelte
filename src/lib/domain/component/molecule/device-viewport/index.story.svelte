<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DeviceViewport from './index.svelte';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';

	let value = $state<DeviceFrameViewport>('desktop');
</script>

<Story
	component={DeviceViewport}
	title="DeviceViewport"
	description="Mobile/tablet/desktop/fullscreen viewport switcher shown next to DomainMenu during playground preview."
>
	{#snippet children()}
		<div class="_c1">
			<DeviceViewport {value} onChange={(next) => (value = next)} />
			<p class="_c2">Selected: {value}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.75rem;
		justify-items: start;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		color: #64748b;
	}
</style>
