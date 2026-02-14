<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import RadioGroup from './RadioGroup.svelte';

  type RadioGroupStoryProps = {
    label: string;
    description: string;
    value: string;
    orientation: 'vertical' | 'horizontal';
    disabled: boolean;
    required: boolean;
    showError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Выберите план'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Определите подходящий тариф для команды.'
    },
    {
      name: 'value',
      type: 'select',
      defaultValue: 'pro',
      options: ['starter', 'pro', 'enterprise']
    },
    {
      name: 'orientation',
      type: 'select',
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showError',
      type: 'boolean',
      defaultValue: false
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
  id="atoms-radio-group"
  title="RadioGroup"
  component={RadioGroup}
  category="Atoms"
  description="Группа радиокнопок с описанием и поддержкой горизонтального режима."
  tags={['form', 'choice']}
  controls={controls}
>
  {#snippet children(props: any)}
    <RadioGroup
      name="plan-choice"
      label={props.label}
      description={props.description}
      options={options}
      orientation={props.orientation}
      value={props.value}
      disabled={props.disabled}
      required={props.required}
      error={props.showError ? 'Пожалуйста, выберите тариф.' : ''}
    />
  {/snippet}
</Story>



