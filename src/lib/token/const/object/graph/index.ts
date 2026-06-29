import type { Token } from '$stylist/token/type/struct/token';
import { SCENE_CAMERA_PRESET } from '$stylist/graph/const/array/scene-camera-preset';

export const TOKEN_GRAPH_SETTING = [
	{ key: 'scene-camera-preset', label: 'Scene Camera Preset', domain: 'graph', controlKind: 'radio', values: SCENE_CAMERA_PRESET }
] satisfies readonly Token[];