export function isWebGL2Context(
	gl: WebGLRenderingContext | WebGL2RenderingContext
): gl is WebGL2RenderingContext {
	return 'createVertexArray' in gl;
}
