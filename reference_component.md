# Этalonный компонент для дизайн-системы

## Обзор

В этом документе описан минимальный эталонный компонент, который должен служить образцом для всех остальных компонентов в дизайн-системе. Этот компонент демонстрирует все необходимые архитектурные элементы и практики.

## Структура эталонного компонента

### 1. Компонент в src/lib/components

#### Файл: `src/lib/components/atoms/example/example-component/index.svelte`

```svelte
<script lang="ts">
  import type { HTMLDivElement } from 'svelte/elements';
  import type { ExampleComponentElementProps } from '$stylist/design-system/props/example-component';
  import { createState, EXAMPLE_COMPONENT_PRESET } from '$stylist/design-system/models/example-component.svelte';

  /**
   * ExampleComponent - демонстрационный компонент для эталонной реализации
   *
   * @param variant - Визуальный стиль компонента ('primary' | 'secondary' | 'success' ...)
   * @param size - Размер компонента ('sm' | 'md' | 'lg')
   * @param disabled - Отключен ли компонент
   * @returns Стилизованный элемент
   */

  let props: ExampleComponentElementProps & HTMLDivElement = $props();

  // Централизованное управление состоянием
  let state = createState(EXAMPLE_COMPONENT_PRESET, props as any);

  // Извлечение rest-props вручную для работы в режиме runes
  let {
    variant,
    size,
    disabled,
    class: classProp,
    ...restProps
  } = props;
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  {@render props.children?.()}
</div>
```

#### Файл: `src/lib/components/atoms/example/example-component/index.ts`

```ts
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export { default as ExampleComponent } from './index.svelte';
```

#### Файл: `src/lib/components/atoms/example/example-component/index.story.svelte`

```svelte
<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ExampleComponent from './index.svelte';
  import type { IExampleComponentProps } from '$stylist/design-system/props/example-component';

  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = [
      { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'primary' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'disabled', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: IExampleComponentProps;
    variantScenarios?: IExampleComponentProps[];
    controls?: ControlConfig[]
  }>();

  // Сценарии по умолчанию
  const defaultPrimaryScenario: IExampleComponentProps = {
    variant: 'primary',
    size: 'md'
  };

  const variantScenariosData: IExampleComponentProps[] = [
    { variant: 'primary', size: 'md' },
    { variant: 'secondary', size: 'md' },
    { variant: 'success', size: 'md' },
    { variant: 'warning', size: 'md' },
    { variant: 'danger', size: 'md' }
  ];

  // Использовать предоставленные сценарии или значения по умолчанию
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;
</script>

<Story
  {id}
  {title}
  {description}
  component={ExampleComponent}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props)}
    <ExampleComponent {...props}>
      Пример контента
    </ExampleComponent>
  {/snippet}
</Story>
```

### 2. Файлы в дизайн-системе

#### Файл: `src/lib/design-system/props/example-component.ts`

```ts
import type { Snippet } from 'svelte';
import type { HTMLDivAttributes } from 'svelte/elements';
import type { ComponentSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type { Props } from './common';

export interface IExampleComponentElementProps extends Omit<Props, 'variant' | 'size'>, HTMLDivAttributes {
  variant?: DefaultVariants;
  size?: ComponentSize;
  children?: Snippet;
}

export type ExampleComponentElementProps = IExampleComponentElementProps;
```

#### Файл: `src/lib/design-system/styles/example-component.ts`

```ts
import { 
  EXAMPLE_COMPONENT_BASE_CLASSES,
  EXAMPLE_COMPONENT_SIZE_CLASSES,
  EXAMPLE_COMPONENT_VARIANT_CLASSES 
} from '../classes/example-component';
import { EXAMPLE_COMPONENT_DEFAULTS } from '../state/example-component';
import { cn } from '../utils/cn';

export class ExampleComponentStyleManager {
  static getClasses(
    variant: keyof typeof EXAMPLE_COMPONENT_VARIANT_CLASSES = EXAMPLE_COMPONENT_DEFAULTS.variant,
    size: keyof typeof EXAMPLE_COMPONENT_SIZE_CLASSES = EXAMPLE_COMPONENT_DEFAULTS.size,
    className = ''
  ): string {
    return cn(
      EXAMPLE_COMPONENT_BASE_CLASSES,
      EXAMPLE_COMPONENT_VARIANT_CLASSES[variant],
      EXAMPLE_COMPONENT_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}
```

#### Файл: `src/lib/design-system/classes/example-component.ts`

```ts
import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from './interaction';

export const EXAMPLE_COMPONENT_BASE_CLASSES = `${BASE_CLASSES.base} rounded-md border`;

export const EXAMPLE_COMPONENT_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  custom: 'bg-purple-500 text-white border-purple-600 hover:bg-purple-600'
} as const;

export const EXAMPLE_COMPONENT_SIZE_CLASSES = {
  sm: 'h-8 px-2 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg'
} as const;
```

#### Файл: `src/lib/design-system/models/example-component.svelte.ts`

```ts
import type { HTMLDivAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/props';
import type { Preset } from '$stylist/design-system/state/preset';
import { buildClasses } from '$stylist/utils/classes';
import { computeAriaLabel } from '$stylist/utils/aria';

type ExampleComponentStateProps<V extends string, S extends string> = Omit<Props, 'variant' | 'size'> & {
  variant?: V;
  size?: S;
};

/**
 * Универсальный state creator для ExampleComponent
 * Обеспечивает реактивное управление состоянием с использованием Svelte 5 runes
 *
 * @param preset - Конфигурация пресета компонента
 * @param props - Пропсы компонента
 * @returns Реактивный объект состояния с классами, aria-атрибутами и вычисляемыми значениями
 */
export function createState<V extends string, S extends string>(
  preset: Preset<V, S>,
  props: ExampleComponentStateProps<V, S> & HTMLDivAttributes
) {
  const variant = $derived((props.variant ?? preset.defaults.variant) as V);
  const size = $derived((props.size ?? preset.defaults.size) as S);
  const disabled = $derived(props.disabled ?? preset.defaults.disabled);

  const classes = $derived(
    buildClasses(preset, {
      variant,
      size,
      disabled,
      className: props.class
    })
  );

  const ariaLabel = $derived(computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, ''));

  const attrs = $derived({
    'aria-disabled': disabled,
    'aria-label': ariaLabel || undefined,
    disabled
  });

  // Использовать геттеры для избежания захвата начальных значений вне реактивного контекста
  return {
    get variant() {
      return variant;
    },
    get size() {
      return size;
    },
    get disabled() {
      return disabled;
    },
    get classes() {
      return classes;
    },
    get ariaLabel() {
      return ariaLabel;
    },
    get attrs() {
      return attrs;
    }
  };
}

export const createExampleComponentState = createState;
export default createExampleComponentState;
```

#### Файл: `src/lib/design-system/state/example-component.ts`

```ts
import { COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { INTERACTIVE_VARIANTS } from '../classes/interaction';
import { createDefaultValues } from './defaults';
import { createBasePreset } from './preset';

export const EXAMPLE_COMPONENT_DEFAULTS = createDefaultValues<
  (typeof INTERACTIVE_VARIANTS)[number],
  (typeof COMPACT_SIZE_SCALE)[number]
>(
  'primary',
  'md'
);

export const EXAMPLE_COMPONENT_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
  variant: 'primary',
  size: 'md'
});
```

## Ключевые особенности эталонного компонента

1. **Полная типизация** - все пропсы строго типизированы
2. **Централизованное управление состоянием** - использование моделей состояния
3. **Гибкая стилизация** - поддержка всех вариантов и размеров через стилевые менеджеры
4. **Интерактивная демонстрация** - полнофункциональный story-файл
5. **Совместимость с runes** - корректная работа с новыми возможностями Svelte 5
6. **Доступность** - поддержка ARIA-атрибутов и клавиатурной навигации

## Использование эталона

Все новые компоненты должны следовать этой структуре, адаптируя только специфичные для компонента части:

- HTML-тег и атрибуты
- Специфичные пропсы
- Специфичные стили
- Специфичные варианты и размеры