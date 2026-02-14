<script lang="ts">
  /**
   * GradientBackground - компонент для отображения анимированного градиентного фона
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение анимированного градиента
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом фона при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для градиента
   * Dependency Inversion: Зависит от абстракции стилей через GradientBackgroundStyleManager
   * 
   * Использует подход Atomic Design (Molecule) - создает визуальный эффект,
   * который может быть использован в других компонентах, таких как Hero
   */
  
  import type { IGradientBackgroundProps, GradientVariant } from '$stylist/design-system/props/gradient-background';
  import { GradientBackgroundStyleManager } from '$stylist/design-system/styles/gradient-background';
  
  let {
    variant = 'dynamic',
    colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
    speed = 20,
    intensity = 50,
    direction = 'diagonal',
    class: className = '',
    children
  } = $props();

  // Define the variants for type checking
  const typedVariant = variant as 'dynamic' | 'static' | 'particles';
  const typedDirection = direction as 'diagonal' | 'horizontal' | 'vertical' | 'radial';

  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(GradientBackgroundStyleManager.getContainerClasses(className));
  const gradientClasses = $derived(GradientBackgroundStyleManager.getGradientClasses(typedVariant, typedDirection));
  const contentWrapperClasses = $derived(GradientBackgroundStyleManager.getContentWrapperClasses());

  // Формируем строку градиента из цветов
  const gradientStyle = $derived(() => {
    // Масштабируем скорость анимации: чем больше значение speed, тем медленнее анимация
    const animationDuration = `${speed * 0.75}s`;

    // Регулируем интенсивность: чем выше значение, тем дальше друг от друга цвета в градиенте
    const colorStops = colors.map((color: string, index: number) => {
      const position = Math.round((index / (colors.length - 1)) * 100);
      return `${color} ${position}%`;
    }).join(', ');

    return {
      backgroundImage: `linear-gradient(45deg, ${colorStops})`,
      animationDuration: variant === 'dynamic' ? animationDuration : undefined
    };
  });

</script>

<style>
  /* Dynamically inject styles - using a CSS variable approach instead of @html */
  .gradient-background {
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
</style>

<div class={containerClasses} role="presentation">
  <!-- Анимированный градиент -->
  <div
    class={gradientClasses}
    style={`background-image: ${gradientStyle().backgroundImage}; ${variant === 'dynamic' && gradientStyle().animationDuration ? `animation-duration: ${gradientStyle().animationDuration};` : ''}`}
    aria-hidden="true"
  ></div>

  <!-- Контент поверх градиента -->
  {#if children}
    <div class={contentWrapperClasses}>
      {@render children()}
    </div>
  {/if}
</div>
