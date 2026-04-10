import type { Props, SocialPlatform, ShareOption } from '$stylist/social/type/struct/social-share';
import {
  SOCIAL_SHARE_FACEBOOK,
  SOCIAL_SHARE_TWITTER,
  SOCIAL_SHARE_LINKEDIN,
  SOCIAL_SHARE_MAIL,
  SOCIAL_SHARE_MESSAGE_CIRCLE,
  SOCIAL_SHARE_SEND,
  SOCIAL_SHARE_LINK
} from '$stylist/social/const/map/social-share';

export type SocialShareState = ReturnType<typeof createSocialShareState>;

export function createSocialShareState(props: Props) {
  let showDropdown = $state(false);
  let copied = $state(false);

  const platformConfigs: Partial<Record<SocialPlatform, ShareOption>> = {
    facebook: {
      platform: 'facebook',
      label: 'Facebook',
      icon: SOCIAL_SHARE_FACEBOOK,
      enabled: true
    },
    twitter: {
      platform: 'twitter',
      label: 'Twitter',
      icon: SOCIAL_SHARE_TWITTER,
      enabled: true
    },
    linkedin: {
      platform: 'linkedin',
      label: 'LinkedIn',
      icon: SOCIAL_SHARE_LINKEDIN,
      enabled: true
    },
    email: {
      platform: 'email',
      label: 'Email',
      icon: SOCIAL_SHARE_MAIL,
      enabled: true
    },
    copy: {
      platform: 'copy',
      label: 'Copy Link',
      icon: SOCIAL_SHARE_LINK,
      enabled: true
    },
    whatsapp: {
      platform: 'whatsapp',
      label: 'WhatsApp',
      icon: SOCIAL_SHARE_MESSAGE_CIRCLE,
      enabled: true
    },
    telegram: {
      platform: 'telegram',
      label: 'Telegram',
      icon: SOCIAL_SHARE_SEND,
      enabled: true
    }
  };

  const availablePlatforms = $derived.by(() => {
    const defaults = (props.platforms ?? ['facebook', 'twitter', 'linkedin', 'email'])
      .map(platform => platformConfigs[platform])
      .filter((option): option is ShareOption => Boolean(option));

    return [...defaults, ...(props.customOptions ?? [])];
  });

  const buttonSizeClasses = $derived({
    'sm': 'h-8 w-8',
    'md': 'h-10 w-10',
    'lg': 'h-12 w-12'
  }[props.size ?? 'md']);

  const iconSizeClasses = $derived({
    'sm': 'h-4 w-4',
    'md': 'h-5 w-5',
    'lg': 'h-6 w-6'
  }[props.size ?? 'md']);

  const handleShare = (platform: SocialPlatform) => {
    const shareUrl = getShareUrl(platform);
    props.onShare?.(platform, shareUrl ?? props.url ?? '');

    if (platform === 'copy') {
      copyLink();
    } else if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }

    showDropdown = false;
  };

  const handleSave = () => {
    props.onSave?.();
  };

  const handleLike = () => {
    props.onLike?.();
  };

  const getShareUrl = (platform: SocialPlatform): string | null => {
    const encodedTitle = encodeURIComponent(props.title ?? '');
    const encodedUrl = encodeURIComponent(props.url ?? '');
    const encodedDescription = encodeURIComponent(props.description ?? '');

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
        return null;
      default:
        return null;
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(props.url ?? '');
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const toggleDropdown = () => {
    showDropdown = !showDropdown;
  };

  const closeDropdown = () => {
    showDropdown = false;
  };

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

  const hostClass = $derived(props.class ?? '');
  const buttonClass = $derived(props.buttonClass ?? '');
  const dropdownClass = $derived(props.dropdownClass ?? '');

  return {
    showDropdown,
    copied,
    availablePlatforms,
    buttonSizeClasses,
    iconSizeClasses,
    handleShare,
    handleSave,
    handleLike,
    getShareUrl,
    copyLink,
    toggleDropdown,
    closeDropdown,
    hostClass,
    buttonClass,
    dropdownClass,
  };
}

export default createSocialShareState;
