<script lang="ts">
  import MetricCard from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Atoms SOLID Compliance',
      description: 'Название метрики'
    },
    {
      name: 'value',
      type: 'number',
      defaultValue: 40,
      description: 'Значение метрики'
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 75,
      description: 'Максимальное значение для расчёта прогресса'
    },
    {
      name: 'percentage',
      type: 'number',
      defaultValue: 53.3,
      description: 'Процентное значение метрики'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: '40 out of 75 atoms are fully compliant',
      description: 'Описание метрики'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'success',
      options: ['success', 'warning', 'danger', 'info'],
      description: 'Вариант оформления метрики'
    },
    {
      name: 'showProgressBar',
      type: 'boolean',
      defaultValue: true,
      description: 'Показывать ли прогресс-бар'
    },
    {
      name: 'class',
      type: 'text',
      defaultValue: '',
      description: 'Дополнительные CSS классы'
    }
  ];
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">MetricCard Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive MetricCard</h2>
    <Story {controls} component={MetricCard} />
  </div>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Success Variant</h3>
      <MetricCard 
        title="Atoms SOLID Compliance" 
        value={40} 
        max={75} 
        percentage={53.3} 
        description="40 out of 75 atoms are fully compliant" 
        variant="success" 
        showProgressBar={true} 
      />
    </div>
    
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Warning Variant</h3>
      <MetricCard 
        title="Test Coverage" 
        value={65} 
        max={100} 
        percentage={65} 
        description="Below target threshold" 
        variant="warning" 
      />
    </div>
    
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Danger Variant</h3>
      <MetricCard 
        title="Bugs Found" 
        value={23} 
        max={50} 
        percentage={46} 
        description="Above acceptable threshold" 
        variant="danger" 
      />
    </div>
    
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Without Progress Bar</h3>
      <MetricCard 
        title="Total Components" 
        value={429} 
        max={500} 
        percentage={85.8} 
        description="Components in library" 
        showProgressBar={false} 
      />
    </div>
  </div>
</div>
