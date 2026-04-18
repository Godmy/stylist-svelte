import type { FocusTarget } from '$stylist/architecture/interface/slot/focus-target/index';

export function createFocusTarget(initial?: Partial<FocusTarget>) {
	const target = $state<FocusTarget>({
		id: initial?.id ?? '',
		x: initial?.x ?? 0,
		y: initial?.y ?? 0,
		width: initial?.width ?? 0,
		height: initial?.height ?? 0,
		depth: initial?.depth ?? 0
	});

	return {
		get id() { return target.id; },
		get x() { return target.x; },
		get y() { return target.y; },
		get width() { return target.width; },
		get height() { return target.height; },
		get depth() { return target.depth; },
		setId(id: string) { target.id = id; },
		setX(x: number) { target.x = x; },
		setY(y: number) { target.y = y; },
		setWidth(width: number) { target.width = width; },
		setHeight(height: number) { target.height = height; },
		setDepth(depth: number) { target.depth = depth; }
	};
}

export default createFocusTarget;
