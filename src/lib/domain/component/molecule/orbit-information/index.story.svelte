<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitInformation from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'opened', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={OrbitInformation}
	title="OrbitInformation"
	description="Information-level token nodes rendered on the middle orbit ring."
>
	{#snippet children(values: any)}
		<div class="grid place-items-center rounded-3xl bg-[linear-gradient(180deg,#ecfeff,#f8fafc)] p-10">
			<div class="relative h-80 w-80 rounded-full border border-cyan-200/70 bg-white/70">
				<OrbitInformation opened={Boolean(values.opened)} />
			</div>
		</div>
	{/snippet}
</Story>
