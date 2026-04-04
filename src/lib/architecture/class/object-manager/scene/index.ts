import { Camera } from '$stylist/architecture/function/script/camera';
import { Matrix4 } from '$stylist/architecture/function/script/matrix4';
import {
	clampSceneRadius,
	clampSceneVerticalAngle,
	createSceneBuffers,
	createSceneCubeGeometry,
	createSceneProgram,
	createSceneRoomGeometry,
	destroySceneBuffers,
	drawSceneBuffers
} from '$stylist/architecture/function/script/scene/geometry/index';
import type { SceneBufferSet } from '$stylist/architecture/type/struct/scene/scene';
import vertexBasic from '$stylist/architecture/data/shaders/vert/basic.vert?raw';
import fragmentBasic from '$stylist/architecture/data/shaders/frag/basic.frag?raw';

export class SceneObjectManager {
	private canvas: HTMLCanvasElement | null = null;
	private gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
	private animationFrameId: number | null = null;
	private program: WebGLProgram | null = null;
	private cubeBuffers: SceneBufferSet | null = null;
	private roomBuffers: SceneBufferSet | null = null;
	private modelLocation: WebGLUniformLocation | null = null;
	private viewLocation: WebGLUniformLocation | null = null;
	private projectionLocation: WebGLUniformLocation | null = null;
	private camera: Camera | null = null;
	private horizontalAngle = 0;
	private verticalAngle = Math.PI / 6;
	private radius = 15;
	private cubeRotation = 0;
	private isDragging = false;
	private lastMouseX = 0;
	private lastMouseY = 0;

	start(canvas: HTMLCanvasElement): void {
		if (this.canvas === canvas && this.gl) {
			return;
		}

		this.stop();
		this.canvas = canvas;
		this.gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

		if (!this.gl) {
			throw new Error('WebGL is not supported');
		}

		this.program = createSceneProgram(this.gl, vertexBasic, fragmentBasic);
		this.gl.useProgram(this.program);

		this.modelLocation = this.gl.getUniformLocation(this.program, 'uModelMatrix');
		this.viewLocation = this.gl.getUniformLocation(this.program, 'uViewMatrix');
		this.projectionLocation = this.gl.getUniformLocation(this.program, 'uProjectionMatrix');

		this.cubeBuffers = createSceneBuffers(this.gl, createSceneCubeGeometry());
		this.roomBuffers = createSceneBuffers(this.gl, createSceneRoomGeometry());
		this.camera = new Camera([0, 5, 15], [0, 0, 0], [0, 1, 0]);

		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.clearColor(0.1, 0.1, 0.1, 1);

		this.canvas.addEventListener('mousedown', this.handleMouseDown);
		this.canvas.addEventListener('mousemove', this.handleMouseMove);
		this.canvas.addEventListener('mouseup', this.handleMouseUp);
		this.canvas.addEventListener('mouseleave', this.handleMouseUp);
		this.canvas.addEventListener('wheel', this.handleWheel, { passive: false });

		this.render();
	}

	stop(): void {
		if (this.animationFrameId != null) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}

		if (this.canvas) {
			this.canvas.removeEventListener('mousedown', this.handleMouseDown);
			this.canvas.removeEventListener('mousemove', this.handleMouseMove);
			this.canvas.removeEventListener('mouseup', this.handleMouseUp);
			this.canvas.removeEventListener('mouseleave', this.handleMouseUp);
			this.canvas.removeEventListener('wheel', this.handleWheel);
		}

		if (this.gl) {
			destroySceneBuffers(this.gl, this.cubeBuffers);
			destroySceneBuffers(this.gl, this.roomBuffers);

			if (this.program) {
				this.gl.deleteProgram(this.program);
			}
		}

		this.canvas = null;
		this.gl = null;
		this.program = null;
		this.cubeBuffers = null;
		this.roomBuffers = null;
		this.modelLocation = null;
		this.viewLocation = null;
		this.projectionLocation = null;
		this.camera = null;
		this.isDragging = false;
	}

	private readonly handleMouseDown = (event: MouseEvent): void => {
		this.isDragging = true;
		this.lastMouseX = event.clientX;
		this.lastMouseY = event.clientY;
	};

	private readonly handleMouseMove = (event: MouseEvent): void => {
		if (!this.isDragging || !this.camera) {
			return;
		}

		const deltaX = event.clientX - this.lastMouseX;
		const deltaY = event.clientY - this.lastMouseY;

		this.horizontalAngle += deltaX * 0.01;
		this.verticalAngle = clampSceneVerticalAngle(this.verticalAngle + deltaY * 0.01);
		this.camera.rotateAroundTarget(this.horizontalAngle, this.verticalAngle, this.radius);

		this.lastMouseX = event.clientX;
		this.lastMouseY = event.clientY;
	};

	private readonly handleMouseUp = (): void => {
		this.isDragging = false;
	};

	private readonly handleWheel = (event: WheelEvent): void => {
		if (!this.camera) {
			return;
		}

		event.preventDefault();
		this.radius = clampSceneRadius(this.radius + event.deltaY * 0.01);
		this.camera.rotateAroundTarget(this.horizontalAngle, this.verticalAngle, this.radius);
	};

	private readonly render = (): void => {
		if (
			!this.canvas ||
			!this.gl ||
			!this.camera ||
			!this.roomBuffers ||
			!this.cubeBuffers ||
			!this.viewLocation ||
			!this.projectionLocation
		) {
			return;
		}

		this.syncCanvasSize();
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		this.cubeRotation += 0.01;

		const viewMatrix = this.camera.getViewMatrix();
		const projectionMatrix = this.camera.getProjectionMatrix();

		this.gl.uniformMatrix4fv(this.viewLocation, false, viewMatrix.toArray());
		this.gl.uniformMatrix4fv(this.projectionLocation, false, projectionMatrix.toArray());

		drawSceneBuffers(this.gl, this.roomBuffers, this.modelLocation, new Matrix4());
		drawSceneBuffers(
			this.gl,
			this.cubeBuffers,
			this.modelLocation,
			Matrix4.rotateY(this.cubeRotation).multiply(Matrix4.rotateX(this.cubeRotation * 0.5))
		);

		this.animationFrameId = requestAnimationFrame(this.render);
	};

	private syncCanvasSize(): void {
		if (!this.canvas || !this.gl || !this.camera) {
			return;
		}

		const displayWidth = this.canvas.clientWidth;
		const displayHeight = this.canvas.clientHeight;

		if (displayWidth <= 0 || displayHeight <= 0) {
			return;
		}

		if (this.canvas.width === displayWidth && this.canvas.height === displayHeight) {
			return;
		}

		this.canvas.width = displayWidth;
		this.canvas.height = displayHeight;
		this.gl.viewport(0, 0, displayWidth, displayHeight);
		this.camera.setAspect(displayWidth / displayHeight);
	}
}
