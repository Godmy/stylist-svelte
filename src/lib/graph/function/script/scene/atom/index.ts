import { resolveSceneAtomBaseColor } from '$stylist/graph/function/script/scene/material/index';
import { createSceneCubeGeometry } from '$stylist/graph/function/script/scene/geometry/index';
import { createSceneBoxGeometry } from '$stylist/graph/function/script/create-scene-box-geometry';
import { createSceneBuffers } from '$stylist/graph/function/script/create-scene-buffers';
import type { SceneBufferSet } from '$stylist/graph/type/struct/scene-buffer-set';
import type { SceneAtom } from '$stylist/graph/type/struct/scene-atom/scene-atom';

export function createSceneAtomBuffers(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	atom: SceneAtom
): SceneBufferSet {
	if (atom.geometry.type === 'cube') {
		return createSceneBuffers(gl, createSceneCubeGeometry());
	}

	return createSceneBuffers(
		gl,
		createSceneBoxGeometry(
			atom.geometry.width ?? 1,
			atom.geometry.height ?? 1,
			atom.geometry.depth ?? 1,
			resolveSceneAtomBaseColor(atom)
		)
	);
}
