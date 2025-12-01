<script lang="ts">
  import type { IErrorMessageProps } from './ErrorMessage.types';
  import { ErrorMessageStyleManager } from './ErrorMessage.styles';

  /**
   * Компонент ErrorMessage - отображает сообщения об ошибках с возможностью повторной попытки
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение ошибки
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному сообщению об ошибке
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через ErrorMessageStyleManager)
   */

  let {
    error,
    title = 'Error',
    onRetry,
    showRetry = true,
    ...restProps
  }: IErrorMessageProps = $props();

  // Local state
  let errorMessage = $state<string | null>(null);

  // Update error message when prop changes
  $effect(() => {
    if (error) {
      errorMessage = typeof error === 'string' ? error : error.message || 'An unknown error occurred';
    } else {
      errorMessage = null;
    }
  });

  // Вычисляем стили с использованием ErrorMessageStyleManager
  const baseClasses = $derived(ErrorMessageStyleManager.getBaseClasses());
  const titleClasses = $derived(ErrorMessageStyleManager.getTitleClasses());
  const textClasses = $derived(ErrorMessageStyleManager.getTextClasses());
  const buttonClasses = $derived(ErrorMessageStyleManager.getRetryButtonClasses());
  const buttonContainerClasses = $derived(ErrorMessageStyleManager.getButtonContainerClasses());
</script>

{#if errorMessage}
  <div class={baseClasses} {...restProps}>
    <div class={titleClasses}>{title}</div>
    <div class={textClasses}>{errorMessage}</div>
    {#if showRetry && onRetry}
      <div class={buttonContainerClasses}>
        <button
          class={buttonClasses}
          onclick={onRetry}
          aria-label="Retry action"
        >
          Retry
        </button>
      </div>
    {/if}
  </div>
{/if}