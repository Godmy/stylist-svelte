#version 300 es

precision mediump float;

// Входные данные от vertex шейдера
in vec3 vColor;

// Выходной цвет пикселя
out vec4 fragColor;

void main() {
  fragColor = vec4(vColor, 1.0);
}
