export function projectSceneCoordinate(value: number, offset: number, zoom: number): number {
	return (value - offset) * zoom;
}
