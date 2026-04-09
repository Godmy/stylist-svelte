<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
const BarChart3 = 'bar-chart-3';
const ArrowRight = 'arrow-right';

  import { ConversionFunnelStyleManager } from '$stylist/marketing/class/style-manager/conversion-funnel';

  type FunnelStep = {
    id: string;
    name: string;
    value: number;
    color?: string;
  };

  type Props = {
    title?: string;
    subtitle?: string;
    steps: FunnelStep[];
    showPercentage?: boolean;
    showValues?: boolean;
    showTrend?: boolean;
    showConversionRate?: boolean;
    height?: number;
    class?: string;
    headerClass?: string;
    stepClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;

  let {
    title = 'Conversion Funnel',
    subtitle,
    steps = [],
    showPercentage = true,
    showValues = true,
    showTrend = true,
    showConversionRate = true,
    class: className = '',
    headerClass = '',
    ...restProps
  }: Props = $props();

  function getConversionRate(stepIndex: number): number {
    if (stepIndex === 0 || steps.length <= stepIndex) return 100;
    const current = steps[stepIndex].value;
    const previous = steps[stepIndex - 1].value;
    return previous > 0 ? Math.round((current / previous) * 100) : 0;
  }

  function getDropoff(stepIndex: number): number {
    if (stepIndex === 0 || steps.length <= stepIndex) return 0;
    const current = steps[stepIndex].value;
    const previous = steps[stepIndex - 1].value;
    return previous > 0 ? Math.round(((previous - current) / previous) * 100) : 0;
  }

  const maxValue = Math.max(...steps.map((s) => s.value), 100);
</script>

<div class={ConversionFunnelStyleManager.getContainerClass(className)} {...restProps}>
  <div class={ConversionFunnelStyleManager.getHeaderClass(headerClass)}>
    <div class="flex items-center">
      <BaseIcon name={BarChart3} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{title}</h3>
    </div>
    {#if subtitle}
      <p class="text-sm text-[var(--color-text-secondary)] mt-1">{subtitle}</p>
    {/if}
  </div>

  <div class="p-6">
    <div class="space-y-8">
      {#each steps as step, index}
        <div>
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <span class="text-sm font-medium text-[var(--color-text-primary)]">{step.name}</span>
              {#if showValues}
                <span class="ml-2 text-sm text-[var(--color-text-secondary)]">({step.value})</span>
              {/if}
              {#if showPercentage}
                <span class="ml-2 text-sm text-[var(--color-text-secondary)]">({Math.round((step.value / steps[0].value) * 100)}% of initial)</span>
              {/if}
            </div>

            {#if showConversionRate && index > 0}
              <div class="text-sm text-[var(--color-text-secondary)]">
                Conversion: {getConversionRate(index)}%
                {#if showTrend}
                  <span class="ml-2 text-xs">(Dropoff: {getDropoff(index)}%)</span>
                {/if}
              </div>
            {/if}
          </div>

          <div class="relative">
            <div class={ConversionFunnelStyleManager.getFunnelStepVisualizationClass()} style={ConversionFunnelStyleManager.getFunnelStepVisualizationStyle(step.value, maxValue, step.color)}>
              <span class="text-xs text-[var(--color-text-inverse)] font-medium ml-3">{step.value} ({Math.round((step.value / steps[0].value) * 100)}%)</span>
            </div>

            {#if showPercentage}
              <div class={ConversionFunnelStyleManager.getPercentageLabelClass()} style={`width: ${(step.value / maxValue) * 100}%;`}>
                {Math.round((step.value / steps[0].value) * 100)}%
              </div>
            {/if}
          </div>

          {#if index < steps.length - 1}
            <div class="flex justify-center mt-4">
              <BaseIcon name={ArrowRight} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>




