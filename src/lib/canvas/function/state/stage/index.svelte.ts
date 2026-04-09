import { StageStyleManager } from '$stylist/canvas/class/style-manager/stage';
import type { StageProps } from '$stylist/canvas/type/struct/stage/stage-props';

export function createStageState(props: StageProps) {
	const camera = $derived(props.camera);
	const worldWidth = $derived(props.worldWidth ?? 10000);
	const worldHeight = $derived(props.worldHeight ?? 10000);
	const classes = $derived(StageStyleManager.getStageClass(typeof props.class === 'string' ? props.class : undefined));
	const worldClass = $derived(StageStyleManager.getWorldClass());
	const worldStyle = $derived(StageStyleManager.getWorldStyle(worldWidth, worldHeight));
	const transformStyle = $derived(StageStyleManager.getTransformStyle(camera.x, camera.y, camera.zoom));
	const restProps = $derived.by(() => {
		const { class: _class, camera: _camera, worldWidth: _worldWidth, worldHeight: _worldHeight, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get camera() { return camera; },
		get worldWidth() { return worldWidth; },
		get worldHeight() { return worldHeight; },
		get classes() { return classes; },
		get worldClass() { return worldClass; },
		get worldStyle() { return worldStyle; },
		get transformStyle() { return transformStyle; },
		get restProps() { return restProps; }
	};
}

export default createStageState;
