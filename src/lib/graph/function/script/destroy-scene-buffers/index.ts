import { isWebGL2Context } from '$stylist/graph/function/script/is-webgl2-context';
import type { SceneBufferSet } from '$stylist/graph/type/struct/scene-buffer-set';

export function destroySceneBuffers(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	buffers: SceneBufferSet | null
): void {
	if (!buffers) return;

	gl.deleteBuffer(buffers.position);
	gl.deleteBuffer(buffers.color);

	if (buffers.vertexArray && isWebGL2Context(gl)) {
		gl.deleteVertexArray(buffers.vertexArray);
	}
}
