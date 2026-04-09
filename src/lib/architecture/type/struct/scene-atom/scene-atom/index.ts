export type SceneAtom = {
	id: string;
	kind: import('../../scene-atom-kind').SceneAtomKind;
	geometry: import('../../scene-atom-geometry').SceneAtomGeometry;
	material?: import('../../scene-material').SceneMaterial;
	transform: import('../../scene-atom-transform').SceneAtomTransform;
	motion?: import('../../scene-atom-motion').SceneAtomMotion;
	metadata?: import('../../scene-atom-metadata').SceneAtomMetadata;
	moleculeId?: string;
	selectable?: boolean;
	boundsRadius?: number;
	visible?: boolean;
};
