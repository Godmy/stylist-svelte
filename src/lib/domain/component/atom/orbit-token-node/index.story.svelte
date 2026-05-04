<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitTokenNode from './index.svelte';
	import { L6_TOKEN_DEFINITIONS } from '../../molecule/orbit-control-definitions/index';

	const controls: InterfaceControllerSettings[] = [{ name: 'opened', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={OrbitTokenNode}
	title="OrbitTokenNode"
	description="Token control node that opens a contextual editor inside the orbit shell."
>
	{#snippet children(values: any)}
		<div class="relative h-72 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_center,#dbeafe,#eff6ff_60%,#e2e8f0)]">
			<div class="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/80"></div>
			<OrbitTokenNode
				id="controls"
				icon="controls"
				label="Controls"
				opened={Boolean(values.opened)}
				definition={L6_TOKEN_DEFINITIONS.controls}
				style="transform: rotate(30deg) translate(90px) rotate(-30deg);"
			/>
		</div>
	{/snippet}
</Story>
