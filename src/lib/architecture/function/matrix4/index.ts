/**
 * Класс для работы с 4x4 матрицами
 * Используется для MVP трансформаций в WebGL
 */
export class Matrix4 {
  public elements: Float32Array;

  constructor() {
    this.elements = new Float32Array(16);
    this.identity();
  }

  /**
   * Установить единичную матрицу
   */
  identity(): Matrix4 {
    this.elements.set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
    return this;
  }

  /**
   * Умножить матрицы (this × other)
   */
  multiply(other: Matrix4): Matrix4 {
    const a = this.elements;
    const b = other.elements;
    const result = new Float32Array(16);

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let sum = 0;
        for (let k = 0; k < 4; k++) {
          sum += a[row * 4 + k] * b[k * 4 + col];
        }
        result[row * 4 + col] = sum;
      }
    }

    this.elements = result;
    return this;
  }

  /**
   * Создать матрицу вращения вокруг оси X
   */
  static rotateX(angle: number): Matrix4 {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const matrix = new Matrix4();
    matrix.elements.set([
      1, 0, 0, 0,
      0, cos, -sin, 0,
      0, sin, cos, 0,
      0, 0, 0, 1
    ]);
    return matrix;
  }

  /**
   * Создать матрицу вращения вокруг оси Y
   */
  static rotateY(angle: number): Matrix4 {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const matrix = new Matrix4();
    matrix.elements.set([
      cos, 0, sin, 0,
      0, 1, 0, 0,
      -sin, 0, cos, 0,
      0, 0, 0, 1
    ]);
    return matrix;
  }

  /**
   * Создать матрицу вращения вокруг оси Z
   */
  static rotateZ(angle: number): Matrix4 {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const matrix = new Matrix4();
    matrix.elements.set([
      cos, -sin, 0, 0,
      sin, cos, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
    return matrix;
  }

  /**
   * Создать матрицу масштабирования
   */
  static scale(x: number, y: number, z: number): Matrix4 {
    const matrix = new Matrix4();
    matrix.elements.set([
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1
    ]);
    return matrix;
  }

  /**
   * Создать матрицу перемещения
   */
  static translate(x: number, y: number, z: number): Matrix4 {
    const matrix = new Matrix4();
    matrix.elements.set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1
    ]);
    return matrix;
  }

  /**
   * Создать матрицу перспективы
   */
  static perspective(fov: number, aspect: number, near: number, far: number): Matrix4 {
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    const matrix = new Matrix4();
    matrix.elements.set([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, (2 * far * near) * nf, 0
    ]);
    return matrix;
  }

  /**
   * Создать матрицу вида (lookAt)
   */
  static lookAt(eye: [number, number, number], center: [number, number, number], up: [number, number, number]): Matrix4 {
    const [ex, ey, ez] = eye;
    const [cx, cy, cz] = center;
    const [ux, uy, uz] = up;

    // Forward vector
    const fx = ex - cx;
    const fy = ey - cy;
    const fz = ez - cz;
    const fl = Math.sqrt(fx * fx + fy * fy + fz * fz);
    const fnx = fx / fl;
    const fny = fy / fl;
    const fnz = fz / fl;

    // Right vector
    const rx = fny * uz - fnz * uy;
    const ry = fnz * ux - fnx * uz;
    const rz = fnx * uy - fny * ux;
    const rl = Math.sqrt(rx * rx + ry * ry + rz * rz);
    const rnx = rx / rl;
    const rny = ry / rl;
    const rnz = rz / rl;

    // Up vector
    const unx = rny * fnz - rnz * fny;
    const uny = rnz * fnx - rnx * fnz;
    const unz = rnx * fny - rny * fnx;

    const matrix = new Matrix4();
    matrix.elements.set([
      rnx, rny, rnz, 0,
      unx, uny, unz, 0,
      fnx, fny, fnz, 0,
      -(rnx * ex + rny * ey + rnz * ez),
      -(unx * ex + uny * ey + unz * ez),
      -(fnx * ex + fny * ey + fnz * ez),
      1
    ]);
    return matrix;
  }

  /**
   * Получить массив элементов (для передачи в WebGL)
   */
  toArray(): Float32Array {
    return this.elements;
  }
}
