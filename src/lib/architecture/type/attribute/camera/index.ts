export type SceneCamera = {
	x: number;
	y: number;
	depth: number;
	zoom: number;
	viewportWidth: number;
	viewportHeight: number;
};

export type SceneCameraInput = Partial<SceneCamera>;
