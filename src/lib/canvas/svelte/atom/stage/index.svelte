<script lang="ts">
	import type { StageContract } from '$stylist/canvas/type/struct/stage';
	import { StageStyleManager } from '$stylist/canvas/class/style-manager/stage';

	type StageProps = StageContract & {
		camera: { x: number; y: number; zoom: number };
		worldWidth?: number;
		worldHeight?: number;
	};

	const contract: StageProps = $props();
	const { camera, worldWidth = 10000, worldHeight = 10000 } = contract;
	const classString = typeof contract.class === 'string' ? contract.class : undefined;
</script>

<div class={StageStyleManager.getStageClass(classString)} style={StageStyleManager.getWorldStyle(worldWidth, worldHeight)}>
	<div
		class={StageStyleManager.getWorldClass()}
		style={StageStyleManager.getTransformStyle(camera.x, camera.y, camera.zoom)}
	>
		{@render contract.children?.()}
	</div>
</div>
