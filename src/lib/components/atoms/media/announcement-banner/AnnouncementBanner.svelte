<script lang="ts">
  import type { IAnnouncementBannerProps } from './types';
  import {
    getAnnouncementBannerContainerClasses,
    getAnnouncementBannerIconClasses,
    getAnnouncementBannerContentClasses,
    getAnnouncementBannerTitleClasses,
    getAnnouncementBannerDescriptionClasses,
    getAnnouncementBannerChildrenContainerClasses,
    getAnnouncementBannerFlexContainerClasses
  } from './styles';

  export let title: IAnnouncementBannerProps['title'] = '';
  export let description: IAnnouncementBannerProps['description'] = '';
  export let icon: IAnnouncementBannerProps['icon'] = '';
  export let children: IAnnouncementBannerProps['children'] = undefined;
  export let className: IAnnouncementBannerProps['class'] = '';
</script>

<div class={getAnnouncementBannerContainerClasses(className)}>
  <div class={getAnnouncementBannerFlexContainerClasses()}>
    {#if icon}
      <img src={icon} alt="" class={getAnnouncementBannerIconClasses()} />
    {/if}
    <div class={getAnnouncementBannerContentClasses()}>
      <h3 class={getAnnouncementBannerTitleClasses()}>{title}</h3>
      {#if description}
        <p class={getAnnouncementBannerDescriptionClasses()}>{description}</p>
      {/if}
      {#if children}
        <div class={getAnnouncementBannerChildrenContainerClasses()}>
          {@render children()}
        </div>
      {/if}
    </div>
  </div>
</div>
