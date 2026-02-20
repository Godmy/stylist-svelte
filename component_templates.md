# Шаблоны нормализованных компонентов для дизайн-системы

## Общие принципы шаблонов

1. Каждый компонент имеет отдельный файл модели
2. Все компоненты используют унифицированные типы
3. Все story-файлы используют общий компонент Story.svelte
4. Соблюдение принципа единственной ответственности
5. Строгая типизация для всех пропсов
6. Последовательное использование токенов

## Шаблон компонента (index.svelte)

```svelte
<script lang="ts">
  import type { HTMLDivElement } from 'svelte/elements';
  import type { ComponentElementProps } from '$stylist/design-system/props/component';
  import { createState, COMPONENT_PRESET } from '$stylist/design-system/models/component.svelte';

  /**
   * ComponentName - краткое описание компонента
   *
   * @param variant - Визуальный стиль компонента (из семантических вариантов)
   * @param size - Размер компонента (из стандартной шкалы размеров)
   * @param disabled - Отключен ли компонент
   * @returns Описание возвращаемого элемента
   */

  let props: ComponentElementProps & HTMLDivElement = $props();

  // Централизованное управление состоянием
  let state = createState(COMPONENT_PRESET, props as any);

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

## Шаблон экспорта (index.ts)

```ts
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export { default as ComponentName } from './index.svelte';
```

## Шаблон Story-файла (index.story.svelte)

```svelte
<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ComponentName from './index.svelte';
  import type { IComponentNameProps } from '$stylist/design-system/props/component-name';

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
    primaryScenario?: IComponentNameProps;
    variantScenarios?: IComponentNameProps[];
    controls?: ControlConfig[]
  }>();

  // Сценарии по умолчанию
  const defaultPrimaryScenario: IComponentNameProps = {
    variant: 'primary',
    size: 'md'
  };

  const variantScenariosData: IComponentNameProps[] = [
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
  component={ComponentName}
  category="Atoms" // или "Molecules", "Organisms" в зависимости от типа компонента
  controls={controls}
>
  {#snippet children(props)}
    <ComponentName {...props}>
      Пример контента
    </ComponentName>
  {/snippet}
</Story>
```

## Шаблон файлов дизайн-системы

### 1. Файл пропсов (props/component-name.ts)

```ts
import type { Snippet } from 'svelte';
import type { HTMLDivAttributes } from 'svelte/elements';
import type { ComponentSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type { Props } from './common';

export interface IComponentElementProps extends Omit<Props, 'variant' | 'size'>, HTMLDivAttributes {
  variant?: DefaultVariants;
  size?: ComponentSize;
  children?: Snippet;
}

export type ComponentElementProps = IComponentElementProps;
```

### 2. Файл стилей (styles/component-name.ts)

```ts
import { 
  COMPONENT_BASE_CLASSES,
  COMPONENT_SIZE_CLASSES,
  COMPONENT_VARIANT_CLASSES 
} from '../classes/component-name';
import { COMPONENT_DEFAULTS } from '../state/component-name';
import { cn } from '../utils/cn';

export class ComponentStyleManager {
  static getClasses(
    variant: keyof typeof COMPONENT_VARIANT_CLASSES = COMPONENT_DEFAULTS.variant,
    size: keyof typeof COMPONENT_SIZE_CLASSES = COMPONENT_DEFAULTS.size,
    className = ''
  ): string {
    return cn(
      COMPONENT_BASE_CLASSES,
      COMPONENT_VARIANT_CLASSES[variant],
      COMPONENT_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}
```

### 3. Файл классов (classes/component-name.ts)

```ts
import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from './interaction';

export const COMPONENT_BASE_CLASSES = `${BASE_CLASSES.base} rounded-md border`;

export const COMPONENT_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  custom: 'bg-purple-500 text-white border-purple-600 hover:bg-purple-600'
} as const;

export const COMPONENT_SIZE_CLASSES = {
  sm: 'h-8 px-2 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg'
} as const;
```

### 4. Файл модели (models/component-name.svelte.ts)

```ts
import type { HTMLDivAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/props';
import type { Preset } from '$stylist/design-system/state/preset';
import { buildClasses } from '$stylist/utils/classes';
import { computeAriaLabel } from '$stylist/utils/aria';

type ComponentStateProps<V extends string, S extends string> = Omit<Props, 'variant' | 'size'> & {
  variant?: V;
  size?: S;
};

/**
 * Универсальный state creator для ComponentName
 * Обеспечивает реактивное управление состоянием с использованием Svelte 5 runes
 *
 * @param preset - Конфигурация пресета компонента
 * @param props - Пропсы компонента
 * @returns Реактивный объект состояния с классами, aria-атрибутами и вычисляемыми значениями
 */
export function createState<V extends string, S extends string>(
  preset: Preset<V, S>,
  props: ComponentStateProps<V, S> & HTMLDivAttributes
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

export const createComponentState = createState;
export default createComponentState;
```

### 5. Файл состояния (state/component-name.ts)

```ts
import { COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { INTERACTIVE_VARIANTS } from '../classes/interaction';
import { createDefaultValues } from './defaults';
import { createBasePreset } from './preset';

export const COMPONENT_DEFAULTS = createDefaultValues<
  (typeof INTERACTIVE_VARIANTS)[number],
  (typeof COMPACT_SIZE_SCALE)[number]
>(
  'primary',
  'md'
);

export const COMPONENT_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
  variant: 'primary',
  size: 'md'
});
```

## Шаблоны для разных типов компонентов

### Атомарный компонент (Atom Template)

Для простых компонентов, таких как кнопки, инпуты, иконки:

```svelte
<!-- index.svelte -->
<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { AtomElementProps } from '$stylist/design-system/props/atom';
  import { createState, ATOM_PRESET } from '$stylist/design-system/models/atom.svelte';

  let props: AtomElementProps & HTMLButtonAttributes = $props();

  let state = createState(ATOM_PRESET, props as any);

  let {
    variant,
    size,
    disabled,
    class: classProp,
    ...restProps
  } = props;
</script>

<button {...restProps} class={state.classes} {...state.attrs}>
  {@render props.children?.()}
</button>
```

### Молекулярный компонент (Molecule Template)

Для компонентов, состоящих из атомов:

```svelte
<!-- index.svelte -->
<script lang="ts">
  import type { HTMLDivElement } from 'svelte/elements';
  import type { MoleculeElementProps } from '$stylist/design-system/props/molecule';
  import { createState, MOLECULE_PRESET } from '$stylist/design-system/models/molecule.svelte';
  import { Atom } from '../atom';

  let props: MoleculeElementProps & HTMLDivElement = $props();

  let state = createState(MOLECULE_PRESET, props as any);

  let {
    variant,
    size,
    disabled,
    class: classProp,
    ...restProps
  } = props;
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  <Atom variant={variant} size={size} />
  {@render props.children?.()}
</div>
```

### Организменный компонент (Organism Template)

Для сложных компонентов, состоящих из молекул и атомов:

```svelte
<!-- index.svelte -->
<script lang="ts">
  import type { HTMLDivElement } from 'svelte/elements';
  import type { OrganismElementProps } from '$stylist/design-system/props/organism';
  import { createState, ORGANISM_PRESET } from '$stylist/design-system/models/organism.svelte';
  import { Molecule } from '../molecule';
  import { Atom } from '../atom';

  let props: OrganismElementProps & HTMLDivElement = $props();

  let state = createState(ORGANISM_PRESET, props as any);

  let {
    variant,
    size,
    disabled,
    class: classProp,
    ...restProps
  } = props;
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  <Molecule variant={variant} size={size}>
    <Atom />
  </Molecule>
  {@render props.children?.()}
</div>
```

## Рекомендации по использованию шаблонов

1. **Именование**: Используйте PascalCase для имен компонентов
2. **Типизация**: Всегда используйте строгую типизацию для пропсов
3. **Документация**: Добавляйте JSDoc-комментарии для всех пропсов
4. **Наследование**: Используйте общие интерфейсы из `common.ts`
5. **Токены**: Используйте общие токены из `tokens/` директории
6. **Стили**: Используйте CSS-классы из дизайн-системы
7. **Состояния**: Используйте централизованное управление состоянием через модели

## Проверка соответствия шаблону

Перед добавлением нового компонента убедитесь, что он соответствует следующим критериям:

- [ ] Использует runes для управления состоянием
- [ ] Имеет отдельный файл модели
- [ ] Использует унифицированные типы
- [ ] Имеет story-файл с использованием общего компонента Story
- [ ] Следует принципу единственной ответственности
- [ ] Имеет документацию для всех пропсов
- [ ] Использует токены дизайн-системы
- [ ] Проходит проверку типов без ошибок
- [ ] Имеет соответствующие тесты