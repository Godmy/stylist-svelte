import { resolveSceneAtomBaseColor } from '$stylist/architecture/function/script/scene/material/index';
import { createSceneCubeGeometry } from '$stylist/architecture/function/script/scene/geometry/index';
import { createSceneBoxGeometry } from '$stylist/architecture/function/script/create-scene-box-geometry';
import { createSceneBuffers } from '$stylist/architecture/function/script/create-scene-buffers';
import type { SceneBufferSet } from '$stylist/architecture/type/struct/scene-buffer-set';
import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';

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
