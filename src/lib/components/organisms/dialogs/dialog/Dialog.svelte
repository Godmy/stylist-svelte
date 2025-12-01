<script lang="ts">
  import type { IDialogProps } from './types';
  import { DialogStyleManager } from './styles';
  import { X } from 'lucide-svelte';

  /**
   * Компонент Dialog - модальное окно для отображения информации или взаимодействия с пользователем
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение диалога
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному модальному окну
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через DialogStyleManager)
   */

  const props: IDialogProps = $props();

  let {
    open = false,
    title,
    description,
    children,
    footer,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    closable = true,
    onClose,
    width = 'md',
    variant = 'default',
    ...restProps
  } = props;

  function handleClose() {
    if (closable) {
      onClose?.();
    }
  }

  function handleBackdropClick(e: Event) {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }

  // Вычисляем стили с использованием DialogStyleManager
  const containerClasses = $derived(DialogStyleManager.getContainerClasses());
  const centeringContainerClasses = $derived(DialogStyleManager.getCenteringContainerClasses());
  const backdropClasses = $derived(DialogStyleManager.getBackdropClasses());
  const dialogWindowClasses = $derived(DialogStyleManager.getDialogWindowClasses(width, variant, hostClass));
  const contentClasses = $derived(DialogStyleManager.getContentClasses(contentClass));
  const headerClasses = $derived(DialogStyleManager.getHeaderClasses(headerClass));
  const titleClasses = $derived(DialogStyleManager.getTitleClasses());
  const descriptionContainerClasses = $derived(DialogStyleManager.getDescriptionContainerClasses());
  const descriptionClasses = $derived(DialogStyleManager.getDescriptionClasses());
  const closeButtonClasses = $derived(DialogStyleManager.getCloseButtonClasses());
  const closeIconClasses = $derived(DialogStyleManager.getCloseIconClasses());
  const bodyClasses = $derived(DialogStyleManager.getBodyClasses(bodyClass));
  const footerClasses = $derived(DialogStyleManager.getFooterClasses(footerClass));
  const hiddenSpanClasses = $derived(DialogStyleManager.getHiddenSpanClasses());
</script>

{#if open}
  <div
    class={containerClasses}
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    role="dialog"
    aria-modal="true"
  >
    <div class={centeringContainerClasses}>
      <button
        type="button"
        class={backdropClasses}
        onclick={handleBackdropClick}
        aria-label="Закрыть диалог"
      ></button>

      <span class={hiddenSpanClasses} aria-hidden="true">&#8203;</span>

      <div
        class={dialogWindowClasses}
        {...restProps}
      >
        <div class={contentClasses}>
          {#if title || description || closable}
            <div class={headerClasses}>
              <div class="flex-1">
                {#if title}
                  <h3
                    id="dialog-title"
                    class={titleClasses}
                  >
                    {title}
                  </h3>
                {/if}
                {#if description}
                  <div id="dialog-description" class={descriptionContainerClasses}>
                    <p class={descriptionClasses}>
                      {description}
                    </p>
                  </div>
                {/if}
              </div>
              {#if closable}
                <div class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class={closeButtonClasses}
                    onclick={handleClose}
                    aria-label="Закрыть"
                  >
                    <X class={closeIconClasses} />
                  </button>
                </div>
              {/if}
            </div>
          {/if}

          <div class={bodyClasses}>
            {#if children}
              {@render children()}
            {/if}
          </div>
        </div>

        {#if footer}
          <div class={footerClasses}>
            {@render footer()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
