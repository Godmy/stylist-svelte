import { compileSceneShader } from '$stylist/architecture/function/script/compile-scene-shader';

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
