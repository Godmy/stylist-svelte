export function bindSceneAttributeBuffer(
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
