<script lang="ts">
	import Story from './index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'titleText', type: 'text', defaultValue: 'Live preview title' },
		{ name: 'showAccent', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={Story}
	title="Story"
	description="Playground wrapper with live controls and an optional variants slot."
>
	{#snippet children(values: any)}
		<div class="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5">
			<div class="flex items-center gap-3">
				<span class:hidden={!values.showAccent} class="h-3 w-3 rounded-full bg-emerald-500"></span>
				<strong class="text-slate-900">{values.titleText as string}</strong>
			</div>
			<p class="text-sm text-slate-500">This inner preview reacts to the Story control panel on the right.</p>
		</div>
	{/snippet}

	{#snippet variants()}
		<div class="grid gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
			<p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Variants slot</p>
			<div class="flex gap-2">
				<span class="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Default</span>
				<span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Success</span>
			</div>
		</div>
	{/snippet}
</Story>
