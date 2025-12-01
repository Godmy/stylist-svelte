<!--
/**
 * AccordionHeader Component - Следует принципам SOLID:
 *
 * 1. Single Responsibility Principle (SRP):
 *    Компонент отвечает только за отображение заголовка аккордеона и управление его состоянием.
 *    Логика стилизации вынесена в AccordionHeaderStyleManager.
 *
 * 2. Open/Closed Principle (OCP):
 *    Легко расширяется через пропсы и CSS-переменные темы.
 *
 * 3. Liskov Substitution Principle (LSP):
 *    Соблюдает контракт, определённый интерфейсом IAccordionHeaderProps.
 *
 * 4. Interface Segregation Principle (ISP):
 *    Использует минимально необходимый интерфейс IAccordionHeaderProps.
 *
 * 5. Dependency Inversion Principle (DIP):
 *    Зависит от абстракции (типов и стилей) а не от конкретных реализаций.
 */
-->
<script lang="ts">
  import type { IAccordionHeaderProps } from './types';
  import { AccordionHeaderStyleManager } from './styles';
  import { ChevronDown } from 'lucide-svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  // Используем $props() для получения пропсов в Svelte 5
  let {
    value,
    class: className = '',
    children,
    open = false,
    disabled = false,
    ...restProps
  }: IAccordionHeaderProps & HTMLButtonAttributes = $props();

  // Вычисляем CSS-классы с помощью StyleManager
  const headerClass = $derived(
    AccordionHeaderStyleManager.getHeaderClass(open, disabled, className)
  );

  const chevronClass = $derived(
    AccordionHeaderStyleManager.getChevronClass(open)
  );

  // Функция для обработки клика
  function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    if (!disabled) {
      // Вызываем событие через restProps если оно предоставлено
      if (restProps.onclick) {
        restProps.onclick(event);
      }
    }
  }
</script>

<button
  {...restProps}
  type="button"
  class={headerClass}
  onclick={handleClick}
  aria-expanded={open}
  aria-disabled={disabled}
>
  {@render children?.()}
  <ChevronDown class={chevronClass} />
</button>