<script lang="ts">
  import type { AnnouncementBannerProps } from '$stylist/design-system/media';
  import { createAnnouncementBannerState } from '../state.svelte';

  let props: AnnouncementBannerProps = $props();
  const state = createAnnouncementBannerState(props);
</script>

<div class={state.containerClasses}>
  <div class={state.flexClasses}>
    {#if props.icon}
      <img src={props.icon} alt="" class={state.iconClasses} />
    {/if}
    <div class={state.contentClasses}>
      <h3 class={state.titleClasses}>{props.title ?? ''}</h3>
      {#if props.description}
        <p class={state.descriptionClasses}>{props.description}</p>
      {/if}
      {#if props.children}
        <div class={state.childrenClasses}>
          {@render props.children()}
        </div>
      {/if}
    </div>
  </div>
</div>
