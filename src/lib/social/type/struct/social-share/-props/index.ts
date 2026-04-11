import type { RestProps } from '../rest-props';
import type { ShareOption } from '../shareoption';
import type { SocialPlatform } from '../socialplatform';

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
