<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Share2, Link, Check, Facebook, Twitter, Linkedin, Mail, MessageCircle, Send, Bookmark, Heart } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

  type ShareOption = {
    platform: SocialPlatform;
    label: string;
    icon: any; // Lucide icon
    enabled: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    title?: string;
    url?: string;
    description?: string;
    platforms?: SocialPlatform[];
    showCopyLink?: boolean;
    showEmbed?: boolean;
    showSave?: boolean;
    showLike?: boolean;
    customOptions?: ShareOption[];
    class?: string;
    buttonClass?: string;
    dropdownClass?: string;
    onShare?: (platform: SocialPlatform, url: string) => void;
    onSave?: () => void;
    onLike?: () => void;
    size?: 'sm' | 'md' | 'lg';
  };

  let {
    title = 'Check this out',
    url = window?.location.href || '',
    description = 'Interesting content to share',
    platforms = ['facebook', 'twitter', 'linkedin', 'email'],
    showCopyLink = true,
    showEmbed = false,
    showSave = false,
    showLike = false,
    customOptions = [],
    class: hostClass = '',
    buttonClass = '',
    dropdownClass = '',
    onShare,
    onSave,
    onLike,
    size = 'md',
    ...restProps
  }: Props = $props();

  let showDropdown = $state(false);
  let copied = $state(false);

  // Default platform configurations
  const platformConfigs: Partial<Record<SocialPlatform, ShareOption>> = {
    facebook: {
      platform: 'facebook',
      label: 'Facebook',
      icon: Facebook,
      enabled: true
    },
    twitter: {
      platform: 'twitter',
      label: 'Twitter',
      icon: Twitter,
      enabled: true
    },
    linkedin: {
      platform: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      enabled: true
    },
    email: {
      platform: 'email',
      label: 'Email',
      icon: Mail,
      enabled: true
    },
    copy: {
      platform: 'copy',
      label: 'Copy Link',
      icon: Link,
      enabled: true
    },
    whatsapp: {
      platform: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      enabled: true
    },
    telegram: {
      platform: 'telegram',
      label: 'Telegram',
      icon: Send,
      enabled: true
    }
  };

  // Merge default platforms with custom options
  let availablePlatforms = $derived.by(() => {
    const defaults = platforms
      .map(platform => platformConfigs[platform])
      .filter((option): option is ShareOption => Boolean(option));
    
    return [...defaults, ...customOptions];
  });

  let buttonSizeClasses = $derived({
    'sm': 'h-8 w-8',
    'md': 'h-10 w-10',
    'lg': 'h-12 w-12'
  }[size]);

  let iconSizeClasses = $derived({
    'sm': 'h-4 w-4',
    'md': 'h-5 w-5',
    'lg': 'h-6 w-6'
  }[size]);

  function handleShare(platform: SocialPlatform) {
    const shareUrl = getShareUrl(platform);
    onShare?.(platform, shareUrl ?? url);
    
    if (platform === 'copy') {
      copyLink();
    } else if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    
    showDropdown = false;
  }

  function handleSave() {
    onSave?.();
  }

  function handleLike() {
    onLike?.();
  }

  function getShareUrl(platform: SocialPlatform): string | null {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    const encodedDescription = encodeURIComponent(description);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'pinterest':
        return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`;
      case 'reddit':
        return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
      case 'whatsapp':
        return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
      case 'telegram':
        return `https://t.me/share/url?url=${encodedUrl}&text=${encodedDescription}`;
      case 'email':
        return `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`;
      case 'copy':
        return null; // Handled separately
      default:
        return null;
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      
      // Reset copied state after 2 seconds
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  }

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function closeDropdown() {
    showDropdown = false;
  }

  // Handle clicks outside to close dropdown
  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showDropdown && !target.closest('.share-container')) {
        showDropdown = false;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
</script>

<div class={`social-share ${hostClass}`} {...restProps}>
  <div class="flex items-center space-x-2">
    <div class="relative share-container">
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
        class={`relative ${buttonClass}`}
        onclick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        {#if copied}
          <Check class={iconSizeClasses} />
        {:else}
          <Share2 class={iconSizeClasses} />
        {/if}
        <span class="sr-only">Share</span>
      </Button>
      
      {#if showDropdown}
        <div 
          class={`absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownClass}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="share-menu"
        >
          <div class="py-1" role="none">
            {#each availablePlatforms as platform}
              {#if platform.enabled}
                <button
                  type="button"
                  class={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    platform.platform === 'copy' && copied ? 'bg-green-50 text-green-700' : ''
                  }`}
                  onclick={() => handleShare(platform.platform)}
                  role="menuitem"
                >
                  <platform.icon class="mr-3 h-5 w-5" />
                  <span>{platform.label}</span>
                  {#if platform.platform === 'copy' && copied}
                    <Check class="ml-auto h-5 w-5 text-green-500" />
                  {/if}
                </button>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    </div>
    
    {#if showSave}
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
        onclick={handleSave}
      >
        <Bookmark class={iconSizeClasses} />
        <span class="sr-only">Save</span>
      </Button>
    {/if}
    
    {#if showLike}
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
        onclick={handleLike}
      >
        <Heart class={iconSizeClasses} />
        <span class="sr-only">Like</span>
      </Button>
    {/if}
    
    {#if showCopyLink}
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
        onclick={copyLink}
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {#if copied}
          <Check class={iconSizeClasses} />
        {:else}
          <Link class={iconSizeClasses} />
        {/if}
        <span class="sr-only">{copied ? 'Copied!' : 'Copy link'}</span>
      </Button>
    {/if}
  </div>
  
  {#if copied}
    <div class="mt-2 inline-flex px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full shadow-sm">
      Link copied to clipboard!
    </div>
  {/if}
</div>
