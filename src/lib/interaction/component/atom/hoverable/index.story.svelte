<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Hoverable from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'hoverEffect', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];

	let hoverLabel = $state('waiting for pointer');
</script>

<Story
	{controls}
	component={Hoverable}
	title="Hoverable"
	description="Pointer hover wrapper with simple state feedback."
>
	{#snippet children(values: any)}
		<div class="rounded-3xl bg-slate-50 p-6">
			<Hoverable
				hoverEffect={Boolean(values.hoverEffect)}
				disabled={Boolean(values.disabled)}
				class="block rounded-2xl border border-slate-200 bg-white p-2"
				onMouseEnter={() => {
					hoverLabel = 'pointer entered';
				}}
				onMouseLeave={() => {
					hoverLabel = 'pointer left';
				}}
			>
				{#snippet children()}
					<div class="min-h-28 content-center rounded-xl bg-sky-50 px-4 text-center font-medium text-sky-950">
						Hover the surface
					</div>
				{/snippet}
			</Hoverable>
			<p class="mt-4 text-sm text-slate-500">State: {hoverLabel}</p>
		</div>
	{/snippet}
</Story>
