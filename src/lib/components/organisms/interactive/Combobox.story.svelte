<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Combobox from './Combobox.svelte';

  type ComboboxStoryProps = {
    label: string;
    description: string;
    placeholder: string;
    emptyText: string;
    clearable: boolean;
    disabled: boolean;
    loading: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'label', type: 'text', defaultValue: 'Ответственный' },
    { name: 'description', type: 'text', defaultValue: 'Назначьте сотрудника на задачу.' },
    { name: 'placeholder', type: 'text', defaultValue: 'Начните вводить имя...' },
    { name: 'emptyText', type: 'text', defaultValue: 'Совпадений не найдено' },
    { name: 'clearable', type: 'boolean', defaultValue: true },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'loading', type: 'boolean', defaultValue: false }
  ];

  const teammates = [
    { id: 'irina', label: 'Ирина Петрова', description: 'Product Designer', meta: 'Design' },
    { id: 'max', label: 'Максим Иванов', description: 'Frontend Engineer', meta: 'Web' },
    { id: 'sveta', label: 'Светлана Егорова', description: 'QA Lead', meta: 'Quality' },
    { id: 'alex', label: 'Алексей Смирнов', description: 'Project Manager', meta: 'Operations' },
    { id: 'katya', label: 'Екатерина Кузнецова', description: 'Data Analyst', meta: 'Analytics' }
  ];

  let selected = $state<string | null>('max');
</script>

<Story
  id="molecules-combobox"
  title="Combobox"
  component={Combobox}
  category="Molecules"
  description="Поле с автодополнением и поиском среди вариантов."
  tags={['autocomplete', 'search']}
  controls={controls}
>
  {#snippet children(props: ComboboxStoryProps)}
    <div class="space-y-6 max-w-md">
      <Combobox
        id="combobox-story"
        items={teammates}
        bind:value={selected}
        label={props.label}
        description={props.description}
        placeholder={props.placeholder}
        emptyText={props.emptyText}
        clearable={props.clearable}
        disabled={props.disabled}
        loading={props.loading}
      />

      <p class="text-sm text-gray-600">
        Текущий выбор: <span class="font-semibold">
          {selected ? teammates.find((item) => item.id === selected)?.label ?? '—' : 'не выбрано'}
        </span>
      </p>
    </div>
  {/snippet}
</Story>
