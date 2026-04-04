import { Matrix4 } from '$stylist/architecture/function/script/matrix4';
import type { SceneBufferSet, SceneGeometry } from '$stylist/architecture/type/struct/scene/scene';

export function createSceneCubeGeometry(): SceneGeometry {
	const positions = new Float32Array([
		-1, -1, 1, 1, -1, 1, 1, 1, 1,
		-1, -1, 1, 1, 1, 1, -1, 1, 1,
		-1, -1, -1, -1, 1, -1, 1, 1, -1,
		-1, -1, -1, 1, 1, -1, 1, -1, -1,
		-1, 1, -1, -1, 1, 1, 1, 1, 1,
		-1, 1, -1, 1, 1, 1, 1, 1, -1,
		-1, -1, -1, 1, -1, -1, 1, -1, 1,
		-1, -1, -1, 1, -1, 1, -1, -1, 1,
		1, -1, -1, 1, 1, -1, 1, 1, 1,
		1, -1, -1, 1, 1, 1, 1, -1, 1,
		-1, -1, -1, -1, -1, 1, -1, 1, 1,
		-1, -1, -1, -1, 1, 1, -1, 1, -1
	]);

	const colors = new Float32Array([
		1, 0, 0, 1, 0, 0, 1, 0, 0,
		1, 0, 0, 1, 0, 0, 1, 0, 0,
		0, 1, 0, 0, 1, 0, 0, 1, 0,
		0, 1, 0, 0, 1, 0, 0, 1, 0,
		0, 0, 1, 0, 0, 1, 0, 0, 1,
		0, 0, 1, 0, 0, 1, 0, 0, 1,
		1, 1, 0, 1, 1, 0, 1, 1, 0,
		1, 1, 0, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 0, 1, 1, 0, 1, 1,
		0, 1, 1, 0, 1, 1, 0, 1, 1,
		1, 0, 1, 1, 0, 1, 1, 0, 1,
		1, 0, 1, 1, 0, 1, 1, 0, 1
	]);

	return { positions, colors, vertexCount: 36 };
}

export function createSceneRoomGeometry(size = 20): SceneGeometry {
	const halfSize = size / 2;
	const positions = new Float32Array([
		-halfSize, -halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize,
		-halfSize, halfSize, -halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize,
		-halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, halfSize, -halfSize,
		-halfSize, -halfSize, -halfSize, halfSize, halfSize, -halfSize, halfSize, -halfSize, -halfSize,
		-halfSize, -halfSize, halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize,
		-halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize, halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, halfSize, -halfSize, -halfSize, halfSize,
		halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize,
		halfSize, -halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize
	]);

	const colors = new Float32Array([
		0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3,
		0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
		...Array(72).fill(0.4)
	]);

	return { positions, colors, vertexCount: 36 };
}

export function clampSceneVerticalAngle(angle: number): number {
	return Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, angle));
}

export function clampSceneRadius(radius: number): number {
	return Math.max(2, Math.min(50, radius));
}

export function createSceneProgram(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	vertexSource: string,
	fragmentSource: string
): WebGLProgram {
	const vertexShader = compileSceneShader(gl, vertexSource, gl.VERTEX_SHADER);
	const fragmentShader = compileSceneShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
	const program = gl.createProgram();

	if (!program) {
		throw new Error('Unable to create scene program');
	}

	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		const error = gl.getProgramInfoLog(program);
		gl.deleteProgram(program);
		gl.deleteShader(vertexShader);
		gl.deleteShader(fragmentShader);
		throw new Error(`Unable to link scene program: ${error}`);
	}

	gl.deleteShader(vertexShader);
	gl.deleteShader(fragmentShader);

	return program;
}

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

export function drawSceneBuffers(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	buffers: SceneBufferSet,
	modelLocation: WebGLUniformLocation | null,
	modelMatrix: Matrix4
): void {
	if (buffers.vertexArray && isWebGL2Context(gl)) {
		gl.bindVertexArray(buffers.vertexArray);
	} else {
		bindSceneAttributeBuffer(gl, buffers.position, null, 0);
		bindSceneAttributeBuffer(gl, buffers.color, null, 1);
	}

	gl.uniformMatrix4fv(modelLocation, false, modelMatrix.toArray());
	gl.drawArrays(gl.TRIANGLES, 0, buffers.vertexCount);
}

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

function compileSceneShader(
	gl: WebGLRenderingContext | WebGL2RenderingContext,
	source: string,
	type: number
): WebGLShader {
	const shader = gl.createShader(type);

	if (!shader) {
		throw new Error('Unable to create scene shader');
	}

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const error = gl.getShaderInfoLog(shader);
		gl.deleteShader(shader);
		throw new Error(`Unable to compile scene shader: ${error}`);
	}

	return shader;
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
