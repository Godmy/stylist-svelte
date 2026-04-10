import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

export type ShareOption = {
  platform: SocialPlatform;
  label: string;
  icon: any;
  enabled: boolean;
};

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type Props = RestProps & {
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
