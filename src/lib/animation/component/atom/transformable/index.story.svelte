<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Transformable from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'scale', type: 'range', defaultValue: 1.08, min: 0.7, max: 1.4, step: 0.01 },
		{ name: 'rotate', type: 'range', defaultValue: 6, min: -20, max: 20, step: 1 },
		{ name: 'translateY', type: 'range', defaultValue: -6, min: -24, max: 24, step: 1 },
		{ name: 'animateOnHover', type: 'boolean', defaultValue: true },
		{ name: 'animateOnClick', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Transformable}
	title="Transformable"
	description="Applies transform contracts and optional hover or press motion."
>
	{#snippet children(values: any)}
		<div class="rounded-3xl bg-[linear-gradient(135deg,#e0f2fe,#f8fafc)] p-8">
			<Transformable
				scale={Number(values.scale)}
				rotate={Number(values.rotate)}
				translateY={Number(values.translateY)}
				translateX={0}
				skewX={0}
				skewY={0}
				transformOrigin="center center"
				animateOnHover={Boolean(values.animateOnHover)}
				animateOnClick={Boolean(values.animateOnClick)}
				class="mx-auto max-w-72 rounded-2xl border border-sky-200 bg-white p-6 shadow-lg"
			>
				{#snippet children()}
					<div class="grid gap-2 text-center">
						<strong class="text-slate-900">Hover the card</strong>
						<p class="text-sm text-slate-500">Use the controls to change the motion contract.</p>
					</div>
				{/snippet}
			</Transformable>
		</div>
	{/snippet}
</Story>
