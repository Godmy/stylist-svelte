<script lang="ts">
  import { createFormHeaderState } from '$stylist/form/function/state/form-header';
  import type { SlotFormHeader as FormHeaderProps } from '$stylist/form/interface/slot/form-header';

  let {
    title,
    subtitle,
    description,
    actions,
    backAction,
    backButtonLabel = 'Back',
    class: className = '',
    titleClass = '',
    subtitleClass = '',
    descriptionClass = '',
    actionsClass = '',
    backButtonClass = '',
    ...restProps
  }: FormHeaderProps = $props();

  const state = createFormHeaderState({
    title,
    subtitle,
    description,
    actions,
    backAction,
    backButtonLabel,
    class: className,
    titleClass,
    subtitleClass,
    descriptionClass,
    actionsClass,
    backButtonClass
  });
</script>

<div class={state.rootClass} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <div class="flex items-center">
        {#if backAction}
          <button
            type="button"
            class={state.backButtonClass}
            onclick={backAction}
            aria-label={backButtonLabel}
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        {/if}
        <h1 class={state.titleClass}>{title}</h1>
      </div>
      
      {#if subtitle}
        <p class={state.subtitleClass}>{subtitle}</p>
      {/if}
    </div>
    
    {#if actions}
      <div class={state.actionsClass}>
        {@render actions()}
      </div>
    {/if}
  </div>
  
  {#if description}
    <p class={state.descriptionClass}>{description}</p>
  {/if}
</div>





