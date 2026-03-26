<script lang="ts">
  import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';

  export type Step = {
    id: string;
    title: string;
    description?: string;
    status: 'completed' | 'current' | 'upcoming';
    onClick?: () => void;
  };

  export type Props = {
    steps: Step[];
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    stepClass?: string;
    connectorClass?: string;
    labelClass?: string;
    descriptionClass?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;

  let {
    steps = [],
    orientation = 'horizontal',
    class: className = '',
    stepClass = '',
    connectorClass = '',
    labelClass = '',
    descriptionClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`w-full ${className} ${orientation === 'vertical' ? 'flex flex-col' : 'flex'}`} {...restProps}>
  {#each steps as step, index}
    <div class={`flex ${orientation === 'vertical' ? 'flex-col' : 'items-center'}`}>
      <!-- Step item -->
      <div class={`flex items-center ${orientation === 'vertical' ? 'flex-row' : 'flex-col'}`}>
        <button
          type="button"
          class={`flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border-2 ${
            step.status === 'completed' 
              ? 'bg-[var(--color-primary-500)] border-[var(--color-primary-500)] text-[var(--color-text-inverse)]' 
              : step.status === 'current' 
                ? 'bg-[var(--color-background-primary)] border-[var(--color-primary-500)] text-[var(--color-primary-500)]' 
                : 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)] text-[var(--color-text-secondary)]'
          } ${stepClass} ${step.onClick ? 'cursor-pointer' : 'cursor-default'}`}
          onclick={() => step.onClick && step.onClick()}
          aria-current={step.status === 'current' ? 'step' : undefined}
        >
          {#if step.status === 'completed'}
            <!-- Checkmark icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          {:else}
            {index + 1}
          {/if}
        </button>
        
        <div class={`ml-3 text-left ${orientation === 'vertical' ? 'mt-0' : 'mt-2'} ${labelClass}`}>
          <span class={`text-sm font-medium ${
            step.status === 'current' ? 'text-[var(--color-primary-600)]' : 
            step.status === 'completed' ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'
          }`}>
            {step.title}
          </span>
          {#if step.description}
            <p class={`text-xs ${descriptionClass} ${
              step.status === 'current' ? 'text-[var(--color-primary-600)]' : 
              step.status === 'completed' ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-tertiary)]'
            }`}>
              {step.description}
            </p>
          {/if}
        </div>
      </div>

      <!-- Connector -->
      {#if index < steps.length - 1}
        <div class={`${
          orientation === 'horizontal' 
            ? 'flex-grow h-0.5 w-full mx-4' 
            : 'w-0.5 h-full ml-4 mt-4'
        } ${
          steps[index + 1].status === 'completed' 
            ? 'bg-[var(--color-primary-500)]' 
            : 'bg-[var(--color-background-tertiary)]'
        } ${connectorClass}`}></div>
      {/if}
    </div>
  {/each}
</div>




