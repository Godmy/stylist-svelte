<script lang="ts">
  import PropsEditor from './PropsEditor.svelte';

  let {
    variant = 'primary'
  } = $props();

  // Example prop definitions for component
  const defaultPropDefinitions = [
    {
      name: 'title',
      type: 'string' as const,
      defaultValue: 'Default Title',
      description: 'Заголовок компонента'
    },
    {
      name: 'size',
      type: 'enum' as const,
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента'
    },
    {
      name: 'visible',
      type: 'boolean' as const,
      defaultValue: true,
      description: 'Видимость компонента'
    },
    {
      name: 'count',
      type: 'number' as const,
      defaultValue: 0,
      min: 0,
      max: 100,
      description: 'Количество элементов'
    }
  ];

  const buttonPropDefinitions = [
    {
      name: 'label',
      type: 'string' as const,
      defaultValue: 'Button',
      description: 'Текст кнопки'
    },
    {
      name: 'variant',
      type: 'enum' as const,
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'outline'],
      description: 'Вариант оформления кнопки'
    },
    {
      name: 'disabled',
      type: 'boolean' as const,
      defaultValue: false,
      description: 'Отключено ли состояние кнопки'
    },
    {
      name: 'size',
      type: 'number' as const,
      defaultValue: 14,
      min: 10,
      max: 24,
      step: 1,
      description: 'Размер шрифта кнопки'
    }
  ];

  const cardPropDefinitions = [
    {
      name: 'title',
      type: 'string' as const,
      required: true,
      description: 'Заголовок карточки'
    },
    {
      name: 'description',
      type: 'string' as const,
      description: 'Описание карточки'
    },
    {
      name: 'elevated',
      type: 'boolean' as const,
      defaultValue: false,
      description: 'Добавить тень карточке'
    },
    {
      name: 'width',
      type: 'number' as const,
      defaultValue: 300,
      min: 200,
      max: 800,
      description: 'Ширина карточки в пикселях'
    }
  ];

  // Example prop values
  const defaultPropValues = {
    title: 'My Component',
    size: 'medium',
    visible: true,
    count: 5
  };

  const buttonPropValues = {
    label: 'Click Me',
    variant: 'primary',
    disabled: false,
    size: 16
  };

  const cardPropValues = {
    title: 'Sample Card',
    description: 'This is a sample card component',
    elevated: true,
    width: 350
  };

  function handlePropChangeDefault(name: string, value: any) {
    console.log(`Default Prop ${name} changed to ${value}`);
  }

  function handlePropChangeButton(name: string, value: any) {
    console.log(`Button Prop ${name} changed to ${value}`);
  }

  function handlePropChangeCard(name: string, value: any) {
    console.log(`Card Prop ${name} changed to ${value}`);
  }
</script>

<!-- Example 1: Default Props -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Default Props</h3>
  <PropsEditor
    propDefinitions={defaultPropDefinitions}
    propValues={defaultPropValues}
    onPropChange={handlePropChangeDefault}
  />
</div>

<!-- Example 2: Button Props -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Button Props</h3>
  <PropsEditor
    propDefinitions={buttonPropDefinitions}
    propValues={buttonPropValues}
    onPropChange={handlePropChangeButton}
  />
</div>

<!-- Example 3: Card Props -->
<div class="p-4">
  <h3 class="text-lg font-semibold mb-2">Card Props</h3>
  <PropsEditor
    propDefinitions={cardPropDefinitions}
    propValues={cardPropValues}
    onPropChange={handlePropChangeCard}
  />
</div>