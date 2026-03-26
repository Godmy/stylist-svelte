<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Matrix4 } from '$lib/architecture/function/matrix4';
  import { Camera } from '$lib/architecture/function/camera';
  import vertexBasic from '$lib/architecture/data/shaders/vert/basic.vert?raw';
  import fragmentBasic from '$lib/information/data/shaders/frag/basic.frag?raw';

  let canvas: HTMLCanvasElement;
  let gl: WebGL2RenderingContext | WebGLRenderingContext | null = null;
  let animationFrameId: number | null = null;

  // Программа и буферы
  let program: WebGLProgram | null = null;
  let cubeBuffers: {
    position: WebGLBuffer;
    color: WebGLBuffer;
    vertexArray: WebGLVertexArrayObject | null;
  } | null = null;
  let roomBuffers: {
    position: WebGLBuffer;
    color: WebGLBuffer;
    vertexArray: WebGLVertexArrayObject | null;
  } | null = null;

  // Uniform locations
  let modelLocation: WebGLUniformLocation | null = null;
  let viewLocation: WebGLUniformLocation | null = null;
  let projectionLocation: WebGLUniformLocation | null = null;

  // Камера
  let camera: Camera | null = null;
  let horizontalAngle = 0;
  let verticalAngle = Math.PI / 6;
  let radius = 15;

  // Вращение куба
  let cubeRotation = 0;

  // Флаг инициализации
  let isInitialized = false;

  // Геометрия куба (6 граней, 36 вершин)
  function createCubeGeometry(): { positions: Float32Array; colors: Float32Array } {
    const positions = new Float32Array([
      // Front face (red)
      -1, -1,  1,   1, -1,  1,   1,  1,  1,
      -1, -1,  1,   1,  1,  1,  -1,  1,  1,
      // Back face (green)
      -1, -1, -1,  -1,  1, -1,   1,  1, -1,
      -1, -1, -1,   1,  1, -1,   1, -1, -1,
      // Top face (blue)
      -1,  1, -1,  -1,  1,  1,   1,  1,  1,
      -1,  1, -1,   1,  1,  1,   1,  1, -1,
      // Bottom face (yellow)
      -1, -1, -1,   1, -1, -1,   1, -1,  1,
      -1, -1, -1,   1, -1,  1,  -1, -1,  1,
      // Right face (cyan)
       1, -1, -1,   1,  1, -1,   1,  1,  1,
       1, -1, -1,   1,  1,  1,   1, -1,  1,
      // Left face (magenta)
      -1, -1, -1,  -1, -1,  1,  -1,  1,  1,
      -1, -1, -1,  -1,  1,  1,  -1,  1, -1,
    ]);

    const colors = new Float32Array([
      // Front face (red)
      1, 0, 0,   1, 0, 0,   1, 0, 0,
      1, 0, 0,   1, 0, 0,   1, 0, 0,
      // Back face (green)
      0, 1, 0,   0, 1, 0,   0, 1, 0,
      0, 1, 0,   0, 1, 0,   0, 1, 0,
      // Top face (blue)
      0, 0, 1,   0, 0, 1,   0, 0, 1,
      0, 0, 1,   0, 0, 1,   0, 0, 1,
      // Bottom face (yellow)
      1, 1, 0,   1, 1, 0,   1, 1, 0,
      1, 1, 0,   1, 1, 0,   1, 1, 0,
      // Right face (cyan)
      0, 1, 1,   0, 1, 1,   0, 1, 1,
      0, 1, 1,   0, 1, 1,   0, 1, 1,
      // Left face (magenta)
      1, 0, 1,   1, 0, 1,   1, 0, 1,
      1, 0, 1,   1, 0, 1,   1, 0, 1,
    ]);

    return { positions, colors };
  }

  // Геометрия комнаты (пол, потолок, 4 стены)
  function createRoomGeometry(): { positions: Float32Array; colors: Float32Array } {
    const size = 20;
    const halfSize = size / 2;

    const positions = new Float32Array([
      // Floor (dark gray)
      -halfSize, -halfSize, -halfSize,
       halfSize, -halfSize, -halfSize,
       halfSize, -halfSize,  halfSize,
      -halfSize, -halfSize, -halfSize,
       halfSize, -halfSize,  halfSize,
      -halfSize, -halfSize,  halfSize,

      // Ceiling (light gray)
      -halfSize,  halfSize, -halfSize,
      -halfSize,  halfSize,  halfSize,
       halfSize,  halfSize,  halfSize,
      -halfSize,  halfSize, -halfSize,
       halfSize,  halfSize,  halfSize,
       halfSize,  halfSize, -halfSize,

      // Back wall (gray)
      -halfSize, -halfSize, -halfSize,
      -halfSize,  halfSize, -halfSize,
       halfSize,  halfSize, -halfSize,
      -halfSize, -halfSize, -halfSize,
       halfSize,  halfSize, -halfSize,
       halfSize, -halfSize, -halfSize,

      // Front wall (gray)
      -halfSize, -halfSize,  halfSize,
       halfSize, -halfSize,  halfSize,
       halfSize,  halfSize,  halfSize,
      -halfSize, -halfSize,  halfSize,
       halfSize,  halfSize,  halfSize,
      -halfSize,  halfSize,  halfSize,

      // Left wall (gray)
      -halfSize, -halfSize, -halfSize,
      -halfSize,  halfSize, -halfSize,
      -halfSize,  halfSize,  halfSize,
      -halfSize, -halfSize, -halfSize,
      -halfSize,  halfSize,  halfSize,
      -halfSize, -halfSize,  halfSize,

      // Right wall (gray)
       halfSize, -halfSize, -halfSize,
       halfSize, -halfSize,  halfSize,
       halfSize,  halfSize,  halfSize,
       halfSize, -halfSize, -halfSize,
       halfSize,  halfSize,  halfSize,
       halfSize,  halfSize, -halfSize,
    ]);

    const colors = new Float32Array([
      // Floor (dark gray)
      0.3, 0.3, 0.3,   0.3, 0.3, 0.3,   0.3, 0.3, 0.3,
      0.3, 0.3, 0.3,   0.3, 0.3, 0.3,   0.3, 0.3, 0.3,

      // Ceiling (light gray)
      0.5, 0.5, 0.5,   0.5, 0.5, 0.5,   0.5, 0.5, 0.5,
      0.5, 0.5, 0.5,   0.5, 0.5, 0.5,   0.5, 0.5, 0.5,

      // Walls (gray)
      ...Array(72).fill(0.4),
    ]);

    return { positions, colors };
  }

  // Компиляция шейдера
  function compileShader(source: string, type: number): WebGLShader {
    const shader = gl!.createShader(type);
    if (!shader) {
      throw new Error('Не удалось создать шейдер');
    }

    gl!.shaderSource(shader, source);
    gl!.compileShader(shader);

    if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
      const error = gl!.getShaderInfoLog(shader);
      gl!.deleteShader(shader);
      throw new Error(`Ошибка компиляции шейдера: ${error}`);
    }

    return shader;
  }

  // Создание программы
  function createProgram(vertexSource: string, fragmentSource: string): WebGLProgram {
    const vertexShader = compileShader(vertexSource, gl!.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentSource, gl!.FRAGMENT_SHADER);

    const program = gl!.createProgram();
    if (!program) {
      throw new Error('Не удалось создать программу');
    }

    gl!.attachShader(program, vertexShader);
    gl!.attachShader(program, fragmentShader);
    gl!.linkProgram(program);

    if (!gl!.getProgramParameter(program, gl!.LINK_STATUS)) {
      const error = gl!.getProgramInfoLog(program);
      gl!.deleteProgram(program);
      throw new Error(`Ошибка линковки программы: ${error}`);
    }

    return program;
  }

  // Создание буферов для геометрии
  function createBuffers(positions: Float32Array, colors: Float32Array) {
    if (!gl) {
      throw new Error('WebGL context is not initialized');
    }
    const positionBuffer = gl!.createBuffer();
    const colorBuffer = gl!.createBuffer();

    let vertexArray = null;
    if ('createVertexArray' in gl) {
      // WebGL 2 с VAO
      const vao = (gl as WebGL2RenderingContext).createVertexArray();
      if (vao) {
        (gl as WebGL2RenderingContext).bindVertexArray(vao);
        
        // Настраиваем атрибуты для VAO
        gl!.bindBuffer(gl!.ARRAY_BUFFER, positionBuffer);
        gl!.bufferData(gl!.ARRAY_BUFFER, positions, gl!.STATIC_DRAW);
        gl!.enableVertexAttribArray(0);
        gl!.vertexAttribPointer(0, 3, gl!.FLOAT, false, 0, 0);

        gl!.bindBuffer(gl!.ARRAY_BUFFER, colorBuffer);
        gl!.bufferData(gl!.ARRAY_BUFFER, colors, gl!.STATIC_DRAW);
        gl!.enableVertexAttribArray(1);
        gl!.vertexAttribPointer(1, 3, gl!.FLOAT, false, 0, 0);
        
        vertexArray = vao;
        (gl as WebGL2RenderingContext).bindVertexArray(null);
      }
    } else {
      // WebGL 1 без VAO - просто создаем буферы
      gl!.bindBuffer(gl!.ARRAY_BUFFER, positionBuffer);
      gl!.bufferData(gl!.ARRAY_BUFFER, positions, gl!.STATIC_DRAW);

      gl!.bindBuffer(gl!.ARRAY_BUFFER, colorBuffer);
      gl!.bufferData(gl!.ARRAY_BUFFER, colors, gl!.STATIC_DRAW);
    }

    return { position: positionBuffer!, color: colorBuffer!, vertexArray };
  }

  // Отрисовка геометрии
  function drawGeometry(
    buffers: { vertexArray: WebGLVertexArrayObject | null; position: WebGLBuffer; color: WebGLBuffer },
    modelMatrix: Matrix4,
    name: string
  ) {
    if (!gl) return;
    
    // Привязываем VAO (WebGL 2) или настраиваем атрибуты (WebGL 1)
    if (buffers.vertexArray && 'bindVertexArray' in gl) {
      (gl as WebGL2RenderingContext).bindVertexArray(buffers.vertexArray);
    } else {
      // Fallback для WebGL 1 - настраиваем атрибуты каждый кадр
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
    }

    gl.uniformMatrix4fv(modelLocation, false, modelMatrix.toArray());
    gl.drawArrays(gl.TRIANGLES, 0, 36);
  }

  // Обработка мыши для вращения камеры
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging || !camera) return;

    const deltaX = event.clientX - lastMouseX;
    const deltaY = event.clientY - lastMouseY;

    horizontalAngle += deltaX * 0.01;
    verticalAngle += deltaY * 0.01;
    verticalAngle = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, verticalAngle));

    camera.rotateAroundTarget(horizontalAngle, verticalAngle, radius);

    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleWheel(event: WheelEvent) {
    if (!camera) return;
    event.preventDefault();
    radius += event.deltaY * 0.01;
    radius = Math.max(2, Math.min(50, radius));
    camera.rotateAroundTarget(horizontalAngle, verticalAngle, radius);
  }

  onMount(() => {
    // Инициализация WebGL
    gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      throw new Error('WebGL не поддерживается');
    }

    const vertexSource = vertexBasic;
    const fragmentSource = fragmentBasic;

    program = createProgram(vertexSource, fragmentSource);
    gl.useProgram(program);

    // Получаем locations uniform переменных
    modelLocation = gl.getUniformLocation(program, 'uModelMatrix')!;
    viewLocation = gl.getUniformLocation(program, 'uViewMatrix')!;
    projectionLocation = gl.getUniformLocation(program, 'uProjectionMatrix')!;

    // Создаем буферы для куба
    const cubeGeometry = createCubeGeometry();
    cubeBuffers = createBuffers(cubeGeometry.positions, cubeGeometry.colors);

    // Создаем буферы для комнаты
    const roomGeometry = createRoomGeometry();
    roomBuffers = createBuffers(roomGeometry.positions, roomGeometry.colors);

    // Инициализация камеры
    camera = new Camera([0, 5, 15], [0, 0, 0], [0, 1, 0]);

    // Настройка WebGL
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);

    // Обработчики событий
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    // Флаг инициализации
    isInitialized = true;

    // Рендер-луп
    function render() {
      if (!gl) return;
      
      // Обновляем размер canvas
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        camera!.setAspect(canvas.width / canvas.height);
      }

      // Очистка
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Вращение куба
      cubeRotation += 0.01;

      // View и Projection матрицы
      const viewMatrix = camera!.getViewMatrix();
      const projectionMatrix = camera!.getProjectionMatrix();

      gl.uniformMatrix4fv(viewLocation, false, viewMatrix.toArray());
      gl.uniformMatrix4fv(projectionLocation, false, projectionMatrix.toArray());

      // Рисуем комнату
      const roomModelMatrix = new Matrix4();
      drawGeometry(roomBuffers!, roomModelMatrix, 'room');

      // Рисуем куб
      const cubeModelMatrix = Matrix4.rotateY(cubeRotation).multiply(Matrix4.rotateX(cubeRotation * 0.5));
      drawGeometry(cubeBuffers!, cubeModelMatrix, 'cube');

      animationFrameId = requestAnimationFrame(render);
    }

    render();
  });

  onDestroy(() => {
    if (!isInitialized) return;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    if (canvas) {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
    }
  });
</script>

<div class="container">
  <canvas bind:this={canvas} class="canvas"></canvas>
  <div class="overlay">
    <h2>WebGL Demo</h2>
    <p>ЛКМ + drag — вращение камеры</p>
    <p>Колесо — зум</p>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 600px;
  }

  .canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    font-family: monospace;
    font-size: 0.875rem;
    pointer-events: none;
  }

  .overlay h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .overlay p {
    margin: 0.25rem 0;
  }
</style>
