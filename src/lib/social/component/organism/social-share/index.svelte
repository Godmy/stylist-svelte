<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist/media';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
  import { Button } from '$lib';
  import { createSocialShareState } from '$stylist/social/function/state/social-share';
  import type { Props } from '$stylist/social/type/struct/social-share';

  let props: Props = $props();
  const state = createSocialShareState(props);
</script>

<div class={`social-share ${state.hostClass}`} {...props}>
  <div class="flex items-center space-x-2">
    <div class="relative share-container">
      <Button
        variant="ghost"
        size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
        class={`relative ${state.buttonClass}`}
        onclick={state.toggleDropdown}
        aria-haspopup="true"
        aria-expanded={state.showDropdown}
      >
        {#if state.copied}
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'check') ?? 'check'} class={state.iconSizeClasses} />
        {:else}
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'share-2') ?? 'share-2'} class={state.iconSizeClasses} />
        {/if}
        <span class="sr-only">Share</span>
      </Button>

      {#if state.showDropdown}
        <div
          class={`absolute z-[var(--z-index-docked)] mt-2 w-56 rounded-md shadow-lg bg-[var(--color-background-primary)] ring-1 ring-black ring-opacity-[var(--opacity-5)] ${state.dropdownClass}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="share-menu"
        >
          <div class="py-1" role="none">
            {#each state.availablePlatforms as platform}
              {#if platform.enabled}
                <button
                  type="button"
                  class={`flex items-center w-full px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] ${
                    platform.platform === 'copy' && state.copied ? 'bg-[var(--color-success-50)] text-[var(--color-success-700)]' : ''
                  }`}
                  onclick={() => state.handleShare(platform.platform)}
                  role="menuitem"
                >
                  <platform.icon class="mr-3 h-5 w-5" />
                  <span>{platform.label}</span>
                  {#if platform.platform === 'copy' && state.copied}
                    <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'check') ?? 'check'} class="ml-auto h-5 w-5 text-[var(--color-success-500)]" />
                  {/if}
                </button>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    </div>

    {#if props.showSave}
      <Button
        variant="ghost"
        size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
        onclick={state.handleSave}
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'bookmark') ?? 'bookmark'} class={state.iconSizeClasses} />
        <span class="sr-only">Save</span>
      </Button>
    {/if}

    {#if props.showLike}
      <Button
        variant="ghost"
        size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
        onclick={state.handleLike}
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'heart') ?? 'heart'} class={state.iconSizeClasses} />
        <span class="sr-only">Like</span>
      </Button>
    {/if}

    {#if props.showCopyLink}
      <Button
        variant="ghost"
        size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
        onclick={state.copyLink}
        title={state.copied ? 'Copied!' : 'Copy link'}
      >
        {#if state.copied}
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'check') ?? 'check'} class={state.iconSizeClasses} />
        {:else}
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'link') ?? 'link'} class={state.iconSizeClasses} />
        {/if}
        <span class="sr-only">{state.copied ? 'Copied!' : 'Copy link'}</span>
      </Button>
    {/if}
  </div>

  {#if state.copied}
    <div class="mt-2 inline-flex px-3 py-1 text-xs font-medium text-[var(--color-success-700)] bg-[var(--color-success-100)] rounded-full shadow-sm">
      Link copied to clipboard!
    </div>
  {/if}
</div>
