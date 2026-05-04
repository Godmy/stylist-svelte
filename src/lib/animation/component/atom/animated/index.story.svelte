<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Animated from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'from', type: 'number', defaultValue: 1250 },
		{ name: 'to', type: 'number', defaultValue: 9875 },
		{ name: 'prefix', type: 'text', defaultValue: '$' },
		{ name: 'suffix', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={Animated}
	title="Animated"
	description="Animates a numeric value and renders the formatted result."
>
	{#snippet children(values: any)}
		<div class="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
			<p class="text-sm text-slate-500">Revenue target</p>
			<Animated
				from={Number(values.from)}
				to={Number(values.to)}
				format={(value) => `${values.prefix}${Math.round(value).toLocaleString()}${values.suffix}`}
				class="text-4xl font-semibold tracking-tight text-slate-900"
			/>
		</div>
	{/snippet}
</Story>
