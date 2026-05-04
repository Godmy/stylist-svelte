<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OpenIcon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orbitOpen', type: 'boolean', defaultValue: false },
		{ name: 'dragging', type: 'boolean', defaultValue: false }
	];

	let toggles = $state(0);
</script>

<Story
	{controls}
	component={OpenIcon}
	title="OpenIcon"
	description="Seed button that toggles the orbit panel between closed and opened states."
>
	{#snippet children(values: any)}
		<div class="relative h-48 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e3a8a)] p-8">
			<OpenIcon
				orbitOpen={Boolean(values.orbitOpen)}
				dragging={Boolean(values.dragging)}
				style="left: 64px; top: 72px;"
				onClick={() => {
					toggles += 1;
				}}
			/>
			<p class="absolute bottom-4 left-6 text-sm text-blue-100">Toggle clicks: {toggles}</p>
		</div>
	{/snippet}
</Story>
