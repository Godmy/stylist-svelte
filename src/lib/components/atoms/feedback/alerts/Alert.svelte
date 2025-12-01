<script lang="ts">
  import type { IAlertProps } from './types';
  import { AlertStyleManager } from './styles';
  import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-svelte';

  /**
   * Компонент Alert - отображает важные сообщения пользователю с разными вариантами
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение алерта
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному сообщению
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через AlertStyleManager)
   */

  let {
    variant = 'info',
    title,
    closable = false,
    icon = true,
    content,
    children,
    ...restProps
  }: IAlertProps = $props();

  let open = $state(true);

  let IconComponent = $derived({
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle
  }[variant]);

  // Вычисляем стили с использованием AlertStyleManager
  const alertClasses = $derived(AlertStyleManager.getBaseClasses(variant));
  const iconContainerClasses = $derived(AlertStyleManager.getIconContainerClasses());
  const iconClasses = $derived(AlertStyleManager.getIconClasses(variant));
  const textContainerClasses = $derived(AlertStyleManager.getTextContainerClasses());
  const titleClasses = $derived(AlertStyleManager.getTitleClasses());
  const contentContainerClasses = $derived(AlertStyleManager.getContentContainerClasses());
  const mainContainerClasses = $derived(AlertStyleManager.getMainContainerClasses());
  const closeButtonContainerClasses = $derived(AlertStyleManager.getCloseButtonContainerClasses());
  const closeButtonClasses = $derived(AlertStyleManager.getCloseButtonClasses(variant));

  // Функция для закрытия алерта
  function handleClose() {
    open = false;
  }
</script>

{#if open}
  <div
    role="alert"
    class={alertClasses}
    aria-live="polite"
    aria-atomic="true"
    {...restProps}
  >
    <div class={mainContainerClasses}>
      {#if icon}
        <div class={iconContainerClasses}>
          <IconComponent class={iconClasses} aria-hidden="true" />
        </div>
      {/if}
      <div class={textContainerClasses}>
        {#if title}
          <h3 class={titleClasses}>{title}</h3>
        {/if}
        <div class={contentContainerClasses}>
          <p>
            {#if content}
              {@render content()}
            {:else if children}
              {@render children()}
            {/if}
          </p>
        </div>
      </div>
      {#if closable}
        <div class={closeButtonContainerClasses}>
          <button
            type="button"
            class={closeButtonClasses}
            aria-label="Закрыть"
            onclick={handleClose}
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
