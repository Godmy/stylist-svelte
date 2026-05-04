<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitBackground from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'opened', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={OrbitBackground}
	title="OrbitBackground"
	description="Concentric orbit stage used to host token control nodes."
>
	{#snippet children(values: any)}
		<div class="grid place-items-center rounded-3xl bg-[linear-gradient(180deg,#e0f2fe,#f8fafc)] p-10">
			<OrbitBackground opened={Boolean(values.opened)}>
				{#snippet children()}
					<div class="grid place-items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
						Orbit center
					</div>
				{/snippet}
			</OrbitBackground>
		</div>
	{/snippet}
</Story>
