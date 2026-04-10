<script lang="ts">
  import { Story } from '@google/gemini-cli';
  import Svg from './index.svelte';

  const simpleSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const circleSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`;

  const arrowSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
</script>

<Story title="SVG">
<div class="story-container">
  <h1 class="story-title">Svg Component</h1>
  <p class="story-description">
    Компонент для рендеринга SVG-изображений с поддержкой кастомизации размера, толщины обводки и accessibility-атрибутов.
  </p>

  <section class="story-section">
    <h2 class="story-section-title">Базовое использование</h2>
    <div class="story-example">
      <div class="example-card">
        <h3>Простая иконка</h3>
        <Svg svg={simpleSvg} size={48} />
      </div>
      <div class="example-card">
        <h3>Круг</h3>
        <Svg svg={circleSvg} size={48} />
      </div>
      <div class="example-card">
        <h3>Стрелка</h3>
        <Svg svg={arrowSvg} size={48} />
      </div>
    </div>
  </section>

  <section class="story-section">
    <h2 class="story-section-title">Размеры</h2>
    <div class="story-example">
      <div class="example-card">
        <h3>16px</h3>
        <Svg svg={arrowSvg} size={16} />
      </div>
      <div class="example-card">
        <h3>24px</h3>
        <Svg svg={arrowSvg} size={24} />
      </div>
      <div class="example-card">
        <h3>32px</h3>
        <Svg svg={arrowSvg} size={32} />
      </div>
      <div class="example-card">
        <h3>64px</h3>
        <Svg svg={arrowSvg} size={64} />
      </div>
      <div class="example-card">
        <h3>96px</h3>
        <Svg svg={arrowSvg} size={96} />
      </div>
    </div>
  </section>

  <section class="story-section">
    <h2 class="story-section-title">Толщина обводки</h2>
    <div class="story-example">
      <div class="example-card">
        <h3>strokeWidth={1}</h3>
        <Svg svg={circleSvg} size={48} strokeWidth={1} />
      </div>
      <div class="example-card">
        <h3>strokeWidth={2}</h3>
        <Svg svg={circleSvg} size={48} strokeWidth={2} />
      </div>
      <div class="example-card">
        <h3>strokeWidth={3}</h3>
        <Svg svg={circleSvg} size={48} strokeWidth={3} />
      </div>
      <div class="example-card">
        <h3>strokeWidth={4}</h3>
        <Svg svg={circleSvg} size={48} strokeWidth={4} />
      </div>
    </div>
  </section>

  <section class="story-section">
    <h2 class="story-section-title">Accessibility</h2>
    <div class="story-example">
      <div class="example-card">
        <h3>С aria-label</h3>
        <Svg svg={arrowSvg} size={48} aria-label="Стрелка вправо" />
      </div>
      <div class="example-card">
        <h3>Без aria-label (aria-hidden)</h3>
        <Svg svg={arrowSvg} size={48} />
      </div>
    </div>
  </section>

  <section class="story-section">
    <h2 class="story-section-title">API</h2>
    <div class="api-table-container">
      <table class="api-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>svg</code></td>
            <td><code>string</code></td>
            <td>—</td>
            <td>SVG-разметка для рендеринга</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>number | string</code></td>
            <td>—</td>
            <td>Размер иконки (число в px или строка с единицами)</td>
          </tr>
          <tr>
            <td><code>strokeWidth</code></td>
            <td><code>number</code></td>
            <td>—</td>
            <td>Толщина обводки SVG</td>
          </tr>
          <tr>
            <td><code>class</code></td>
            <td><code>string</code></td>
            <td>''</td>
            <td>Дополнительные CSS-классы</td>
          </tr>
          <tr>
            <td><code>aria-label</code></td>
            <td><code>string</code></td>
            <td>—</td>
            <td>Текстовая метка для доступности</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
</Story>

<style>
  .story-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .story-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }

  .story-description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .story-section {
    margin-bottom: 3rem;
  }

  .story-section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
  }

  .story-example {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .example-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fafafa;
    min-width: 120px;
  }

  .example-card h3 {
    font-size: 0.875rem;
    font-weight: 500;
    color: #666;
    margin: 0;
  }

  .api-table-container {
    overflow-x: auto;
  }

  .api-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
  }

  .api-table th,
  .api-table td {
    padding: 0.75rem 1rem;
    text-align: left;
    border: 1px solid #e0e0e0;
  }

  .api-table th {
    background: #f5f5f5;
    font-weight: 600;
    color: #333;
  }

  .api-table td code {
    background: #f0f0f0;
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.8125rem;
    color: #c7254e;
  }

  .api-table tr:hover {
    background: #f9f9f9;
  }
</style>
