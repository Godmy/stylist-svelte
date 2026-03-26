#version 300 es

// Атрибуты вершин
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aColor;

// Uniform матрицы
uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

// Выходные данные для fragment шейдера
out vec3 vColor;

void main() {
  // Вычисляем итоговую позицию вершины: MVP × position
  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);

  // Передаём цвет в fragment шейдер
  vColor = aColor;
}
