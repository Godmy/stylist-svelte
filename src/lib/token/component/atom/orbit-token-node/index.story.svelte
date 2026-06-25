<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitTokenNode from './index.svelte';
	import { L6_TOKEN_DEFINITIONS } from '$stylist/token/const/object/orbit-control-definition';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	title="OrbitTokenNode"
	description="Token control node that opens a contextual editor inside the orbit shell."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<div class="token-story-orbit"></div>
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

<style>
	.token-story-stage {
		position: relative;
		min-height: 18rem;
		overflow: hidden;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
	}
	.token-story-orbit {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 11rem;
		width: 11rem;
		transform: translate(-50%, -50%);
		border-radius: 9999px;
		border: 1px dashed #93c5fd;
	}
</style>
