<script lang="ts">
  import Rating from './Rating.svelte';
</script>

<!-- Основной экспорт для Story -->
<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Rating Component</h1>
  <div class="border p-4 rounded">
    <Rating
      rating={3}
      max={5}
      readonly={false}
      disabled={false}
      size="md"
    />
  </div>
</div>

<!-- Страница истории с примерами использования -->
<section>
  <h1>Компонент Rating</h1>
  <p>
    Компонент для отображения и выбора рейтинга с помощью звезд.
    Следует принципам SOLID и архитектуре Atomic Design.
  </p>

  <h2>Примеры использования</h2>

  <!-- Пример с разными размерами -->
  <h3>Размеры</h3>
  <div class="grid grid-cols-3 gap-4">
    <div>
      <h4>Маленький (sm)</h4>
      <Rating size="sm" rating={2} />
    </div>
    <div>
      <h4>Средний (md)</h4>
      <Rating size="md" rating={3} />
    </div>
    <div>
      <h4>Большой (lg)</h4>
      <Rating size="lg" rating={4} />
    </div>
  </div>

  <!-- Пример с разными количествами звезд -->
  <h3>Разное количество звезд</h3>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <label for="five-stars">5 звезд: </label>
      <Rating id="five-stars" rating={4} max={5} />
    </div>
    <div class="flex items-center gap-2">
      <label for="ten-stars">10 звезд: </label>
      <Rating id="ten-stars" rating={7} max={10} />
    </div>
  </div>

  <!-- Примеры для разных состояний -->
  <h3>Состояния компонента</h3>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <label for="normal-state">Нормальное состояние: </label>
      <Rating id="normal-state" rating={3} />
    </div>
    <div class="flex items-center gap-2">
      <label for="readonly-state">Только для чтения: </label>
      <Rating id="readonly-state" rating={4} readonly={true} />
    </div>
    <div class="flex items-center gap-2">
      <label for="disabled-state">Отключено: </label>
      <Rating id="disabled-state" rating={2} disabled={true} />
    </div>
  </div>
</section>