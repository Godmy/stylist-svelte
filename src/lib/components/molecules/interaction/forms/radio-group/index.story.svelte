<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import RadioGroup from './RadioGroup.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Выберите план',
      description: 'Label for the radio group'
    },
    {
      name: 'description',
      type: 'text' as ControlType,
      defaultValue: 'Определите подходящий тариф для команды.',
      description: 'Description for the radio group'
    },
    {
      name: 'value',
      type: 'select' as ControlType,
      defaultValue: 'pro',
      options: ['starter', 'pro', 'enterprise'],
      description: 'Selected value'
    },
    {
      name: 'orientation',
      type: 'select' as ControlType,
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the radio group'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the radio group is disabled'
    },
    {
      name: 'required',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether the radio group is required'
    },
    {
      name: 'showError',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to show error state'
    }
  ];

  const options = [
    {
      value: 'starter',
      label: 'Starter',
      description: 'Базовые функции для малого проекта.'
    },
    {
      value: 'pro',
      label: 'Pro',
      description: 'Продвинутые инструменты для команд средней величины.'
    },
    {
      value: 'enterprise',
      label: 'Enterprise',
      description: 'Расширенные настройки и поддержка 24/7.',
      disabled: false
    }
  ];
</script>

<Story
  {controls}
  title="RadioGroup Component"
  description="Группа радиокнопок с описанием и поддержкой горизонтального режима"
  let:controlValues
>
  <RadioGroup
    name="plan-choice"
    label={controlValues.label}
    description={controlValues.description}
    options={options}
    orientation={controlValues.orientation}
    value={controlValues.value}
    disabled={controlValues.disabled}
    required={controlValues.required}
    error={controlValues.showError ? 'Пожалуйста, выберите тариф.' : ''}
  />
</Story>