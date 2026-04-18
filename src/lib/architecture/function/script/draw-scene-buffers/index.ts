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

function bindSceneAttributeBuffer(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	buffer: WebGLBuffer,
	data: Float32Array | null,
	location: number
): void {
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

	if (data) {
		gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
	}

	gl.enableVertexAttribArray(location);
	gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
}

function isWebGL2Context(
	gl: WebGLRenderingContext | WebGL2RenderingContext
): gl is WebGL2RenderingContext {
	return 'createVertexArray' in gl;
}
