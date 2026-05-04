<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitArchitecture from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'opened', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={OrbitArchitecture}
	title="OrbitArchitecture"
	description="Architecture-level token nodes rendered around the inner orbit ring."
>
	{#snippet children(values: any)}
		<div class="grid place-items-center rounded-3xl bg-[linear-gradient(180deg,#e0f2fe,#f8fafc)] p-10">
			<div class="relative h-80 w-80 rounded-full border border-sky-200/70 bg-white/70">
				<OrbitArchitecture opened={Boolean(values.opened)} />
			</div>
		</div>
	{/snippet}
</Story>
