<script lang="ts">
  import { ImageWithCaptionStyleManager } from './styles';
  import type { IImageWithCaptionProps } from './types';

  /**
   * @component ImageWithCaption
   * @description Компонент для отображения изображения с подписью
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение изображения с подписью
   * - OCP: Легко расширяем через пропсы
   * - LSP: Поддерживает подстановку различных изображений
   * - ISP: Предоставляет минимально необходимый интерфейс взаимодействия
   * - DIP: Зависит от абстракций (типы и стили), а не от деталей реализации
   */
  let {
    src,
    alt = 'Image',
    caption,
    width = '100%',
    height = 'auto',
    class: hostClass = '',
    imageClass = '',
    captionClass = '',
    rounded = false,
    bordered = true,
    shadow = true,
    loading = 'lazy',
    ...restProps
  }: IImageWithCaptionProps = $props();
</script>

<div class={ImageWithCaptionStyleManager.getHostClasses(hostClass, rounded, bordered, shadow)} {...restProps}>
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading={loading}
    class={ImageWithCaptionStyleManager.getImageClasses(imageClass, rounded, bordered, shadow)}
  />
  {#if caption}
    <div class={ImageWithCaptionStyleManager.getCaptionClasses(captionClass)}>
      {caption}
    </div>
  {/if}
</div>
