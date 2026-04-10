import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SOCIAL_SHARE_PLATFORM = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

export type SOCIAL_SHARE_OPTION = {
  platform: SOCIAL_SHARE_PLATFORM;
  label: string;
  icon: any;
  enabled: boolean;
};

export type SOCIAL_SHARE_REST_PROPS = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type SOCIAL_SHARE_PROPS = SOCIAL_SHARE_REST_PROPS & {
  title?: string;
  url?: string;
  description?: string;
  platforms?: SOCIAL_SHARE_PLATFORM[];
  showCopyLink?: boolean;
  showEmbed?: boolean;
  showSave?: boolean;
  showLike?: boolean;
  customOptions?: SOCIAL_SHARE_OPTION[];
  class?: string;
  buttonClass?: string;
  dropdownClass?: string;
  onShare?: (platform: SOCIAL_SHARE_PLATFORM, url: string) => void;
  onSave?: () => void;
  onLike?: () => void;
  size?: 'sm' | 'md' | 'lg';
};
