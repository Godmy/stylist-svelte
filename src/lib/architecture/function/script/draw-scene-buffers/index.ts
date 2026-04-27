import { bindSceneAttributeBuffer } from '$stylist/architecture/function/script/bind-scene-attribute-buffer';
import { isWebGL2Context } from '$stylist/architecture/function/script/is-webgl2-context';
import { Matrix4 } from '$stylist/architecture/class/object-manager/matrix4';
import type { SceneBufferSet } from '$stylist/architecture/type/struct/scene-buffer-set';

export function drawSceneBuffers(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	buffers: SceneBufferSet,
	modelLocation: WebGLUniformLocation | null,
	modelMatrix: Matrix4,
	tintColorLocation?: WebGLUniformLocation | null,
	tintStrengthLocation?: WebGLUniformLocation | null,
	tintColor?: readonly [number, number, number],
	tintStrength = 0
): void {
	if (buffers.vertexArray && isWebGL2Context(gl)) {
		gl.bindVertexArray(buffers.vertexArray);
	} else {
		bindSceneAttributeBuffer(gl, buffers.position, null, 0);
		bindSceneAttributeBuffer(gl, buffers.color, null, 1);
	}

	gl.uniformMatrix4fv(modelLocation, false, modelMatrix.toArray());

	if (tintColorLocation) {
		gl.uniform3fv(tintColorLocation, tintColor ?? [1, 1, 1]);
	}

	if (tintStrengthLocation) {
		gl.uniform1f(tintStrengthLocation, tintStrength);
	}

	gl.drawArrays(gl.TRIANGLES, 0, buffers.vertexCount);
}
