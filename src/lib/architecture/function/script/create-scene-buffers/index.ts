import type { SceneBufferSet } from '$stylist/architecture/type/struct/scene-buffer-set';
import type { SceneGeometry } from '$stylist/architecture/type/struct/scene-geometry';

export function createSceneBuffers(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	geometry: SceneGeometry
): SceneBufferSet {
	const position = gl.createBuffer();
	const color = gl.createBuffer();

	if (!position || !color) {
		throw new Error('Unable to create scene buffers');
	}

	let vertexArray: WebGLVertexArrayObject | null = null;

	if (isWebGL2Context(gl)) {
		vertexArray = gl.createVertexArray();

		if (vertexArray) {
			gl.bindVertexArray(vertexArray);
			bindSceneAttributeBuffer(gl, position, geometry.positions, 0);
			bindSceneAttributeBuffer(gl, color, geometry.colors, 1);
			gl.bindVertexArray(null);
		}
	} else {
		gl.bindBuffer(gl.ARRAY_BUFFER, position);
		gl.bufferData(gl.ARRAY_BUFFER, geometry.positions, gl.STATIC_DRAW);
		gl.bindBuffer(gl.ARRAY_BUFFER, color);
		gl.bufferData(gl.ARRAY_BUFFER, geometry.colors, gl.STATIC_DRAW);
	}

	return {
		position,
		color,
		vertexArray,
		vertexCount: geometry.vertexCount
	};
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
