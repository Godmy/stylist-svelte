<script lang="ts">

  import { Icon as BaseIcon } from '$stylist';
  import { createStatusDashboardState } from '$stylist/management/function/state/status-dashboard';
  import type { StatusDashboardRecipe } from '$stylist/management/interface/recipe/status-dashboard';

  let props: StatusDashboardRecipe = $props();
  const state = createStatusDashboardState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
  {#if state.title || state.subtitle}
    <div class={state.headerClassComputed}>
      {#if state.title}
        <h2 class={state.titleClass}>{state.title}</h2>
      {/if}
      {#if state.subtitle}
        <p class={state.subtitleClass}>{state.subtitle}</p>
      {/if}
    </div>
  {/if}

  <div class={state.itemsGridClass}>
    {#each state.items as item}
      {@const statusInfo = state.resolveStatusPresentation(item.status)}
      <div class={state.itemCardClass + ' ' + statusInfo.border}>
        <div class={state.itemContentClass}>
          <div class={state.statusIconWrapperClass + ' ' + statusInfo.bg}>
            <BaseIcon name={statusInfo.icon} class={state.statusIconClass + ' ' + statusInfo.color} />
          </div>
          <div class="ml-3 flex-1">
            <div class={state.itemHeaderClass}>
              <h3 class={state.itemTitleClass}>{item.title}</h3>
              {#if item.value}
                <span class={state.itemValueClass}>{item.value}</span>
              {/if}
            </div>
            {#if item.description}
              <p class={state.itemDescriptionClass}>{item.description}</p>
            {/if}
          </div>
          {#if item.actions}
            <div class={state.itemActionsClass}>
              {@render item.actions()}
            </div>
          {/if}
        </div>

        {#if item.footer}
          <div class={state.itemFooterClass}>
            {@render item.footer()}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
